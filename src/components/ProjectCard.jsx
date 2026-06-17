import { Link } from "react-router";

const ProjectCard = ({
  title = "Untitled",
  topics = [],
  complete = false,
  to = "#",
}) => {
  return (
    <Link to={to} className="block">
      <div className="bg-surface hover:bg-surface-hover border border-border rounded-xl p-4 flex flex-col gap-3 transition-colors">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-text font-semibold">{title}</h3>

          <span
            className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
              complete
                ? "bg-accent text-button-text"
                : "bg-surface-hover text-muted border border-border"
            }`}
          >
            {complete ? "Complete" : "In Progress"}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {topics.map((topic) => (
            <span
              key={topic}
              className="text-xs px-2 py-0.5 rounded-full bg-bg text-muted border border-border"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
