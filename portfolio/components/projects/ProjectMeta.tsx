import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface ProjectMetaProps {
  client?: string;
  year?: number;
  role?: string;
  tools?: string[];
  industry?: string;
  className?: string;
  variant?: "default" | "compact";
}

export function ProjectMeta({
  client,
  year,
  role,
  tools,
  industry,
  className,
  variant = "default",
}: ProjectMetaProps) {
  const isCompact = variant === "compact";

  return (
    <div className={cn("space-y-3", className)}>
      {/* Basic info grid */}
      <div
        className={cn(
          "grid gap-3",
          isCompact ? "grid-cols-2 text-sm" : "grid-cols-1 sm:grid-cols-2"
        )}
      >
        {client && (
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Client</dt>
            <dd className={cn("font-medium", isCompact ? "text-sm" : "text-base")}>
              {client}
            </dd>
          </div>
        )}

        {year && (
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Year</dt>
            <dd className={cn("font-medium", isCompact ? "text-sm" : "text-base")}>{year}</dd>
          </div>
        )}

        {role && (
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Role</dt>
            <dd className={cn("font-medium", isCompact ? "text-sm" : "text-base")}>{role}</dd>
          </div>
        )}

        {industry && (
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Industry</dt>
            <dd className={cn("font-medium", isCompact ? "text-sm" : "text-base")}>
              {industry}
            </dd>
          </div>
        )}
      </div>

      {/* Tools */}
      {tools && tools.length > 0 && (
        <div>
          <dt className="mb-2 text-sm font-medium text-muted-foreground">Tools & Technologies</dt>
          <dd className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="secondary" className={isCompact ? "text-xs" : undefined}>
                {tool}
              </Badge>
            ))}
          </dd>
        </div>
      )}
    </div>
  );
}
