import React from 'react';
import { useQuery } from 'react-query';
import { LawashCard } from '../../components';

import { LawashService } from '../../services';

export const Main = () => {
  const { isLoading, isError, data, error } = useQuery('todos', () => fetchLawash())

  const fetchLawash = async() => {
    return await LawashService.getAllLawashes();
  }

  if(isLoading) return (<p>Loading...</p>)

  if(isError) return (<p>Error...</p>)

  return (
    <div style={{
      padding: '20px 30px',
      backgroundColor: '#333',
      height: '100vh'
    }}>
      {data.map((item: any) => <LawashCard key={item._id} lawash={item}/>)}
    </div>
  )
}

 