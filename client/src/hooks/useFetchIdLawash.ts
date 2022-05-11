import { useQuery } from "react-query";
import { LawashService } from "../services";

export default function (id: string) {
  const fetchLawashById = async() => {
    return await LawashService.getLawashById(id);
  }
  
  if(id) {
    const { isLoading, isError, data } = useQuery('lawash', () => fetchLawashById());

    return { isLoading, isError, data }
  } else return {isLoading: false, isError: false, data: null}
}