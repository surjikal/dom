import { WhoisResponseIANA, WhoisResponseGeneric } from './client';
import * as WhoisTestDatasets from '../test/whois-test-data';

test('WhoisResponse IANA', async () => {
    const response = new WhoisResponseIANA(WhoisTestDatasets.iana.data);
    expect(response.getRefer()).toBe(WhoisTestDatasets.iana.refer);
});

for (const expected of WhoisTestDatasets.responses) {
    test(`WhoisResponse ${expected.server}`, () => {
        const response = new WhoisResponseGeneric(expected.data);
        expect(response.getExpiryDate()).toBe(expected.expiryDate);
        expect(response.getCreatedDate()).toBe(expected.createdDate);
        expect(response.getUpdatedDate()).toBe(expected.updatedDate);
    });
}
