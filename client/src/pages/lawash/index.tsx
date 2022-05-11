import { Button } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";

import { LawashCard } from "../../components";
import { LawashService } from "../../services";

export const Lawash = () => {
  const { isLoading, isError, data } = useQuery('lawashes', () => fetchLawash());
  const [isChangeMode, setIsChangeMode] = useState(false)

  const fetchLawash = async() => {
    return await LawashService.getAllLawashes();
  }

  if(isLoading) return (<p>Loading...</p>)

  if(isError) return (<p>Error...</p>)

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 30px',
      }}>
        <h1 style={{
          color: '#fff',
        }}>Шаурма</h1>

        <Button onClick={() => setIsChangeMode((prev) => !prev)} variant="outlined">Редактировать</Button>
      </div>

      <div style={{
        padding: '20px 30px',
        backgroundColor: '#333',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
      }}>
        {data.map((item: any) => <LawashCard key={item._id} changeMode={isChangeMode} lawash={item}/>)}
      </div>
    </>
  )
}
