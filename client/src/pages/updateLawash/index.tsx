import { useParams } from "react-router-dom";

import { LawashForm } from "../../components"
import { useFetchIdLawash } from "../../hooks";

export const UpdateLawash = () => {
  const params = useParams() as any;
  const { isLoading, isError, data } = useFetchIdLawash(params.id);

  if(isLoading) {
    return (<p>Loading...</p>)
  }

  if(isError) {
    return (<p>Error...</p>)
  }

  return (
    <div style={{backgroundColor: '#333', paddingBottom: '50px'}}>
      <LawashForm data={data}/>
    </div>
  )
};