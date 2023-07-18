export interface IEmployee {
  id: number,
  title: string | null,
  address: string | null,
  city: string | null,
  region: string | null,
  postal:string | null,
  phone:string | null,
  lastName: string ,
  firstName: string ,
  titleOfCourtesy: string | null,
  birthDate: number | null,
  hireDate: number | null,
  extension: number | null,
  notes: string | null,
  reportsTo: number | null,
  country: string | null
}
export interface IResponse {
  sql: string;
  employees: IEmployee[];
  time: number
};