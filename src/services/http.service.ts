import IMockPayload from '../interfaces/IMockPayload.interface';
import payload from '../mocks/mock.payload.json';

const httpService = () => {
    const getPayload: () => Promise<{ result: IMockPayload[] }> = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(payload as unknown as { result: IMockPayload[] });
            }, 1000); // Simulate network delay
        });
    };

    return {
        getPayload,
    };
};

export default httpService;
