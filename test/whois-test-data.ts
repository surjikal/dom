import dedent from 'dedent';

export type WhoisTestResponse = {
    server: string;
    data: string;
};
export type WhoisIANATestResponse = WhoisTestResponse & {
    refer: string;
};
export const iana: WhoisIANATestResponse = {
    server: 'whois.iana.org',
    refer: 'whois.nic.io',
    data: dedent`
    % IANA WHOIS server
    % for more information on IANA, visit http://www.iana.org
    % This query returned 1 object

    refer:        whois.nic.io

    domain:       IO

    organisation: Internet Computer Bureau Limited
    address:      c/o Sure (Diego Garcia) Limited
    address:      Diego Garcia
    address:      British Indian Ocean Territories, PSC 466 Box 59
    address:      FPO-AP 96595-0059
    address:      British Indian Ocean Territory

    contact:      administrative
    name:         Internet Administrator
    organisation: Internet Computer Bureau Limited
    address:      c/o Sure (Diego Garcia) Limited
    address:      Diego Garcia
    address:      British Indian Ocean Territories, PSC 466 Box 59
    address:      FPO-AP 96595-0059
    address:      British Indian Ocean Territory
    phone:        +246 9398
    fax-no:       +246 9398
    e-mail:       administrator@nic.io

    contact:      technical
    name:         Administrator
    organisation: Internet Computer Bureau Ltd
    address:      Greytown House, 221-227 High Street
    address:      Orpington
    address:      Kent
    address:      BR6 0NZ
    address:      United Kingdom
    phone:        +44 (0)1689 827505
    fax-no:       +44 (0)1689 831478
    e-mail:       admin@icb.co.uk

    nserver:      A0.NIC.IO 2a01:8840:9e:0:0:0:0:17 65.22.160.17
    nserver:      A2.NIC.IO 2a01:8840:a1:0:0:0:0:17 65.22.163.17
    nserver:      B0.NIC.IO 2a01:8840:9f:0:0:0:0:17 65.22.161.17
    nserver:      C0.NIC.IO 2a01:8840:a0:0:0:0:0:17 65.22.162.17
    ds-rdata:     57355 8 2 95a57c3bab7849dbcddf7c72ada71a88146b141110318ca5be672057e865c3e2
    ds-rdata:     57355 8 1 434e91e206134f5b3b0ac603b26f5e029346abc9

    whois:        whois.nic.io

    status:       ACTIVE
    remarks:      Registration information: http://www.nic.io/

    created:      1997-09-16
    changed:      2019-10-29
    source:       IANA
    `,
};

export type WhoisDomainTestResponse = WhoisTestResponse & {
    updatedDate: string;
    createdDate: string;
    expiryDate: string;
};
export const responses: WhoisDomainTestResponse[] = [
    {
        server: 'whois.nic.io',
        updatedDate: '2019-03-05T14:41:54Z',
        createdDate: '2003-09-15T11:13:53Z',
        expiryDate: '2027-05-01T00:00:02Z',
        data: dedent`
        Domain Name: NIC.IO
        Registry Domain ID: D503300000040453277-LRMS
        Registrar WHOIS Server:
        Registrar URL:
        Updated Date: 2019-03-05T14:41:54Z
        Creation Date: 2003-09-15T11:13:53Z
        Registry Expiry Date: 2027-05-01T00:00:02Z
        Registrar Registration Expiration Date:
        Registrar: Afilias GRS Test Account
        Registrar IANA ID: 119
        Registrar Abuse Contact Email:
        Registrar Abuse Contact Phone:
        Reseller:
        Domain Status: serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited
        Domain Status: serverTransferProhibited https://icann.org/epp#serverTransferProhibited
        Domain Status: serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited
        Registrant Organization: Internet Computer Bureau Ltd
        Registrant State/Province: Dorset
        Registrant Country: GB
        Name Server: B0.NIC.IO
        Name Server: A2.NIC.IO
        Name Server: A0.NIC.IO
        Name Server: C0.NIC.IO
        DNSSEC: unsigned
        URL of the ICANN Whois Inaccuracy Complaint Form is https://www.icann.org/wicf/
        `,
    },
    {
        server: 'whois.nic.google',
        updatedDate: '2020-02-19T17:44:36Z',
        createdDate: '2015-01-05T17:44:36Z',
        expiryDate: '2021-01-05T17:44:36Z',
        data: dedent`
        Domain Name: nic.dev
        Registry Domain ID: 4E9533-DEV
        Registrar WHOIS Server: whois.nic.google
        Registrar URL:
        Updated Date: 2020-02-19T17:44:36Z
        Creation Date: 2015-01-05T17:44:36Z
        Registry Expiry Date: 2021-01-05T17:44:36Z
        Registrar: Charleston Road Registry NonBillable
        Registrar IANA ID: 9999
        Registrar Abuse Contact Email: registry-abuse-support@google.com
        Registrar Abuse Contact Phone: +1.2125652633
        Domain Status: serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited
        Domain Status: serverTransferProhibited https://icann.org/epp#serverTransferProhibited
        Domain Status: serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited
        Registry Registrant ID: REDACTED FOR PRIVACY
        Registrant Name: REDACTED FOR PRIVACY
        Registrant Organization: Charleston Road Registry, Inc.
        Registrant Street: REDACTED FOR PRIVACY
        Registrant Street:
        Registrant City: REDACTED FOR PRIVACY
        Registrant State/Province: CA
        Registrant Postal Code: REDACTED FOR PRIVACY
        Registrant Country: US
        Registrant Phone: REDACTED FOR PRIVACY
        Registrant Fax: REDACTED FOR PRIVACY
        Registrant Email: Please query the WHOIS server of the owning registrar identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.
        Registry Admin ID: REDACTED FOR PRIVACY
        Admin Name: REDACTED FOR PRIVACY
        Admin Organization: REDACTED FOR PRIVACY
        Admin Street: REDACTED FOR PRIVACY
        Admin Street:
        Admin City: REDACTED FOR PRIVACY
        Admin State/Province: REDACTED FOR PRIVACY
        Admin Postal Code: REDACTED FOR PRIVACY
        Admin Country: REDACTED FOR PRIVACY
        Admin Phone: REDACTED FOR PRIVACY
        Admin Fax: REDACTED FOR PRIVACY
        Admin Email: Please query the WHOIS server of the owning registrar identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.
        Registry Tech ID: REDACTED FOR PRIVACY
        Tech Name: REDACTED FOR PRIVACY
        Tech Organization: REDACTED FOR PRIVACY
        Tech Street: REDACTED FOR PRIVACY
        Tech Street:
        Tech City: REDACTED FOR PRIVACY
        Tech State/Province: REDACTED FOR PRIVACY
        Tech Postal Code: REDACTED FOR PRIVACY
        Tech Country: REDACTED FOR PRIVACY
        Tech Phone: REDACTED FOR PRIVACY
        Tech Fax: REDACTED FOR PRIVACY
        Tech Email: Please query the WHOIS server of the owning registrar identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.
        Name Server: ns1.google.com
        Name Server: ns2.google.com
        Name Server: ns3.google.com
        Name Server: ns4.google.com
        DNSSEC: unsigned
        `,
    },
];
