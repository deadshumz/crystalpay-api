export type BalanceGetInfoRequest = {
    auth_login: string,
    auth_secret: string,
    hide_empty?: boolean,
}

type BalanceItem = {
    amount: number,
    currency: string,
}

export type BalanceGetInfoResponse = {
    error: boolean,
    errors: string[],
    balances: {
        [key: string]: BalanceItem
    }
}
