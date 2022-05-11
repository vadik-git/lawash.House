import { Routes, Route } from "react-router-dom";

import { CreateLawash, Lawash, Main } from '../pages';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="lawash" element={<Lawash />} />
      <Route path="createLawash" element={<CreateLawash />}>
        <Route path=":id" element={<CreateLawash />}/>
      </Route>
    </Routes>
  )
}

export default Navigation;