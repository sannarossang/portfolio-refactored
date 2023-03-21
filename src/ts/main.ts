import { complementProjects } from "./functions/complementProjects";
import { mainProjects } from "./functions/mainProjects";
import { otherProjects } from "./models/OtherProjects";
import { projects } from "./models/Projects";

mainProjects(projects);
complementProjects(otherProjects);
