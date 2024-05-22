export default interface IComplexPayload {
    status: string;
    name: {
        first: string;
        middle: string;
        last: string;
    };
    jobTitle: string;
    street: string;
    city: string;
    state: string;
}
