const whois = require('whois');

export interface LookupOptions {
    server: string;
    verbose?: boolean;
    follow?: number;
}

const defaultOptions = {
    server: 'whois.iana.org',
    verbose: false,
    follow: 0,
};

export const lookup = (domain: string, options?: LookupOptions): Promise<string> => {
    options = { ...defaultOptions, ...options };
    return new Promise((resolve, reject) => {
        whois.lookup(domain, options, (err: unknown, response: string) => {
            if (err) return reject(err);
            resolve(response);
        });
    });
};
