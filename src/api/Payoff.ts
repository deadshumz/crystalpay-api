import { 
    PayoffCancelRequest,
    PayoffCancelResponse,
    PayoffCreateRequest, 
    PayoffCreateResponse, 
    PayoffInfoRequest, 
    PayoffInfoResponse, 
    PayoffSubmitRequest, 
    PayoffSubmitResponse, 
    SubtractFrom 
} from "../@types/Payoff";
import CrystalUtils from "../utils/CrystalUtils";
import axios from "axios";

/**
 * @export
 * @class Payoff
 * @param {string} auth_login - CrystalPay login
 * @param {string} auth_secret - CrystalPay secret
 * @param {CrystalUtils} crystal_utils - CrystalUtils instance
 * @typedef {Payoff}
 */
export default class Payoff {
    constructor(private auth_login: string, private auth_secret: string, private crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    /**
     * Create Payoff request
     * After creating Payoff request, you need to submit it or cancel it
     * @public
     * @async
     * @param {string} signature - Request signature
     * @param {number} amount - Payoff amount, Example: 10, 0.0015
     * @param {string} method - Payoff method, Example: LZTMARKET, BITCOIN
     * @param {string} wallet - Recipient wallet
     * @param {string} subtract_from - Why charge commissions, possible options: balance, amount
     * @param {Object} [extra] 
     * The object `extraː`can contain the following fields:
     * - `amount_currency` (string, optional) Currency amount, automatically converted to the currency method for withdrawal, for example: RUB, USD, BTC
     * - `callback_url` (string, optional) Url for HTTP Callback notification after the payoff is completed
     * - `extra` (string, optional) Any internal data, for example: Payment ID in your system
     * These fields are optional and can be provided depending on the specific requirements.
     * @returns {Promise<InvoiceCreateResponse>}
     */
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

    /**
     * Submit Payoff request
     * You can only confirm your application with `created` status.
     * @public
     * @async
     * @param {string} signature - Request signature
     * @param {string} id - Payoff ID
     * @returns {Promise<PayoffSubmitResponse>}
     */
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

    /**
     * Cancel Payoff request
     * You can only confirm your application with `created` status.
     * @public
     * @async
     * @param {string} signature - Request signature
     * @param {string} id - Payoff ID
     * @returns {Promise<PayoffCancelResponse>}
     */
    public async cancel(signature: string, id: string): Promise<PayoffCancelResponse> {
        const url = this.crystal_utils.buildUrl('payoff', 'cancel');
        const data: PayoffCancelRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            signature: signature,
            id: id,
        }
        const info = await axios.post<PayoffCancelResponse>(url, data);
        return info.data;
    }

    /**
     * Get info about Payoff request
     * @public
     * @async
     * @param {string} id - Payoff ID
     * @returns {Promise<PayoffInfoResponse>}
     */
    public async info(id: string): Promise<PayoffInfoResponse> {
        const url = this.crystal_utils.buildUrl('payoff', 'info');
        const data: PayoffInfoRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            id: id,
        }
        const info = await axios.post<PayoffInfoResponse>(url, data);
        return info.data;
    }
}
