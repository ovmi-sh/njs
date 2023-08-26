// app/docs/[slug]/page.tsx
import { Mdx } from "@/components/docs/mdx-components";
import { DocsPageHeader } from "@/components/docs/page-header";
import { DocsPager } from "@/components/docs/pager";
import { DashboardTableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/lib/toc";
import { allDocs } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({ slug: doc._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === "docs");
  if (!doc) throw new Error(`doc not found for slug: ${params.slug}`);
  return { title: doc.title };
};

export default async function DocPage({
  params,
}: {
  params: { slug: string };
}) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === "docs");
  if (!doc) throw new Error(`doc not found for slug: ${params.slug}`);

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
