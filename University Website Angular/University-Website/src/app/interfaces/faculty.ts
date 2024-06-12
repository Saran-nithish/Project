import { Department } from "./department";

export interface Faculty {
  facultyId: number;
  departmentId: number;
  name: string;
  photo: string;
  contactInformation: string;
  expertise: string;
  officeHours: string;
  department?: Department;
}
