export interface IRegisterUser {
    register(name: string, email: string, password: string): Promise<string>;
}