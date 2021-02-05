import Head from "next/head";
import ProjectGrid from "../components/ProjectsCard/projects-grid";
import { getProjectsData } from "../lib/projects";
import PageLayout from "../components/Common/page-layout";
export async function getStaticProps() {
  const allProjectsData = getProjectsData();

  return {
    props: {
      projects: allProjectsData,
    },
  };
}
const Projects = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>M. Tarhini projects</title>
      </Head>
      <PageLayout>
        <main className="w-full py-10 px-3 md:px-10 lg:px-24 xl:px-44 leading-loose  text-lg max-w-7xl">
          <h1 className="text-4xl font-bold mb-2">Recent web projects</h1>

          <p className="mb-10">
            A selection of recent websites that I made while building my web
            development skills. I only include in this list the projects I made
            independently and not the ones I made while following online
            tutorials.
          </p>
          <ProjectGrid projects={projects} />
        </main>
      </PageLayout>
    </div>
  );
};

export default Projects;
