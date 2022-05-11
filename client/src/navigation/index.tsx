import { Routes, Route } from "react-router-dom";

import { CREATE_PATH, LAWASH_PATH, UPDATE_PATH } from "../consts";
import { CreateLawash, Lawash, Main, UpdateLawash } from '../pages';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path={LAWASH_PATH} element={<Lawash />} />
      <Route path={CREATE_PATH} element={<CreateLawash />}/>
      <Route path={`${UPDATE_PATH}/:id`} element={<UpdateLawash />}/>
    </Routes>
  )
}

export default Navigation;