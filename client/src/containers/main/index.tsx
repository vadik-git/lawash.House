import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { NavBar } from "../../components";
import { CREATE_PATH, UPDATE_PATH } from "../../consts";
import { useAuth } from "../../hooks";
import { CreateLawash, Lawash, UpdateLawash } from '../../pages';

export const Content = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) navigate('/');
  });
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Lawash />} />
        <Route path={`${CREATE_PATH}`} element={<CreateLawash />}/>
        <Route path={`${UPDATE_PATH}/:id`} element={<UpdateLawash />}/>
      </Routes>
    </>
  )
}