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
