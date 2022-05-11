import { useState } from "react";
import { Button } from "@mui/material";
import { useQuery } from "react-query";

import { LawashCard } from "../../components";
import { LAWASHES } from "../../consts";
import { LawashService } from "../../services";
import { ILawash } from "../../types";

export const Lawash = () => {  
  const { isLoading, isError, data } = useQuery(LAWASHES, () => fetchLawash());
  const [isChangeMode, setIsChangeMode] = useState(false);

  const fetchLawash = async() => {
    return await LawashService.getAllLawashes();
  }

  if(isLoading) {
    return (<p>Loading...</p>)
  }

  if(isError) {
    return (<p>Error...</p>)
  }

  return (
    <div style={styles.lawashPage}>
      <div style={styles.title}>
        <h1 style={styles.h1}>Шаурма</h1>

        <Button 
          onClick={() => setIsChangeMode(prev => !prev)} 
          variant="outlined"
        >Редактировать</Button>
      </div>

      <div style={styles.card}>
        {data.map((item: ILawash) => 
          <LawashCard key={item._id} changeMode={isChangeMode} lawash={item}/>
        )}
      </div>
    </div>
  )
}

const styles = {
  lawashPage: {
    margin: '0 auto'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 30px',
  },
  h1: {
    color: '#fff',
  },
  card: {
    padding: '20px 30px',
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap' as 'wrap',
  }
}
