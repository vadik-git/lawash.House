import { Routes, Route } from "react-router-dom";

import { CreateLawash, Lawash, Main, UpdateLawash } from '../pages';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="lawash" element={<Lawash />} />
      <Route path="createLawash" element={<CreateLawash />}/>
      <Route path="update/:id" element={<UpdateLawash />}/>
    </Routes>
  )
}

export default Navigation;