"use client";

import { PropsWithChildren } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import PostHogPageView from "@/components/common/PostHogPageView";

if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY &&
  process.env.NEXT_PUBLIC_POSTHOG_HOST &&
  process.env.NODE_ENV === "production"
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
    // NOTE: because the special behavior in Next.js, we need to capture the events manually, ref: https://posthog.com/docs/libraries/next-js#capturing-pageviews
    capture_pageview: false,
    capture_pageleave: true,
  });
}

export function CSPostHogProvider({ children }: PropsWithChildren) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PostHogProvider>
  );
}
