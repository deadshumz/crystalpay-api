import { InvoiceCreateResponse, InvoiceType } from "../@types/Invoice";
import CrystalUtils from "../utils/CrystalUtils";
import axios from 'axios';

export default class Invoice {
    private auth_login: string;
    private auth_secret: string;
    private crystal_utils: CrystalUtils;

    constructor(auth_login: string, auth_secret: string, crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    public async create(amount: number, type: InvoiceType, lifetime: number, extra?: {
        amount_currency?: string,
        required_method?: string,
        description?: string,
        redirect_url?: string,
        callback_url?: string,
        extra?: string,
        payer_details?: string
    }): Promise<InvoiceCreateResponse> {
        const url = this.crystal_utils.buildUrl('invoice', 'create');
        const data = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            amount: amount,
            type: type,
            lifetime: lifetime,
            ...extra
        }
        const info = await axios.post<InvoiceCreateResponse>(url, data);
        return info.data;
    }
}
