import { IPeople } from "./people.interface";

export interface IPeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: IPeople[]
}
