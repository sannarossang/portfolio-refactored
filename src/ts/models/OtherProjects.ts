class OtherProjects {
  constructor(public title: string, public githublink: string) {}
}

const otherProject0 = new OtherProjects(
  "Small app in two days with GraphQL",
  "https://github.com/sannarossang/favorite-spots-stockholm.git"
);

const otherProject1 = new OtherProjects(
  "Shopping cart with REST-API",
  "https://github.com/sannarossang/shopping-cart-rest-.git"
);

const otherProject2 = new OtherProjects(
  "Shopping cart with GraphQL-API",
  "https://github.com/sannarossang/shopping-cart-graphql.git"
);

const otherProject3 = new OtherProjects("E2E-testing", "https://github.com/sannarossang/e2e-assignment.git");

const otherProject4 = new OtherProjects("Unit testing", "https://github.com/sannarossang/unittest-assignment.git");

const otherProject5 = new OtherProjects(
  "Integration testing",
  "https://github.com/sannarossang/integrationstests-assignment.git"
);

export const otherProjects: OtherProjects[] = [
  otherProject0,
  otherProject1,
  otherProject2,
  otherProject3,
  otherProject4,
  otherProject5,
];

export { OtherProjects };
