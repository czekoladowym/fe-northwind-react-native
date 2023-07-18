export interface ISupplier {
  id: number,
  company: string | null,
  contact: string,
  title: string | null,
  address: string | null,
  city: string | null,
  region: string | null,
  postal:string | null,
  country: string | null,
  phone:string | null,
  fax: string | null,
  homePage: string | null
}
export interface IResponse {
  sql: string;
  supplies: ISupplier[];
  time: number
};