export default class CrystalUtils {
    private baseUrl: string;

    constructor(baseUrl: string = "https://api.crystalpay.io/v2") {
        this.baseUrl = baseUrl;
    }

    public buildUrl(method: string, func: string): string {
        return `${this.baseUrl}/${method}/${func}/`;
    }
}
