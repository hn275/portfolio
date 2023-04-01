export interface Project {
  title: string;
  stacks: string[];
  github: string | null;
  liveSite?: string | null;
  imageSrc: string;
  fromLeft: boolean;
}

export interface ProjectProps {
  [key: string]: Project;
}
