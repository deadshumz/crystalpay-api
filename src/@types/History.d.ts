export type HistoryPaymentsRequest = {
    auth_login: string,
    auth_secret: string,
    page: number,
    items: number,
}

export type Payment = {
    id: string,
    state: "notpayed" | "processing" | "wrongamount" | "failed" | "payed",
    method: string | null,
    currency: string,
    amount: number,
    created_at: string,
    expired_at: string
};

export type HistoryPaymentsResponse = {
    error: boolean,
    errors: string[],
    payments: Payment[]
}

export type HistoryPayoffsRequest = {
    auth_login: string,
    auth_secret: string,
    page: number,
    items: number,
}

export type Payoff = {
    id: string,
    state: "created" | "processing" | "payed" | "failed",
    method: string,
    currency: string,
    amount: number,
    created_at: string
}

export type HistoryPayoffsResponse = {
    error: boolean,
    errors: string[],
    payoffs: Payoff[]
}

export type HistorySummaryRequest = {
    auth_login: string,
    auth_secret: string,
}

export type HistorySummaryResponse = {
    error: boolean,
    errors: string[],
    incoming: {
      payed_amount: number,
      total_count: number,
      payed_count: number,
    },
    outgoing: {
      payed_amount: number,
      total_count: number,
      payed_count: number,
    }
}
