export type getInfoRequest = {
    auth_login: string;
    auth_secret: string;
}

export type getInfoResponse = {
    error: boolean,
    errors: string[],
    id: number,
    name: string,
    status_level: number,
    created_at: string
}