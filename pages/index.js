import Head from "next/head";
import AboutMeInteractive from "../components/AboutMeInteractive/about-me-interactive";
export default function Home() {
  return (
    <div>
      <Head>
        <title>M. Tarhini Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <AboutMeInteractive />
      </main>

      <footer></footer>
    </div>
  );
}
