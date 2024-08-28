import { 
    MethodGetInfoRequest, 
    MethodGetInfoResponse,
    MethodEditRequest,
    MethodEditResponse
} from "../@types/Method";
import CrystalUtils from "../utils/CrystalUtils";
import axios from "axios";

/**
 * @export
 * @class Method
 * @param {string} auth_login - CrystalPay login
 * @param {string} auth_secret - CrystalPay secret
 * @param {CrystalUtils} crystal_utils - CrystalUtils instance
 */
export default class Method {
    constructor(private readonly auth_login: string, private readonly auth_secret: string, private crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    /**
     * Get information about the payment methods
     * @public
     * @async
     * @returns {Promise<MethodGetInfoResponse>} Payment methods info
     */
    public async getInfo(): Promise<MethodGetInfoResponse> {
        const url = this.crystal_utils.buildUrl('method', 'list');
        const data: MethodGetInfoRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret
        }
        const info = await axios.post<MethodGetInfoResponse>(url, data);
        return info.data;
    }

    /**
     * Edit payment method
     * @public
     * @async
     * @param {string} method - Payment method, Examples: LZTMARKET, BITCOIN
     * @param {number} extra_commission_percent - Extra commission percent for payment method, in percent
     * @param {boolean} enabled - Enable/disable payment method
     * @returns {Promise<MethodEditResponse>} Status
     */
    public async edit(method: string, extra_commission_percent: number, enabled: boolean): Promise<MethodEditResponse> {
        const url = this.crystal_utils.buildUrl('method', 'edit');
        const data: MethodEditRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            method: method,
            extra_commission_percent: extra_commission_percent,
            enabled: enabled,
        }
        const info = await axios.post<MethodEditResponse>(url, data);
        return info.data;
    }
}
