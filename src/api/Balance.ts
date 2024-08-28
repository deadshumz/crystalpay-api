import { BalanceGetInfoRequest, BalanceGetInfoResponse } from "../@types/Balance";
import CrystalUtils from "../utils/CrystalUtils";
import axios from "axios";

/**
 * @export
 * @class Balance
 * @param {string} auth_login - CrystalPay login
 * @param {string} auth_secret - CrystalPay secret
 * @param {CrystalUtils} crystal_utils - CrystalUtils instance
 */
export default class Balance {
    constructor(private readonly auth_login: string, private readonly auth_secret: string, private crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    /**
     * Get information about the balance
     * @public
     * @async
     * @param {boolean} hide_empty - Hide empty invoices
     * @returns {Promise<BalanceGetInfoResponse>} Balance info
     */
    public async getInfo(hide_empty: boolean = false): Promise<BalanceGetInfoResponse> {
        const url = this.crystal_utils.buildUrl('balance', 'info');
        const data: BalanceGetInfoRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            hide_empty: hide_empty,
        }
        const info = await axios.post<BalanceGetInfoResponse>(url, data);
        return info.data;
    }
}
