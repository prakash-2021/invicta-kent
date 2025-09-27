import { CTA, Feature, Hero, Service, WhyChoose } from "./components";
import { getProperties } from "./data/query";

export const revalidate = 5;

export default async function Home() {
  const { data } = await getProperties();

  return (
    <main>
      <Hero />

      {!!data.length && <Feature data={data} />}

      <Service />

      <WhyChoose />

      <CTA />
    </main>
  );
}
