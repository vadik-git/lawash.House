import { useQuery } from "react-query";

import { LawashService } from "../services";
import { ILawash } from "../types";

export default function (id: string) {
  if(id) {
    const { isLoading, isError, data, error } = useQuery('lawash', async() => {
      return await LawashService.getLawashById(id) as ILawash;
    });

    return { isLoading, isError, data, error }
  } else return { isLoading: false, isError: false, data: null }
};