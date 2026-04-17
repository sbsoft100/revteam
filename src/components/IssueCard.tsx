import { Heart } from "lucide-react";

interface IssueCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  featured?: boolean;
}

const IssueCard = ({ image, title, date, description, featured }: IssueCardProps) => {
  return (
    <article className={`card-hover group cursor-pointer ${featured ? "md:col-span-1" : ""}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button className="absolute top-3 left-3 text-primary-foreground/70 hover:text-primary transition-colors">
          <Heart size={18} />
        </button>
      </div>
      <div className="pt-4">
        <p className="text-muted-foreground font-body text-xs mb-2">{date}</p>
        <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        <a href="#" className="inline-block mt-3 text-primary font-body text-sm font-medium hover:underline">
          Learn more
        </a>
      </div>
    </article>
  );
};

export default IssueCard;
