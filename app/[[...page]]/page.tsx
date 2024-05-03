import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
builder.init(`${process.env.NEXT_PUBLIC_BUILDER_API_KEY}`);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  let type = "page";
  if(props.params && props.params.page && props.params.page.length > 0) {
    type = props.params.page[0];
  }

  const content = await builder
    .get(type, {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      prerender: false,
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} />
    </>
  );
}