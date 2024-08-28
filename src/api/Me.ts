import { MeGetInfoRequest, MeGetInfoResponse } from "../@types/Me";
import CrystalUtils from "../utils/CrystalUtils";
import axios from "axios";

/**
 * @export
 * @class Me
 * @param {string} auth_login - CrystalPay login
 * @param {string} auth_secret - CrystalPay secret
 * @param {CrystalUtils} crystal_utils - CrystalUtils instance
 */
export default class Me {
    constructor(private readonly auth_login: string, private readonly auth_secret: string, private crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    /**
     * Get information about the cash register
     * @returns {Promise<MeGetInfoResponse>} Cash register info
    **/
    public async getInfo(): Promise<MeGetInfoResponse> {
        const url = this.crystal_utils.buildUrl('me', 'info');
        const data: MeGetInfoRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret
        }
        const info = await axios.post<MeGetInfoResponse>(url, data);
        return info.data;
    }
}
