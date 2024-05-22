import IComplexPayload from '../interfaces/IComplexPayload.interface';
import IMockPayload from '../interfaces/IMockPayload.interface';

const complexPayloadAdapter = (payload: { result: IMockPayload[] }): IComplexPayload[] => {
    return payload.result.map((item: IMockPayload): IComplexPayload => {
        const jobTitle = item.job && item.job.title ? item.job.title : 'Unknown';

        return {
            status: item.status || 'Unknown',
            name: {
                first: item.name.first || 'Unknown',
                middle: item.name.middle || 'Unknown',
                last: item.name.last || 'Unknown',
            },
            jobTitle,
            street: item.location.street || 'Unknown',
            city: item.location.city || 'Unknown',
            state: item.location.state || 'Unknown',
        };
    });
}

export default complexPayloadAdapter;
