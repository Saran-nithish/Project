import { AcademicPrograms } from "./academic-programs";
import { User } from "./auth";

export interface Application {
    applicationId: number;
  userId: number;
  programId: number;
  status: string;
  submissionDate: string;
  reviewDate: string;
  decisionDate: string;
  user: User;
  academicProgram: AcademicPrograms;
}
