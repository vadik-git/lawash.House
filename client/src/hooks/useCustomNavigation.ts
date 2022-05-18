import { useNavigate } from "react-router-dom";
import { UPDATE_PATH } from "../consts";

export default function () {
  const navigate = useNavigate();
  
  const toUpdateLawashPage = (lawashId: any) => navigate(`../${UPDATE_PATH}/${lawashId}`);
  const toLawashesPage = () => navigate(`../content`);

  return { toUpdateLawashPage, toLawashesPage }
};