import Head from "next/head";
import Link from "next/link";
import PageLayout from "../components/Common/page-layout";
import Chat from "../components/About/Trivia/chat";
import Contact from "../components/Contact/contact";
import Timeline from "../components/About/timeline/timeline";
import Heading from "../components/Common/heading";

export async function getStaticProps() {
  const commonData = await import("../data/common/common.json");

  return {
    props: {
      email: commonData.email,
      twitterLink: commonData["twitter-link"],
      linkedInLink: commonData["linked-in-link"],
    },
  };
}

const About = ({ email, twitterLink, linkedInLink }) => {
  return (
    <PageLayout>
      <div>
        <Head>
          <title>About M. Tarhini</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full py-10 px-3 md:px-10 lg:px-24 xl:px-44 leading-loose max-w-7xl text-lg">
          <div className="w-full mt-2">
            <h1 className="text-4xl font-bold mb-10">About me</h1>
            <div className="border-2 w-full border-gray-900 dark:border-white  rounded-sm relative p-4">
              <div className="bg-white dark:bg-blackish absolute -top-3 left-5 h-6 flex items-center text-2xl font-bold">
                TL;DR
              </div>
              <ul className="md:text-lg leading-loose">
                <li className="list-inside list-disc">
                  I love <strong>programming</strong>.
                </li>
                <li className="list-inside list-disc">
                  I worked as a <strong>data analyst</strong> for over 5 years.
                </li>
                <li className="list-inside list-disc">
                  I found a new passion for <strong>web development</strong>.
                </li>
              </ul>
            </div>
          </div>
          <section className="mt-10 md:mb-40">
            <Heading text="Overview" subText="Who am I ?" />
            <p className="">
              My answer to this question in mid-2020 would have been: “I am a
              physicist studying the state of the universe shortly after the big
              bang by analysing data at{" "}
              <a href="https://home.cern/" className="underline" rel="noopener">
                CERN
              </a>{" "}
              (the European Council for Nuclear Research)”. Much has happened
              since then, and now I would identify myself as a web developer. It
              is all about my passion for programming. <br />
              As a PhD student and later as a physicist, programming was a daily
              activity for me. If not for work, I would learn something new
              (sometimes just for fun). Nevertheless, coding was only a tool to
              achieve my goals. In the summer of 2020, searching for something
              new to learn, I was introduced to web development on{" "}
              <a
                href="https://www.freecodecamp.org/"
                className="underline"
                rel="noopener"
              >
                FreeCodeCamp
              </a>{" "}
              and it just resonated with me! Soon enough, I started asking
              myself, “why don’t I become a full-time web developer ?”
            </p>
            <div className="my-20">
              <Timeline />
            </div>
          </section>
          <section className="mt-10">
            <Heading
              text="Current status"
              subText="Turning my passion into a career"
            />
            <p className="">
              I spend most of my web development time on the front-end. After
              learning and becoming comfortable with HTML, CSS and JS, I started
              learning React-JS, which I quickly saw its potential. After
              investing considerable time with React, I picked up Next-JS, the
              framework I used to build this website.
              <br /> Along the way, I also became familiar with back-end
              technologies like node-JS and Firebase, which I used to build some
              personal projects.
              <br />
              For me, what makes the web development field so interesting is
              that you don’t stop learning. There is always something that you
              don’t know, which makes it an enjoyable challenge. That said, I am
              confident that I am ready to have a career in this field.
            </p>
          </section>
          <section className="mt-10">
            <Heading text="Background" subText="Award winning physicist" />
            <p className="">
              In late 2014, I started{" "}
              <a
                href="https://tel.archives-ouvertes.fr/tel-01691725"
                className="underline"
                rel="noopener"
              >
                my PhD
              </a>{" "}
              in particle physics about studying the state of matter in the
              universe microseconds after the Big-Bang. My work involved mainly
              analysing and interpreting terabytes of data collected at CERN. My
              results have led to the publication of 4 papers on the subject in
              international journals. My PhD thesis was voted the{" "}
              <a
                href="https://in2p3.cnrs.fr/fr/cnrsinfo/mohamad-tarhini-post-doc-subatech-recu-le-prix-de-these-alice-en-juillet-2018"
                className="underline"
                rel="noopener"
              >
                <i>thesis of the year</i>
              </a>{" "}
              in the 2018 awards of{" "}
              <a
                href="https://alice-collaboration.web.cern.ch/"
                className="underline"
                rel="noopener"
              >
                ALICE-CERN collaboration
              </a>
              . I also won the{" "}
              <a
                href="https://www.sorbonne.fr/la-chancellerie-des-universites-de-paris/v2la-chancellerie-des-universites-de-paris-recompense-lexcellence-universitaire-et-propose-des-prix/les-prix-universitaires/"
                className="underline"
                rel="noopener"
              >
                2018 Chancellerie thesis prize
              </a>{" "}
              (awarded yearly to the best theses completed in Paris’
              universities).
              <br /> After defending my PhD in 2017, I continued working on the
              same thematic with CERN by starting a postdoctoral fellowship as
              lead data analyst at{" "}
              <a
                href="http://www-subatech.in2p3.fr/fr/"
                className="underline"
                rel="noopener"
              >
                SUBATECH
              </a>{" "}
              in Nantes-France. I was coordinator of a large analysis group (40+
              members), contributing to the publication and review of 10+
              scientific papers. I also supervised 4 PhD and master’s students.
              <br />
              Today I am proud that I contributed, even for a little, to our
              progress in understanding the universe.
              <br />
              <strong>
                You can read more about my skills, experience and education in
                my
                <Link href="/resume">
                  <span className="underline"> resume</span>
                </Link>
                .
              </strong>
            </p>
          </section>

          <section className="my-10">
            <Heading text="Get in touch" />
            <Contact
              email={email}
              twitter={twitterLink}
              linkedIn={linkedInLink}
            />
          </section>
        </main>
        <Chat />
      </div>
    </PageLayout>
  );
};
export default About;

//
