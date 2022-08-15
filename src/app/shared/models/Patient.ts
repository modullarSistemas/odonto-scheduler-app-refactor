interface Address {
  city: string;
  state: string;
  zipCode: string;
  district: string;
  street: string;
  number: number;
  complement: string;
}

interface Dependant {
  name: string;
  gender: string;
  birthDate: Date;
}

export interface Patient {
  id: number;
  franchiseId: number;
  name: string;
  birthDate: Date;
  cpf: string;
  rg: string;
  gender: string;
  address: Address;
  email: string;
  phone: string;
  profession: string;
  civilState: string;
  dependants: Dependant[];
}
