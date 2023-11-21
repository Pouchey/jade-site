
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getAPI from '_services/api';

const api = getAPI()

export const useGetSecret = async () => {
    return await api.getSecret();
}