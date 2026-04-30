import Link from "next/link";

const projectMap: Record<string, { company: string; title: string }> = {
  "mnet-plus-banner":  { company: "Mnet Plus",        title: "Platform Banner Copywriting" },
  "mnet-plus-japan":   { company: "Mnet Plus Japan",   title: "SNS 운영" },
  "cjenm-youtube":     { company: "CJ ENM",            title: "YouTube Metadata Optimization" },
  "esports-score":     { company: "이스포츠스코어",    title: "이스포츠 방송 작가" },
  "agf-2025":          { company: "AGF 2025",          title: "스마일게이트 부스 메인 작가" },
  "playx4-2024":       { company: "2024 PlayX4",       title: "SOOP in PlayX4 메인 작가" },
  "loginmedia":        { company: "로그인미디어",      title: "이스포츠 방송 작가" },
  "hubincommerce":     { company: "허브인커머스",      title: "Viral Marketing" },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectMap[slug];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center space-y-4">
          <p className="text-sm text-foreground/50">프로젝트를 찾을 수 없습니다.</p>
          <Link
            href="/"
            className="text-sm text-foreground/70 underline underline-offset-4 hover:text-foreground"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </Link>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40">
            {project.company}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h1>
        </div>

        <div className="rounded-2xl border border-border/40 bg-background/60 p-8 backdrop-blur">
          <p className="text-sm text-foreground/50">
            프로젝트 상세 내용을 여기에 작성합니다.
          </p>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(projectMap).map((slug) => ({ slug }));
}
