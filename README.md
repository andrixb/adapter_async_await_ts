# Complex Payload Adapter

This project demonstrates a scalable pattern to filter and adapt a complex payload using TypeScript.
The structure allows easy extension and maintenance, making it suitable for larger applications with similar needs.

## Project Structure

- `src/`
  - `adapters/` - Contains the adapter logic.
  - `interfaces/` - Contains TypeScript interfaces.
  - `services/` - Contains the mock service.
  - `main.ts` - Main application file.

## Getting Started

### Prerequisites

- Node.js
- TypeScript

### Installation

```bash
git clone https://github.com/yourusername/complex-payload-adapter.git
cd complex-payload-adapter
yarn install
yarn start


## Usage
### Interfaces
```typescript
// IComplexPayload.interface.ts
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

// IMockPayload.interface.ts
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
}
```

### Adapter
```typescript
import IComplexPayload from '../interfaces/IComplexPayload.interface';
import IMockPayload from '../interfaces/IMockPayload.interface';

const complexPayloadAdapter = (payload: { result: IMockPayload[] }): IComplexPayload[] => {
    return payload.result.map((item: IMockPayload): IComplexPayload => ({
        status: item.status || 'Unknown',
        name: {
            first: item.name.first || 'Unknown',
            middle: item.name.middle || 'Unknown',
            last: item.name.last || 'Unknown',
        },
        jobTitle: item.job.title || 'Unknown',
        street: item.location.street || 'Unknown',
        city: item.location.city || 'Unknown',
        state: item.location.state || 'Unknown',
    }));
}

export default complexPayloadAdapter;
```

### Service
```typescript
import IMockPayload from '../interfaces/IMockPayload.interface';
import payload from '../mocks/mock.payload.json';

const httpService = () => {
    const getPayload: () => Promise<{ result: IMockPayload[] }> = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(payload as { result: IMockPayload[] });
            }, 1000); // Simulate network delay
        });
    };

    return {
        getPayload,
    };
};

export default httpService;
```

### Main App
```typescript
import httpService from './services/httpService';
import complexPayloadAdapter from './adapters/complexPayloadAdapter';

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
```
