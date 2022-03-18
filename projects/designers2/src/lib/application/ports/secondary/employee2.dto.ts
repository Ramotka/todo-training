import { Department2DTO } from "./department2.dto";

export interface Employee2DTO {
  readonly name: string;
  readonly bio: string;
  readonly id: string;
  readonly firstName: string;
  readonly imageUrl: string;
  readonly alt: string;
  readonly department: Department2DTO;
}
