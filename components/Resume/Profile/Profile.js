import SectionTitle from "../Common/section-title";
import SocialMediaButton from "./social-media-button";
import InfoItem from "./info-item";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Profile = ({ email, linkedInLink, githubLink, twitterLink }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:space-x-4 w-full text-center md:text-left">
        <div className="w-40 max-w-full border-2 border-black dark:border-white rounded-full flex items-center justify-center p-1">
          <img
            className="object-fill w-full h-full rounded-full"
            src="/profile.jpg"
            alt="profile image on resume"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Mohamad Tarhini</h1>

          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Web developper, physicist, and data analyst
          </p>

          <p className="mt-3">
            <span className="text-3xl">&#8220;</span>Fast learner with strong
            problem solving and programming skills
            <span className="text-3xl">&#8221;</span>
          </p>
        </div>
      </div>

      <div className="mt-10">
        <SectionTitle title="Personal Information" />
        <InfoItem title="Born" content="January 1991, Ebba-Lebanon" />
        <InfoItem title="Address" content="Nantes, France" />
        <InfoItem
          title="Email"
          content={<span className="select-all">{email}</span>}
        />
        <InfoItem
          title="Find me on"
          content={
            <div className="flex space-x-2">
              <SocialMediaButton
                icon={<FaGithub />}
                href={githubLink}
                label="github"
              />
              <SocialMediaButton
                icon={<FaTwitter />}
                href={twitterLink}
                label="twitter"
              />
              <SocialMediaButton
                icon={<FaLinkedinIn />}
                href={linkedInLink}
                label="linked-in"
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Profile;