import httpRequest from '_services/http';
import { TIntent } from '../types/request';

const getSecret = () => 
    httpRequest.get<TIntent>(`/donate/secret`);


export default {getSecret}