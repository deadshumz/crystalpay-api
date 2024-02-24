import { MethodGetInfoRequest, MethodGetInfoResponse } from "../@types/Method";
import CrystalUtils from "../utils/CrystalUtils";
import axios from "axios";

export default class Method {
    private auth_login: string;
    private auth_secret: string;
    private crystal_utils: CrystalUtils;

    constructor(auth_login: string, auth_secret: string, crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    public async getInfo(): Promise<MethodGetInfoResponse> {
        const url = this.crystal_utils.buildUrl('method', 'list');
        const data: MethodGetInfoRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret
        }
        const info = await axios.post<MethodGetInfoResponse>(url, data);
        return info.data;
    }
}
