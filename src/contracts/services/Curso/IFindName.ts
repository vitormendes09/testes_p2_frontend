import { ICurso } from "../../entities/ICurso";

export interface IfindName{
    findName(nome: string): Promise<ICurso[]>;
}