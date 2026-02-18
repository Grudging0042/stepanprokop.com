import { Skeleton } from "@/components/ui/Skeleton";
import { CardSkeleton } from "@/components/cards/CardSkeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-background-primary">
      {/* Hero Section Skeleton */}
      <section className="flex w-full flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20">
        <div className="flex w-full max-w-[644px] flex-col items-center gap-6 text-center sm:gap-8">
          <Skeleton className="h-[100px] w-[100px] rounded-full" />
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <Skeleton className="h-7 w-48" />
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-24 w-full max-w-2xl" />
          </div>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Skeleton className="h-9 w-32" />
            <Skeleton className="h-9 w-32" />
            <Skeleton className="h-9 w-32" />
          </div>
        </div>
      </section>

      <main className="flex w-full flex-col">
        {/* Portfolio */}
        <section className="w-full px-4 py-12 sm:py-16">
          <div className="mx-auto w-full max-w-[644px]">
            <Skeleton className="mb-6 h-6 w-32 sm:mb-8" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
              <CardSkeleton variant="portfolio" />
              <CardSkeleton variant="portfolio" />
              <CardSkeleton variant="portfolio" />
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="w-full px-4 py-12 sm:py-16">
          <div className="mx-auto w-full max-w-[644px]">
            <Skeleton className="mb-6 h-6 w-40 sm:mb-8" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
              <CardSkeleton variant="component" />
              <CardSkeleton variant="component" />
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="w-full px-4 py-12 sm:py-16">
          <div className="mx-auto w-full max-w-[644px]">
            <Skeleton className="mb-6 h-6 w-24 sm:mb-8" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
              <CardSkeleton variant="blog" />
              <CardSkeleton variant="blog" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
