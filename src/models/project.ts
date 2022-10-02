interface IProject {
  img: Image;
  title: string;
  blurb: string;
  technologies: string[];
  description: string[];
  links: SourceLinks;
}

type Image = {
  url: string;
  alt: string;
};

type SourceLinks = {
  site: string;
  github: string;
};

type TechnologyIcon = {
  technology: string;
  className: string;
};
