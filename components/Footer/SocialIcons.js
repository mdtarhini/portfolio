import { GrTwitter, GrLinkedinOption } from "react-icons/gr";
const social = [
  {
    label: "Twitter",
    icon: <GrTwitter />,
    link: "https://twitter.com/mdtarhini",
  },
  {
    label: "LinkedIn",
    icon: <GrLinkedinOption />,
    link: "https://www.linkedin.com/in/mdtarhini/",
  },
];

const SocialIcons = () => {
  return (
    <address className="flex space-x-2 text-base">
      {social.map((item) => {
        return (
          <a
            className="w-6 h-6 hover:text-black dark:hover:text-white"
            key={item.label}
            href={item.link}
            rel="noopener"
            title={`my ${item.label}`}
          >
            {item.icon}
            <span className="sr-only">{item.label}</span>
          </a>
        );
      })}
    </address>
  );
};

export default SocialIcons;
