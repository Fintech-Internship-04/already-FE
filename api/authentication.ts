import { methodFormat } from '@/utils/methodFormat';

import client from './client';

const PATH = 'api/';

const authApis = {
  login: methodFormat(async (data) => {
    const response = await client.post(`${PATH}user/login`, data);
    return response;
  }),
  signup: methodFormat(async (data) => {
    const response = await client.post(`${PATH}user/signup`, data);
    return response;
  }),
  enrollAccount: methodFormat(async (data) => {
    const response = await client.post(`${PATH}account/enrollAccount`, data);
    return response;
  }),
};

export default authApis;
