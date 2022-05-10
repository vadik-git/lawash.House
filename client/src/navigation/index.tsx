import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { Lawash, Main } from '../pages';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="lawash" element={<Lawash />} />
    </Routes>
  )
}

export default Navigation;