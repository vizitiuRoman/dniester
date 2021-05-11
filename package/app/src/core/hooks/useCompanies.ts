import axios from 'axios';

type UseService = {
    getCompanies: () => Promise<any>;
};

export default function useCompanies(): UseService {
    async function getCompanies(): Promise<any> {
        try {
            return (
              await axios.get<any>('https://f2859688e0ad.ngrok.io/users')
            ).data;
        } catch (e) {
        }
    }

    return {
        getCompanies,
    };
}
