
export enum Lab {
  Lab1 = "Laboratório de Química",
  Lab2 = "Laboratório de Física",
  Lab3 = "Laboratório de Biologia",
  Lab4 = "Laboratório de Informática A",
  Lab5 = "Laboratório de Informática B",
}

export enum Shift {
  Morning = "Matutino",
  Afternoon = "Vespertino",
  Night = "Noturno",
}

export const TIME_SLOTS = [1, 2, 3, 4, 5] as const;
export type TimeSlot = typeof TIME_SLOTS[number];

export enum BookingType {
  Single = "Única",
  Semester = "Semestre",
}

export interface Booking {
  id: string;
  lab: Lab;
  // For 'Single' bookings, this is the specific date.
  // For 'Semester' bookings, this is the start date of the semester.
  date: string; 
  dayOfWeek?: number; // 0 (Sun) to 6 (Sat) for semester bookings
  shift: Shift;
  timeSlot: TimeSlot;
  course: string;
  professor: string;
  type: BookingType;
  // e.g., "2024-2" for semester bookings
  semester?: string; 
}

export interface ModalData {
  lab: Lab;
  date: string;
  shift: Shift;
  timeSlot: TimeSlot;
  booking?: Booking;
}
