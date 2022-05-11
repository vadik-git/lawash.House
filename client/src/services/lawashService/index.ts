import axios from 'axios';

import { HttpService } from '../index';

class LawashService extends HttpService {
  async getAllLawashes() {
    const res = await this.get('getAll');
    
    return res.data;
  }

  async createLawash(data: any) {    
    const res = await this.post('create', data);
    return res.data;
  }
};

export const lawashService = new LawashService('http://localhost:5000', 'api/lawash', axios);
