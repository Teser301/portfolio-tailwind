export type ButtonProps = {
    text: string;
    onClick?: () => void;
    href?: string;
    target?: "_self" | "_blank";
    className?: string;
}