import { methodFormat } from '@/utils/methodFormat';

import client from './client';

const PATH = 'api/';

const authApis = {
  login: methodFormat(async (data) => {
    const response = await client.post(`${PATH}user/login`, data);
    return response;
  }),
};

export default authApis;
