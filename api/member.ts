import { methodFormat } from '@/utils/methodFormat';

import client from './client';

const PATH = 'api/';
const memberApis = {
  searchMember: methodFormat(async (keyword) => {
    const response = await client.get(`${PATH}user/getUserByName/${keyword}`);
    return response;
  }),

  getAllMembers: methodFormat(async () => {
    const response = await client.get(`${PATH}user/getUserList`);
    return response;
  }),
  getButtonMembers: methodFormat(async () => {
    const response = await client.get(`${PATH}user/getUserList2`);
    return response;
  }),
};

export default memberApis;
