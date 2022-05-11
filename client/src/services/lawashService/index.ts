import axios from 'axios';

import { API_URL } from '../../consts';
import { ILawash } from '../../types';
import { HttpService } from '../index';

class LawashService extends HttpService {
  async getAllLawashes() {
    const res = await this.get('getAll');
    
    return res.data;
  }

  async getLawashById(id: string) {
    const res = await this.get(`${id}`);
    return res.data;
  }

  async createLawash(data: ILawash) {    
    const res = await this.post('create', data);
    return res.data;
  }

  async updateLawash(data: ILawash) {
    const res = await this.put('update', data);
    return res.data;
  }
};

export const lawashService = new LawashService(API_URL, 'api/lawash', axios);
