export interface Employee {
  id: number;
  name: string;
  division: string;
}

export interface Manajer extends Employee {
  numberOfEmployees: number;
}
