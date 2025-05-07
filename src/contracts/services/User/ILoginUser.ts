
export interface ILoginUser {
    login(email: string, password: string): Promise<string>;
}