import { formatDistanceToNow } from 'date-fns';
import { lookup, WhoisResponseGeneric } from './client';
import { parse } from './domain';

const usage = (...error: string[]) => {
    if (error.length !== 0) console.error('ERROR:', ...error);
    console.error('Usage: ./whoiz <domain>');
    process.exit(-1);
};

export const parseArgs = (argv: string[]) => {
    let domain = (argv[2] || '').trim();
    if (!domain) usage();
    try {
        domain = parse(argv[2]);
    } catch (error) {
        console.error(error);
        usage('invalid domain');
    }
    return { domain };
};

const formatTimestamp = (d: string | null) => {
    if (d === null) return null;
    return formatDistanceToNow(new Date(d));
};

const formatResponse = (response: WhoisResponseGeneric) => {
    const createdAt = response.getCreatedDate();
    const expiresAt = response.getExpiryDate();
    const updatedAt = response.getUpdatedDate();
    console.log('Created at:', formatTimestamp(createdAt));
    console.log('Expires at:', formatTimestamp(expiresAt));
    console.log('Updated at:', formatTimestamp(updatedAt));
};

export const main = async (argv: string[]) => {
    const { domain } = parseArgs(argv);
    const response = await lookup(domain);
    formatResponse(response);
};
