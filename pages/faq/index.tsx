import Link from "next/link";
import cmsService from "../../src/infra/cms/cmsService";

interface IPageFAQ {
  title: string;
  content: Object;
}

export default function PageFAQ({ title, content }: IPageFAQ) {
  return (
    <div>
      <div>
        <Link href="/">Voltar para home</Link>
      </div>
      <h1>{title}</h1>
      <div>
        <pre>{JSON.stringify(content, null, 4)}</pre>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const contentQuery = `
    query {
        contentFaqQuestion {
           title
          content {
            value
          }
        }
      }
      `;

  const { data } = await cmsService({
    query: contentQuery,
  });

  return {
    props: {
      title: data.data.contentFaqQuestion.title ?? "",
      content: data.data.contentFaqQuestion.content ?? {},
    },
  };
}
