
import { Lab, Shift } from './types';

export const LABS = Object.values(Lab);
export const SHIFTS = Object.values(Shift);

export const COURSES = [
  "Engenharia de Software",
  "Ciência da Computação",
  "Sistemas de Informação",
  "Engenharia Química",
  "Ciências Biológicas",
  "Licenciatura em Física",
];

export const PROFESSORS = [
  "Dr. Arnaldo Cohen",
  "Dra. Beatriz Almeida",
  "Dr. Carlos Drummond",
  "Dra. Denise Franzen",
  "Dr. Everton Guedes",
];

export const SHIFT_COLORS: { [key in Shift]: string } = {
  [Shift.Morning]: 'bg-sky-100 text-sky-800',
  [Shift.Afternoon]: 'bg-amber-100 text-amber-800',
  [Shift.Night]: 'bg-indigo-100 text-indigo-800',
};

export const DAY_NAMES = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
