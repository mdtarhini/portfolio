import Head from "next/head";
import Footer from "../components/Footer/footer";
import Home from "../components/Home/Home";
export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-blackish 2xl:px-60">
      <Head>
        <title>M. Tarhini Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home
        heading="Hi I'm Mohamad Tarhini"
        subHeading={
          <span>
            I am a &#10102; web developer, &#10103; physicist and &#10104; data
            analyst based in France. This is my slice of the internet where I
            show my work in &#10102;, briefly mention &#10103; and nearly say
            nothing about &#10104;.
          </span>
        }
        image={
          <img
            className="w-16 h-16 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full md:rounded-none border-2 border-white mb-4 md:mb-0 md:absolute md:right-6 md:-bottom-20 lg:-bottom-24 xl:-bottom-32"
            src="/profile.jpg"
            alt="A portrait of Mohamad"
          />
        }
      />

      <div className="w-full mt-auto px-4 xl:px-0">
        <Footer />
      </div>
    </div>
  );
}
