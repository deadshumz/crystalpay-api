import { TickerGetRequest, TickerGetResponse, TickerListRequest, TickerListResponse } from "../@types/Ticker";
import axios from "axios";
import CrystalUtils from "../utils/CrystalUtils";

/**
 * @export
 * @class Ticker
 * @typedef {Ticker}
 */
export default class Ticker {
    constructor(private auth_login: string, private auth_secret: string, private crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    /**
     * Get list of available tickers
     * @public
     * @async
     * @returns {Promise<TickerListResponse>}
     */
    public async list(): Promise<TickerListResponse> {
        const url = this.crystal_utils.buildUrl('ticker', 'list');
        const data: TickerListRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
        }
        const info = await axios.post<TickerListResponse>(url, data);
        return info.data;
    }

    /**
     * Obtain exchange rate against ruble
     * @public
     * @async
     * @param {string[]} tickers - Tickers array, example: ["BTC", "LTC"] 
     * @returns {Promise<TickerGetResponse>}
     */
    public async get(tickers: string[]): Promise<TickerGetResponse> {
        const url = this.crystal_utils.buildUrl('ticker', 'get');
        const data: TickerGetRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret,
            tickers: tickers,
        }
        const info = await axios.post<TickerGetResponse>(url, data);
        return info.data;
    }
}
