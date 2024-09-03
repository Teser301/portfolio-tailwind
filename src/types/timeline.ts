export type Timeline = {
    year: string;
    title: string;
    backgroundImage: string,
    company: string;
    description: string;
    achievements: Achievement[] | null;
}
// Define the type for each achievement
type Achievement = {
    icon: string | null
    title: string;
    content: string;
};
