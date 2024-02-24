import CrystalUtils from './utils/CrystalUtils';
import Me from './api/Me';

class CrystalPay {
    public Me : Me;

    constructor(auth_login: string, auth_secret: string) {
        this.Me = new Me(auth_login, auth_secret, new CrystalUtils);
    }
}

export default CrystalPay;
