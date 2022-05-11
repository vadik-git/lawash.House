import { useParams } from "react-router-dom";
import { LawashForm } from "../../components"
import { useFetchIdLawash } from "../../hooks";

export const UpdateLawash = () => {
  const params = useParams() as any;
  const { isLoading, isError, data } = useFetchIdLawash(params.id);

  if(isLoading) return (<p>Loading...</p>)  
  if(isError) return (<p>Что то пошло не так</p>)

  return (
    <LawashForm data={data}/>
  )
}