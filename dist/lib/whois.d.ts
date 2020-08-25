export interface LookupOptions {
    server: string;
    verbose?: boolean;
    follow?: number;
}
export declare const lookup: (domain: string, options?: LookupOptions | undefined) => Promise<string>;
