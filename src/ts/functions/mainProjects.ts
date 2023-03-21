/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Project } from "../models/Projects";

export function displayMainProjects(projects: Project[]) {
  const projectContainer = document.getElementById("myNewProjects") as HTMLDivElement;

  projectContainer.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    const container: HTMLDivElement = document.createElement("div");
    container.className = "project";

    const title: HTMLHeadElement = document.createElement("h3");
    title.className = "project__title";
    title.innerHTML = projects[i].title;
    container.appendChild(title);

    const img: HTMLImageElement = document.createElement("img");
    img.className = "project__image";
    img.src = projects[i].img;
    img.alt = projects[i].alt;
    container.appendChild(img);

    const description: HTMLSpanElement = document.createElement("span");
    description.className = "project__description";
    description.innerHTML = projects[i].description;
    container.appendChild(description);

    const iconContainer: HTMLDivElement = document.createElement("div");
    iconContainer.className = "project__iconcontainer";
    container.appendChild(iconContainer);

    const projectWebLinkTitle = document.createElement("span");
    projectWebLinkTitle.className = "project__weblinktitle";
    container.appendChild(projectWebLinkTitle);

    const websidelink: HTMLAnchorElement = document.createElement("a");
    websidelink.className = "project__websidelink";
    websidelink.href = projects[i].link;
    websidelink.innerHTML = '<i class="bi bi-arrow-right-circle-fill"></i>';
    iconContainer.appendChild(websidelink);

    const projectLinkTitle = document.createElement("span");
    projectLinkTitle.className = "project__linktitle";
    container.appendChild(projectLinkTitle);

    const githublink: HTMLAnchorElement = document.createElement("a");
    githublink.className = "project__link";
    githublink.href = projects[i].githublink;
    githublink.innerHTML = "<i class='bi bi-github'></i>";
    iconContainer.appendChild(githublink);

    const language: HTMLSpanElement = document.createElement("span");
    language.className = "project_langugage";
    container.appendChild(language);

    projectContainer.appendChild(container);
  }
}
