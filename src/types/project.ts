export type ProjectType = {
    title: string;
    description: string;
    link: string | null;
    image: string;
    type: string[];
    company: string;
    yearDate: string;
    status: string;
    statusDate: string | null;
    features: string[];
    highlightTitle: string | null;
    highlightDescription: string | null;
};

export type ProjectListProps = {
    groupedProjects: { group: string; projects: ProjectType[] }[];
    expandedGroups: string[];
    toggleGroup: (group: string) => void;
    handleProjectClick: (link: string) => void;
    setSelectedProject: (project: ProjectType | null) => void;
};