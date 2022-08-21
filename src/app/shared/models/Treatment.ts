import { Patient } from './Patient';
import { Dentist } from './Dentist';

export interface Prothesis {
  id: number;
  name: string;
  cost: number;
}

export interface ProcedureType {
  id: number;
  name: string;
  cost: number;
  treatmentType: string;
}

export interface Procedure {
  id: number;
  treatmentId: number;
  dentist: Dentist;
  tooth: number;
  needProthesis: boolean;
  status: number;
  prothesis: Prothesis;
  procedureType: ProcedureType;
}

export interface Installment {
  id: number;
  treatmentId: number;
  cost: number;
  due: Date;
  payday: Date;
  paymentMethod: string;
}

export interface Treatment {
  id: number;
  pacient: Patient;
  procedures: Procedure[];
  installments: Installment[];
  treatmentType: string;
  description: string;
  totalCost: number;
  prothesisCost: number;
  anamnesis: string;
  status: string;
}
