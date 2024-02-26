export type SubtractFrom = 'balance' | 'amount';

export type PayoffCreateRequest = {
    auth_login: string,
    auth_secret: string,
    signature: string,
    amount: number,
    amount_currency?: string,
    method: string,
    wallet: string,
    subtract_from: SubtractFrom,
    callback_url?: string,
    extra?: string,
}

export type PayoffCreateResponse = {
    error: boolean,
    errors: string[],
    id: string,
    method: string,
    commission: number,
    amount: number,
    rub_amount: number,
    receive_amount: number,
    deduction_amount: number,
    subtract_from: string,
    currency: string,
}

export type PayoffSubmitRequest = {
    auth_login: string,
    auth_secret: string,
    signature: string,
    id: string,
}

export type PayoffSubmitResponse = {
    error: boolean,
    errors: string[],
    id: string,
    state: "created" | "processing" | "failed" | "payed" | "canceled",
    method: string,
    currency: string,
    commission: number,
    amount: number,
    rub_amount: number,
    receive_amount: number,
    deduction_amount: number,
    subtract_from: SubtractFrom,
    wallet: string,
    message: string,
    callback_url: string,
    extra: string,
    created_at: string
}

export type PayoffCancelRequest = {}

export type PayoffCancelResponse = {}

export type PayoffInfoRequest = {}

export type PayoffInfoResponse = {}
