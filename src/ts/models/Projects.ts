import webshop from "../../assets/webshopsquare.png";
import bucketlist from "../../assets/bucketlistnewsquare.png";

class Project {
  constructor(
    public title: string,
    public img: string,
    public description: string,
    public githublink: string,
    public languages: string,
    public link: string,
    public alt: string
  ) {}
}

const project1 = new Project(
  "Webshop",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  webshop,
  "group project with brilliant julia carlberg and ida lindgren. webshop built with typescript.",
  "https://github.com/sannarossang/webshop.git",
  "html",
  "https://rossang-webshop.netlify.app/",
  "webshopsprojektet Up The Wall som visar en webshop av tapeter"
);

const project2 = new Project(
  "Bucket list",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  bucketlist,
  "as my first assignment in javascript I created a to do-list but upgrated it to a bucket list!",
  "https://github.com/sannarossang/bucket-list.git",
  "html",
  "https://rossang-bucketlist.netlify.app/",
  "bucketlistprojektet Bucket List som visar en klassisk to do-lista med beige bakgrund"
);

export const projects: Project[] = [project1, project2];

export { Project };
