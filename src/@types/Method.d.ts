export type MethodGetInfoRequest = {
    auth_login: string,
    auth_secret: string,
}

type MethodsItem = {
    name: string,
    enabled: boolean,
    extra_commission_percent: number,
    minimal_status_level: number,
    currency: string,
    commission_percent: number,
    commission: number,
}

export type MethodGetInfoResponse = {
    error: boolean,
    errors: string[],
    methods: {
        [key: string]: MethodsItem
    },
}
