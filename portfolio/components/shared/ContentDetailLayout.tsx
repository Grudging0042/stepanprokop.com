import { BackButton } from "./BackButton";

interface ContentDetailLayoutProps {
  children: React.ReactNode;
}

export function ContentDetailLayout({ children }: ContentDetailLayoutProps) {
  return (
    <div className="container-narrow py-12">
      <BackButton className="mb-6" />

      {children}

      <div className="mt-12 border-t pt-8">
        <BackButton />
      </div>
    </div>
  );
}
