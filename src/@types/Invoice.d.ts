export type InvoiceType = 'purchase' | 'topup'

export type InvoiceCreateRequest = {
    auth_login: string,
    auth_secret: string,
    amount: number,
    amount_currency?: string,
    required_method?: string,
    type: InvoiceType,
    description?: string,
    redirect_url?: string,
    callback_url?: string,
    extra?: string,
    payer_details?: string,
    lifetime: number,
}

export type InvoiceCreateResponse = {
    error: boolean,
    errors: string[],
    id: string,
    url: string,
    amount: number,
    type:InvoiceType
}

export type InvoiceInfoRequest = {
    auth_login: string,
    auth_secret: string,
    id: string
}

export type InvoiceStates = 'notpayed' | 'processing' | 'wrongamount' | 'failed' | 'payed'

export type InvoiceInfoResponse = {
    error: boolean,
    errors: string[],
    id: string,
    url: string,
    state: InvoiceStates,
    type: InvoiceType,
    method: null | string,
    required_method: string,
    currency: string,
    service_commission: number,
    extra_commission: number,
    amount: number,
    pay_amount: number,
    remaining_amount: number,
    balance_amount: number,
    description: string,
    redirect_url: string,
    callback_url: string,
    extra: string,
    created_at: string,
    expired_at: string,
}
