import { 
    PayoffCreateRequest, 
    PayoffCreateResponse, 
    PayoffSubmitRequest, 
    PayoffSubmitResponse, 
    SubtractFrom 
} from "../@types/Payoff";
import CrystalUtils from "../utils/CrystalUtils";
import axios from "axios";

export default class Payoff {
    constructor(private auth_login: string, private auth_secret: string, private crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    public async create(signature: string, amount: number, method: string, wallet: string, subtract_from: SubtractFrom, extra?: {
        amount_currency?: string,
        callback_url?: string,
        extra?: string,
    }): Promise<PayoffCreateResponse> {
        const url = this.crystal_utils.buildUrl('payoff', 'create');
        const data: PayoffCreateRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            signature: signature,
            amount: amount,
            method: method,
            wallet: wallet,
            subtract_from: subtract_from,
            ...extra
        }
        const info = await axios.post<PayoffCreateResponse>(url, data);
        return info.data;
    }

    public async submit(signature: string, id: string): Promise<PayoffSubmitResponse> {
        const url = this.crystal_utils.buildUrl('payoff', 'submit');
        const data: PayoffSubmitRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            signature: signature,
            id: id,
        }
        const info = await axios.post<PayoffSubmitResponse>(url, data);
        return info.data;
    }
}
