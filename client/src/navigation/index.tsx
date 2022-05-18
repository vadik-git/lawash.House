import { Routes, Route, Navigate } from "react-router-dom";

import { Authorization, Content } from "../containers";

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Authorization />} />
      <Route path='content/*' element={<Content />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  )
}

export default Navigation;