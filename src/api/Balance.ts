import { BalanceGetInfoRequest, BalanceGetInfoResponse } from "../@types/Balance";
import CrystalUtils from "../utils/CrystalUtils";
import axios from "axios";

export default class Balance {
    private auth_login: string;
    private auth_secret: string;
    private crystal_utils: CrystalUtils;

    constructor(auth_login: string, auth_secret: string, crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    public async getInfo(): Promise<BalanceGetInfoResponse> {
        const url = this.crystal_utils.buildUrl('balance', 'info');
        const data: BalanceGetInfoRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret
        }
        const info = await axios.post<BalanceGetInfoResponse>(url, data);
        return info.data;
    }
}
