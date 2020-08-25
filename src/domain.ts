export const parse = (domain: string) => {
    domain = (domain || '').trim();
    if (!domain) {
        throw new Error('Lookup is blank...');
    }
    domain = domain.replace(/^https?:\/\//, '');
    domain = domain.replace(/(:\d+)?(\/.*)?$/, '');
    return domain;
};
