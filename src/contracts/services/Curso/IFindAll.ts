import { ICurso } from "../../entities/ICurso";

export interface IFindAll {
    findAll(): Promise<ICurso[]>;
}
