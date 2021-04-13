import Head from "next/head";
import TILList from "../components/TIL-List";
import PageLayout from "../components/Common/page-layout";
import { getTilsData } from "../lib/til";
export async function getStaticProps() {
  const tilsData = await getTilsData();

  return {
    props: {
      tilsData: tilsData,
    },
  };
}

const TIL = ({ tilsData }) => {
  return (
    <PageLayout>
      <div>
        <Head>
          <title>M. Tarhini | TIL</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full py-10 px-3 md:px-10 lg:px-24 xl:px-44 leading-loose max-w-7xl md:text-lg md:leading-loose">
          <TILList withShowAllButton={false} tilsData={tilsData} />
        </main>
      </div>
    </PageLayout>
  );
};

export default TIL;
