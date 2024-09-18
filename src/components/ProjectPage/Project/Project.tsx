import ProjectFeatures from "./ProjectFeatures";
import ProjectStatus from "./ProjectStatus";
import ProjectTags from "./ProjectTags";
import { ProjectType } from "../../../types/project";
interface ProjectContentProps {
  project: ProjectType | null;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <>
      {project && (
        <div className="flex flex-col ">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-80 object-cover object-top rounded-md"
          />
          <ProjectStatus status={project.status} link={project.link} />
          <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
          <ProjectTags tags={project.type} />
          <ProjectFeatures features={project.features} />
          <div>
            <h3 className="text-lg font-semibold ">Description:</h3>
            <p className="mt-2">{project.description}</p>
          </div>
          {project.highlightTitle && project.highlightDescription && (
            <div className="mt-2">
              <h3 className="text-lg font-semibold">
                {project.highlightTitle}
              </h3>
              <p className="mt-2">{project.highlightDescription}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectContent;
