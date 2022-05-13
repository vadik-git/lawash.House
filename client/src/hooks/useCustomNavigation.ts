import { useNavigate } from "react-router-dom";
import { LAWASH_PATH, UPDATE_PATH } from "../consts";

export default function () {
  const navigate = useNavigate();
  
  const toUpdateLawashPage = (lawashId: any) => navigate(`../${UPDATE_PATH}/${lawashId}`);
  const toLawashesPage = () => navigate(`../${LAWASH_PATH}`);

  return { toUpdateLawashPage, toLawashesPage }
};