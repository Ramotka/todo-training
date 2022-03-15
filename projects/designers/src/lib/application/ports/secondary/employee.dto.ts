import { DepartmentDTO } from "./department.dto";

export interface EmployeeDTO {
  readonly bio: string;
  readonly id: string;
  readonly name: string;
  readonly firstName: string;
  readonly imageUrl: string;
  readonly alt: string;
  readonly department: DepartmentDTO;
}
