import axios from 'axios';

type UseService = {
    getServicesByUser: (id: number) => Promise<any>;
};

export default function useServices(): UseService {
    async function getServicesByUser(id: number): Promise<any> {
        try {
            return (
                await axios.get<any>(
                    `https://f2859688e0ad.ngrok.io/services/user/${id}`
                )
            ).data;
        } catch (e) {}
    }

    return {
        getServicesByUser,
    };
}
