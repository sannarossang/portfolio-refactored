import axios, { AxiosPromise } from "axios";
import { IRepo } from "../models/IRepo";

export function getRepos(): Promise<IRepo[]> {
  return axios

    .get("https://api.github.com/users/sannarossang/repos")

    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
