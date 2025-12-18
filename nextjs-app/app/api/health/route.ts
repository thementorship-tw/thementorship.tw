import { NextResponse } from "next/server";

const SERVICE_ID = "thementorship-tw-nextjs";

const COMMON_HEADERS = {
  "Content-Type": "application/health+json",
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
};

interface HealthCheck {
  name: string;
  status: "pass" | "fail" | "warn";
  componentType?: "system" | "datastore" | "http";
  time?: string;
  output?: string;
}

interface HealthResponse {
  status: "pass" | "fail" | "warn";
  releaseId?: string;
  notes?: string[];
  output?: string;
  details?: Record<string, HealthCheck>;
  serviceId?: string;
  description?: string;
}

async function performHealthChecks(): Promise<HealthCheck[]> {
  const checks: HealthCheck[] = [];

  // System health check
  try {
    const memoryUsage = process.memoryUsage();
    const memoryUsedMB =
      Math.round((memoryUsage.heapUsed / 1024 / 1024) * 100) / 100;
    const memoryTotalMB =
      Math.round((memoryUsage.heapTotal / 1024 / 1024) * 100) / 100;
    const memoryUsagePercent =
      memoryTotalMB > 0 ? (memoryUsedMB / memoryTotalMB) * 100 : 0;

    checks.push({
      name: "system:memory",
      status:
        memoryUsagePercent > 90
          ? "fail"
          : memoryUsagePercent > 75
            ? "warn"
            : "pass",
      componentType: "system",
      time: new Date().toISOString(),
      output: `Memory usage: ${memoryUsedMB}MB / ${memoryTotalMB}MB (${Math.round(memoryUsagePercent)}%)`,
    });
  } catch (error) {
    checks.push({
      name: "system:memory",
      status: "fail",
      componentType: "system",
      time: new Date().toISOString(),
      output: `Memory check failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    });
  }

  // Uptime check
  const uptimeSeconds = process.uptime();
  checks.push({
    name: "system:uptime",
    status: "pass",
    componentType: "system",
    time: new Date().toISOString(),
    output: `Uptime: ${Math.round(uptimeSeconds)}s`,
  });

  return checks;
}

export async function GET() {
  const startTime = Date.now();

  try {
    const checks = await performHealthChecks();
    const details: Record<string, HealthCheck> = {};

    // Convert checks array to details object
    checks.forEach((check) => {
      details[check.name] = check;
    });

    // Determine overall status
    const hasFailure = checks.some((check) => check.status === "fail");
    const hasWarning = checks.some((check) => check.status === "warn");
    const overallStatus: "pass" | "fail" | "warn" = hasFailure
      ? "fail"
      : hasWarning
        ? "warn"
        : "pass";

    const releaseId =
      process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.ZEABUR_GIT_COMMIT_SHA;
    const healthResponse: HealthResponse = {
      status: overallStatus,
      ...(releaseId && { releaseId }),
      serviceId: SERVICE_ID,
      description: "The Mentorship Taiwan Next.js Application",
      details,
    };

    const responseTime = Date.now() - startTime;
    const statusCode = overallStatus === "fail" ? 503 : 200;

    return NextResponse.json(healthResponse, {
      status: statusCode,
      headers: {
        ...COMMON_HEADERS,
        "X-Response-Time": `${responseTime}ms`,
      },
    });
  } catch (error) {
    const errorResponse: HealthResponse = {
      status: "fail",
      serviceId: SERVICE_ID,
      description: "The Mentorship Taiwan Next.js Application",
      output: `Health check failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      details: {
        "system:health-check": {
          name: "system:health-check",
          status: "fail",
          componentType: "system",
          time: new Date().toISOString(),
          output: `Health check execution failed: ${error instanceof Error ? error.message : "Unknown error"}`,
        },
      },
    };

    return NextResponse.json(errorResponse, {
      status: 503,
      headers: COMMON_HEADERS,
    });
  }
}
