export interface Work {
    svg: string;
    work: string;
    title: string;
    duration: string;
    tasks: string[];
}

export interface WorkProps {
    [key: string]: Work;
}
