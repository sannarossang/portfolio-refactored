import { displayComplementProjects } from "./functions/complementProjects";
import { displayMainProjects } from "./functions/mainProjects";
import { otherProjects } from "./models/OtherProjects";
import { projects } from "./models/Projects";

displayMainProjects(projects);
displayComplementProjects(otherProjects);
