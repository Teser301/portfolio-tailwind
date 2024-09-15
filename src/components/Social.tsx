import { IconType } from "react-icons";
interface SocialProps {
  value: string;
  icon: IconType;
}

const Socials: React.FC<SocialProps> = ({ value, icon: Icon }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-primary" />
        <div>
          <a
            href="mailto:carlo.randar.aavekukk@gmail.com"
            className="text-primary hover:text-secondary transition"
            aria-label="Send an email"
          >
            {value}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
