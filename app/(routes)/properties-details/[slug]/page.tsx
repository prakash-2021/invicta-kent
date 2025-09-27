import { getProperties, getPropertiesDetail } from "../../(home)/data/query";
import { Hero, SimilarProperty } from "./components";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 5;

const PropertiesDetails = async ({ params }: PageProps) => {
  const { slug } = await params;
  const { data } = await getProperties();
  const { data: details } = await getPropertiesDetail(slug);

  return (
    <>
      <Hero data={details} />

      {data.length > 1 && (
        <SimilarProperty
          data={data.filter((prev) => prev.documentId !== details.documentId)}
        />
      )}
    </>
  );
};

export default PropertiesDetails;
