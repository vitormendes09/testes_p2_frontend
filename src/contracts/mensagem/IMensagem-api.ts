// contrato de  mensagem de erro ou sucesso

export interface MensagemApi {
    status: number;
    mensagem: string;
}

export function IsMensagemApi(obj: any): obj is MensagemApi {
    return ( obj &&
        typeof obj.status === 'number' &&
        typeof obj.mensagem === 'string'
    );
}