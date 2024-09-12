import ProjectFeatures from "./ProjectFeatures";
import ProjectStatus from "./ProjectStatus";
import ProjectTags from "./ProjectTags";
import { Project } from "../../../types/project";
interface ProjectContentProps {
  project: Project | null;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <>
      {project && (
        <div className="flex flex-col ">
          <img
            src={project.image}
            alt={project.title}
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
          {project.bigFeatureTitle && project.bigFeatureDescription && (
            <div className="mt-2">
              <h3 className="text-lg font-semibold">
                {project.bigFeatureTitle}
              </h3>
              <p className="mt-2">{project.bigFeatureDescription}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectContent;
