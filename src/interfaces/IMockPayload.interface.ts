export default interface IMockPayload {
    status: string;
    name: {
        first: string;
        middle: string;
        last: string;
    };
    username: string;
    password: string;
    emails: string[];
    phoneNumber: string;
    location: {
        street: string;
        city: string;
        state: string;
        country: string;
        zip: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
    };
    website: string;
    domain: string;
    job: {
        title: string;
        descriptor: string;
        area: string;
        type: string;
        company: string;
    };
    creditCard: {
        number: string;
        cvv: string;
        issuer: string;
    };
    uuid: string;
    objectId: string;
};
