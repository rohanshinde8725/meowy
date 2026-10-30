import { Routes, Route } from "react-router-dom";
import MainLayoute from '../layouts/MainLayoute'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayoute />}>
            <Route index element={<Home />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
