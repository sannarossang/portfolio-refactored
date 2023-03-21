// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function displayFooter() {
  const copyright = document.createElement("p");
  copyright.classList.add("footer_copyright");
  copyright.innerHTML = "Copyright Sanna Rossäng &COPY; with love";
  const copyrightIllustration = document.createElement("p");
  copyrightIllustration.classList.add("footer_copyright");
  copyrightIllustration.innerHTML = "Illustration Josefin Rossäng";

  const socialMediaBox = document.createElement("article");
  socialMediaBox.classList.add("footer_some");

  const linkedinLink = document.createElement("a");
  linkedinLink.href = "https://www.linkedin.com/in/sanna-ross%C3%A4ng-3a2434102/?originalSubdomain=se";
  linkedinLink.innerHTML = `<i class="bi bi-linkedin" title="Sanna Rossängs Linkedin-konto"></i>`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/sannarossang";
  githubLink.innerHTML = `<i class="bi bi-github" title="Sanna Rossängs Github-konto"></i>`;

  const instagramLink = document.createElement("a");
  instagramLink.href = "https://www.instagram.com/sannarossang/";
  instagramLink.innerHTML = `<i class="bi bi-linkedin" title="Sanna Rossängs Instagram-konto"></i>`;

  const footerContainer = document.querySelector(".footer") as HTMLElement;

  footerContainer.appendChild(copyright);
  footerContainer.appendChild(copyrightIllustration);
  footerContainer.appendChild(socialMediaBox);
  socialMediaBox.appendChild(linkedinLink);
  socialMediaBox.appendChild(instagramLink);
  socialMediaBox.appendChild(githubLink);
}
