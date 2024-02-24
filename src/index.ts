import CrystalUtils from './utils/CrystalUtils';
import Balance from './api/Balance';
import Me from './api/Me';

export class CrystalPay {
    public Me : Me;
    public Balance: Balance;

    constructor(auth_login: string, auth_secret: string) {
        this.Me = new Me(auth_login, auth_secret, new CrystalUtils);
        this.Balance = new Balance(auth_login, auth_secret, new CrystalUtils);
    }
}
