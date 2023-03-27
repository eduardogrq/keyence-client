import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    );
}

export default AppRouter;
