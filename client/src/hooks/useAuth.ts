import { useSelector } from "react-redux";

export default function () {
  const user = useSelector((state: any) => state.auth.user);
  return { user };
}