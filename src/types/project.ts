export type Project = {
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