
class WAF {
    constructor() {
        this.init();
    }

    init() {
        console.log('WAF init');
    }

    private blockedIPs!: number;
}
export { WAF }