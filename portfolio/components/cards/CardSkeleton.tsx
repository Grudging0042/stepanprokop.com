import { Skeleton } from "@/components/ui/Skeleton";
import { cn } from "@/lib/utils";

type CardVariant = "portfolio" | "blog" | "component";

const ASPECT_RATIOS: Record<CardVariant, string> = {
  portfolio: "aspect-square",
  blog: "aspect-[16/9]",
  component: "aspect-[4/3]",
};

interface CardSkeletonProps {
  variant: CardVariant;
  className?: string;
}

export function CardSkeleton({ variant, className }: CardSkeletonProps) {
  const showDescription = variant === "blog" || variant === "component";

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-col items-start gap-2">
        <div className={cn("relative w-full", ASPECT_RATIOS[variant])}>
          <Skeleton className="h-full w-full rounded-2xl" />
          {variant === "component" && (
            <Skeleton className="absolute right-3 top-3 h-9 w-9 rounded-md" />
          )}
        </div>

        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full items-start justify-between gap-2">
            <Skeleton className="h-6 flex-1" />
            <Skeleton className="h-6 w-20 shrink-0" />
          </div>
          {showDescription && <Skeleton className="mt-1 h-12 w-full" />}
        </div>
      </div>
    </div>
  );
}
