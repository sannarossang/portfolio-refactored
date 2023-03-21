import { type OtherProjects } from "../models/OtherProjects";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function displayComplementProjects(otherProjects: OtherProjects[]) {
  const otherProjectContainer = document.getElementById("myOtherProjects") as HTMLDivElement;
  otherProjectContainer.innerHTML = "";
  for (let i = 0; i < otherProjects.length; i++) {
    const container: HTMLDivElement = document.createElement("div");
    container.className = "otherproject";

    const title: HTMLHeadElement = document.createElement("h3");
    title.className = "otherproject__title";
    title.innerHTML = otherProjects[i].title;
    container.appendChild(title);

    const githublink: HTMLAnchorElement = document.createElement("a");
    githublink.className = "otherproject__link";
    githublink.href = otherProjects[i].githublink;
    githublink.innerHTML = "<i class='bi bi-github'></i>";
    container.appendChild(githublink);

    otherProjectContainer.appendChild(container);
  }
}
