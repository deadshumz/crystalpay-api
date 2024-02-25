import CrystalUtils from './utils/CrystalUtils';
import Me from './api/Me';
import Balance from './api/Balance';
import Method from './api/Method';

/**
 * @export
 * @class CrystalPay
 * @param {string} auth_login - CrystalPay login
 * @param {string} auth_secret - CrystalPay secret
 */
export default class CrystalPay {
    public Me : Me;
    public Balance: Balance;
    public Method: Method;

    constructor(auth_login: string, auth_secret: string) {
        this.Me = new Me(auth_login, auth_secret, new CrystalUtils);
        this.Balance = new Balance(auth_login, auth_secret, new CrystalUtils);
        this.Method = new Method(auth_login, auth_secret, new CrystalUtils);
    }
}
