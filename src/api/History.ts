import {
    HistoryPaymentsRequest, 
    HistoryPaymentsResponse,
    HistoryPayoffsRequest,
    HistoryPayoffsResponse,
    HistorySummaryRequest,
    HistorySummaryResponse
} from "../@types/History";
import CrystalUtils from "../utils/CrystalUtils";
import axios from "axios";

/**
 * @export
 * @class History
 * @typedef {History}
 */
export default class History {
    constructor(private auth_login: string, private auth_secret: string, private crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    /**
     * Get history of payments
     * @public
     * @async
     * @param {number} page - Page number, exapmle: 1, 2, 3
     * @param {number} items - count of items per page, maximum - 100
     * @returns {Promise<HistoryPaymentsResponse>}
     */
    public async getPayments(page: number, items: number): Promise<HistoryPaymentsResponse> {
        const url = this.crystal_utils.buildUrl('history', 'payments');
        const data: HistoryPaymentsRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            page: page,
            items: items
        }
        const info = await axios.post<HistoryPaymentsResponse>(url, data);
        return info.data;
    }

    /**
     * Get history of payoffs
     * @public
     * @async
     * @param {number} page - Page number, exapmle: 1, 2, 3
     * @param {number} items - count of items per page, maximum - 100
     * @returns {Promise<HistoryPayoffsResponse>}
     */
    public async getPayoffs(page: number, items: number): Promise<HistoryPayoffsResponse> {
        const url = this.crystal_utils.buildUrl('history', 'payoffs');
        const data: HistoryPayoffsRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            page: page,
            items: items
        }
        const info = await axios.post<HistoryPayoffsResponse>(url, data);
        return info.data;
    }

    /**
     * Get summary
     * @public
     * @async
     * @returns {Promise<HistorySummaryResponse>}
     */
    public async getSummary(): Promise<HistorySummaryResponse> {
        const url = this.crystal_utils.buildUrl('history', 'summary');
        const data: HistorySummaryRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret
        }
        const info = await axios.post<HistorySummaryResponse>(url, data);
        return info.data;
    }
}
