import complexPayloadAdapter from './adapters/complexPayload.adapter';
import httpService from './services/http.service';


const mainApp: () => void = async () => {
    // Initialize the service
    const service = httpService();

    try {
        // Fetch the payload
        const payload = await service.getPayload();
        console.log('Original Payload:', payload);

        // Adapt the payload
        const adaptedPayload = complexPayloadAdapter(payload);
        console.log('Adapted Payload:', adaptedPayload);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching payload:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

mainApp();
