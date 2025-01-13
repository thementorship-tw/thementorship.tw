import Image from "next/image";

export default async function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-white">
      <div className="flex flex-col items-center">
        <Image
          src="/images/not-found.png"
          alt="Not Found"
          width={120}
          height={120}
          className="mb-5"
        />
        <div className="text-h5 font-semibold text-blue-8">Page Not Found</div>
      </div>
    </div>
  );
}
