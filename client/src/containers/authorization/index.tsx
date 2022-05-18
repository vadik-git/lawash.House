import { Routes, Route } from "react-router-dom";

import { Auth } from '../../pages';

export const Authorization = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
    </Routes>
  )
}