export type MethodGetInfoRequest = {
    auth_login: string,
    auth_secret: string,
}

export type MethodsItem = {
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

export type MethodEditRequest = {
    auth_login: string,
    auth_secret: string,
    method: string,
    extra_commission_percent: number,
    enabled: boolean,
}

export type MethodEditResponse = {
    error: boolean,
    errrors: string[],
}
