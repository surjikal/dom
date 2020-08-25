export declare const lookup: (domain: string) => Promise<WhoisResponseGeneric>;
declare class WhoisResponse {
    readonly data: string;
    readonly lines: string[];
    constructor(dataOrResponse: string | WhoisResponse);
    getValue(substring: string): string | null;
}
export declare class WhoisResponseIANA extends WhoisResponse {
    getRefer(): string | null;
}
export declare class WhoisResponseGeneric extends WhoisResponse {
    getExpiryDate(): string | null;
    getUpdatedDate(): string | null;
    getCreatedDate(): string | null;
}
export {};
