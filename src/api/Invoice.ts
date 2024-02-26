import { InvoiceCreateResponse, InvoiceType } from "../@types/Invoice";
import CrystalUtils from "../utils/CrystalUtils";
import axios from 'axios';

/**
 * @export
 * @class Invoice
 * @param {string} auth_login - CrystalPay login
 * @param {string} auth_secret - CrystalPay secret
 * @param {CrystalUtils} crystal_utils - CrystalUtils instance
 */
export default class Invoice {
    private auth_login: string;
    private auth_secret: string;
    private crystal_utils: CrystalUtils;

    constructor(auth_login: string, auth_secret: string, crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    /**
     * Create invoice
     * @public
     * @async
     * @param {number} amount - Invoice amount, Example: 10, 0.0015
     * @param {InvoiceType} type - Invoice type, possible values: 'purchase', 'topup'
     * @param {number} lifetime - Invoice lifetime in minutes, max - 4320
     * @param {Object} [extra] 
     * The object `extraː`can contain the following fields:
     * - `amount_currency` (string, optional) describes the currency of the sum
     * - `required_method` (string, optional) specifies the required method
     * - `description` (string, optional) contains description
     * - `redirect_url` (string, optional) URL for redirection
     * - `callback_url` (string, optional) URL for callback
     * - `extra` (string, optional) additional information
     * - `payer_details` (string, optional) payer details
     * These fields are optional and can be provided depending on the specific requirements.
     * @returns {Promise<InvoiceCreateResponse>}
     */
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

    /**
     * Get information about the invoice
     * @public
     * @async
     * @param {string} id - Invoice ID
     * @returns {Promise<InvoiceCreateResponse>}
     */
    public async getInfo(id: string): Promise<InvoiceCreateResponse> {
        const url = this.crystal_utils.buildUrl('invoice', 'info');
        const data = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            id: id
        }
        const info = await axios.post<InvoiceCreateResponse>(url, data);
        return info.data;
    }
}
