export type ProjectType = {
    title: string;
    shortDescription: string;
    description: string;
    link: string;
    image: string;
    type: string[];
    company: string;
    yearDate: string;
    status: string;
    statusDate: string | null;
    features: string[];
    bigFeatureTitle: string | null;
    bigFeatureDescription: string | null;
};

export type ProjectListProps = {
    groupedProjects: { group: string; projects: ProjectType[] }[];
    expandedGroups: string[];
    toggleGroup: (group: string) => void;
    handleProjectClick: (link: string) => void;
    setSelectedProject: (project: ProjectType | null) => void;
};