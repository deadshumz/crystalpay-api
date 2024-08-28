import CrystalUtils from './utils/CrystalUtils';
import Me from './api/Me';
import Balance from './api/Balance';
import Method from './api/Method';
import Invoice from './api/Invoice';
import Payoff from './api/Payoff';
import Ticker from './api/Ticker';
import History from './api/History';

/**
 * @export
 * @class CrystalPay
 * @param {string} auth_login - CrystalPay login
 * @param {string} auth_secret - CrystalPay secret
 */
export default class CrystalPay {
    public Me: Me;
    public Balance: Balance;
    public Method: Method;
    public Invoice: Invoice;
    public Payoff: Payoff;
    public Ticker: Ticker;
    public History: History;

    constructor(auth_login: string, auth_secret: string) {
        const utils = new CrystalUtils();
        this.Me = new Me(auth_login, auth_secret, utils);
        this.Balance = new Balance(auth_login, auth_secret, utils);
        this.Method = new Method(auth_login, auth_secret, utils);
        this.Invoice = new Invoice(auth_login, auth_secret, utils);
        this.Payoff = new Payoff(auth_login, auth_secret, utils);
        this.Ticker = new Ticker(auth_login, auth_secret, utils);
        this.History = new History(auth_login, auth_secret, utils);
    }
}

export {Me, Balance, Method, Invoice, Payoff, Ticker, History, CrystalUtils}