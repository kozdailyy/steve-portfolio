import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/kozdailyy" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/steve-kazock/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/koz__daily" },
  { icon: <FaXTwitter />, path: "https://x.com/stevekazock" },
];

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          rel="noreferrer"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
