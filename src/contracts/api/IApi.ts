import { MensagemApi } from "../mensagem/IMensagem-api";

export interface IApi <T>{
    // método para fazer uma requisição GET
    get(url: string, nome: string): Promise<T | MensagemApi>;
    // método para fazer uma requisição POST
    post(url: string, data: any): Promise<T | MensagemApi>;
    // MÉTODO PARA FAZER UMA REQUISIÇAÕ GETALL
    getAll(url: string): Promise<T[] | MensagemApi>;
}