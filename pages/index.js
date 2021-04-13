import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/footer";
import Home from "../components/Home/Home";
import TILList from "../components/TIL-List";
import { getTilsData } from "../lib/til";

export async function getStaticProps() {
  const tilsData = await getTilsData(5);

  return {
    props: {
      tilsData: tilsData,
    },
  };
}

export default function Index({ tilsData }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-blackish 2xl:px-60">
      <Head>
        <title>M. Tarhini | Personal website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home
        heading="Hello, I'm Mohamad Tarhini"
        subHeading={
          <p>
            I am a <strong>web developer</strong>, <strong>physicist </strong>
            and <strong>data analyst</strong> based in France. That’s my photo
            on the <span className="md:hidden">top</span>{" "}
            <span className="test hidden md:inline">right</span>. The two little
            icons in the top left of the screen are my social media links if you
            want to contact me. The rest of the website can be accessed via the
            next large buttons. Scroll down to see what I have learned today, or
            yesterday, or a month ago..
          </p>
        }
        image={
          <div className=" mb-4 md:mb-0 md:absolute md:right-6 md:-bottom-20 lg:-bottom-24 xl:-bottom-32">
            <div className="relative w-16 h-16 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full md:rounded-none border-2  border-white">
              <Image
                src="/profile.jpg"
                alt="A portrait of Mohamad"
                layout="fill"
                objectFit="cover"
                className="rounded-full md:rounded-none"
              />
            </div>
          </div>
        }
      >
        <TILList tilsData={tilsData} withShowAllButton />
      </Home>

      <footer className="w-full mt-auto px-4 xl:px-0">
        <Footer />
      </footer>
    </div>
  );
}
