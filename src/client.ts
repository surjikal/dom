import { lookup as rawLookup } from './lib/whois';

const getServer = async (domain: string) => {
    const data = await rawLookup(domain);
    const response = new WhoisResponseIANA(data);
    const refer = response.getRefer();
    if (!refer) throw new Error(`Could not find server for domain '${domain}'.`);
    return refer;
};

export const lookup = async (domain: string): Promise<WhoisResponseGeneric> => {
    const server = await getServer(domain);
    const data = await rawLookup(domain, { server });
    return new WhoisResponseGeneric(data);
};

class WhoisResponse {
    readonly data: string;
    readonly lines: string[];

    constructor(dataOrResponse: string | WhoisResponse) {
        if (dataOrResponse instanceof WhoisResponse) {
            dataOrResponse = dataOrResponse.data;
        }
        this.data = dataOrResponse;
        this.lines = this.data
            .split('\n')
            .map((x) => (x || '').trim())
            .filter((x) => x.length > 0);
    }

    getValue(substring: string) {
        substring = substring.toLowerCase();
        const lines = this.lines.filter((x) => {
            return x.toLowerCase().indexOf(substring) >= 0;
        });
        if (lines.length === 0) {
            return null;
        }
        if (lines.length > 1) {
            throw new Error(`Found multiple lines matching '${substring}'\n${lines.join('\n')}\n`);
        }
        const line = lines[0];
        const [_, ...rest] = line.split(':');
        const value = rest.join(':').trim();
        return value;
    }
}

export class WhoisResponseIANA extends WhoisResponse {
    getRefer() {
        return this.getValue('refer:');
    }
}

export class WhoisResponseGeneric extends WhoisResponse {
    getExpiryDate() {
        return this.getValue('Expiry Date:');
    }
    getUpdatedDate() {
        return this.getValue('Updated Date:');
    }
    getCreatedDate() {
        return this.getValue('Creation Date:');
    }
}
