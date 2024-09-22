//  The Hydration API for Dynamic Content
// Adding Features to Fetch
class H2O {
    
    private headers: Record<string, string>;
    private credentials: RequestCredentials;
    private cache: RequestCache;
    private redirect: RequestRedirect;
    private referrer: string;
    private integrity: string;
    private keepalive: boolean;
    private signal: AbortSignal | null;
    private timeout: number;
    private retry: RetryOptions | null;
    private progress: ProgressCallback | null;
    private transform: TransformCallback | null;
    private parser: ParserCallback | null;
    private responseType: ResponseType;

    constructor(options: H2Ooptions) {
        this.headers = options.headers || {};
        this.credentials = options.credentials || 'same-origin';
        this.cache = options.cache || 'default';
        this.redirect = options.redirect || 'follow';
        this.referrer = options.referrer || '';
        this.integrity = options.integrity || '';
        this.keepalive = options.keepalive || false;
        this.signal = options.signal || null;
        this.timeout = options.timeout || 0;
        this.retry = options.retry || null;
        this.progress = options.progress || null;
        this.transform = options.transform || null;
        this.parser = options.parser || null;
        this.responseType = options.responseType || 'json';
    }

    use(){
        // Use the middleware
        return this;
    }
    async fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
        const request = new Request(input, init);
        const cache = this.cache;

        // Handle the cache
        switch(cache){
            case 'no-cache':
                request.headers.set('Cache-Control', 'no-cache');
                break;
            case 'reload':
                request.headers.set('Cache-Control', 'no-cache');
                request.headers.set('Pragma', 'no-cache');
                break;
            case 'force-cache':
                request.headers.set('Cache-Control', 'max-age=3153600');
                break;
            case 'only-if-cached':
                request.headers.set('Cache-Control', 'max-age=0');
                break;
        }
        const response = await this.fetch(request)

        return response;
    }

}

interface H2Ooptions {
    headers?: Record<string, string>;
    credentials?: RequestCredentials;
    cache?: RequestCache;
    redirect?: RequestRedirect;
    referrer?: string;
    integrity?: string;
    keepalive?: boolean;
    signal?: AbortSignal | null;
    timeout?: number;
    retry?: RetryOptions | null;
    progress?: ProgressCallback | null;
    transform?: TransformCallback | null;
    parser?: ParserCallback | null;
    responseType?: ResponseType;
}

type ProgressCallback = (progress: ProgressEvent) => void;
type TransformCallback = (response: Response) => PromiseLike<Response>;
type ParserCallback = (response: Response) => Promise<any>;
type RetryOptions = {
    maxRetries: number;
    retryDelay: number;
}
type ResponseType = 'json' | 'text' | 'blob' | 'arrayBuffer' | 'formData';

export {H2O}