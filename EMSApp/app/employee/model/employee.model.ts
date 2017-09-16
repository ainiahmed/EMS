import { IEmployeeModelInterface } from './employee-model.interface';

export class EmployeeModel implements IEmployeeModelInterface {
    Id: number;
    EmployeeName: string;
    Designation: string;
    Gender: string;
    Salary: string;
    Photo: string;
    IdentificatonDoc: string;
}