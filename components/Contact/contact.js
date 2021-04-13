import { GrTwitter, GrLinkedinOption } from "react-icons/gr";

const Contact = ({ email, twitter, linkedIn }) => {
  const social = [
    { label: "Twitter", icon: <GrTwitter />, link: twitter },
    { label: "LinkedIn", icon: <GrLinkedinOption />, link: linkedIn },
  ];
  return (
    <address>
      <p>
        If you have any question or comment or just want to say hi, you can send
        me an email on <strong className="select-all">{email}</strong>
      </p>

      <p>You can also find me on social media:</p>
      <div className="flex flex-wrap">
        {social.map((item) => {
          return (
            <a
              key={item.label}
              className="flex space-x-2 mr-6 mb-2 items-center underline"
              href={item.link}
              rel="noopener"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="">{item.label}</span>
            </a>
          );
        })}
      </div>
    </address>
  );
};

export default Contact;
