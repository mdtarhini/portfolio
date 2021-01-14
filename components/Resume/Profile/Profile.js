import React from "react";
import SectionTitle from "../Common/section-title";
import SocialMediaButton from "./social-media-button";
import InfoItem from "./info-item";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Profile = ({ title }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:space-x-4 w-full text-center md:text-left">
        <div className="w-40 md:w-full border-2 border-black dark:border-white rounded-full flex items-center justify-center p-1">
          <img
            className="object-fill w-full h-full rounded-full"
            src="/profile.jpg"
            alt="profile image on resume"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Mohamad Tarhini</h1>
          <hr className="my-3" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Physicist, Data analyst, and web developper
          </p>
          <hr className="my-3" />
          <p>
            <span>&ldquo;</span>I am a data scientist with a PhD in data
            analysis applied to high energy physics and over 5 years of
            professional experience. Up to now, my career was mainly centered
            around utilizing data analysis tools in studying high energy physics
            topics. I am currently looking for job opportunities where I
            <span>&rdquo;</span>
          </p>
        </div>
      </div>
      <br />
      <div id="resume-personal">
        <SectionTitle title={title} />
        <InfoItem title="Born" content="January 1991, Ebba-Lebanon" />
        <InfoItem title="Address" content="Nantes, France" />
        <InfoItem title="Email" content="mdtarhini@outlook.com" />
        <InfoItem
          title="Find me on"
          content={
            <div className="flex space-x-2">
              <SocialMediaButton icon={<FaGithub />} />
              <SocialMediaButton icon={<FaTwitter />} />
              <SocialMediaButton icon={<FaLinkedinIn />} />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Profile;
