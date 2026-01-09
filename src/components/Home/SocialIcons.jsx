import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Colors from "../../constants/Color";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/krisiyukta/posts/?feedView=all",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://x.com/i/flow/login?redirect_after_login=%2Fkrisiyukta",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://www.facebook.com/people/Krisiyukta/61554575933728/#",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.instagram.com/krisiyukta/",
    label: "Instagram",
    icon: Instagram,
  },
];

const SocialIcons = ({ className = "" }) => (
  <div className={`flex flex-col space-y-4 ${className}`}>
    {socialLinks.map(({ href, label, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="transition-transform transform hover:scale-110 active:scale-95"
        style={{ color: Colors.Primary_font }}
        onMouseEnter={(e) => (e.currentTarget.style.color = Colors.Click)}
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = Colors.Primary_font)
        }
      >
        <Icon size={25} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
