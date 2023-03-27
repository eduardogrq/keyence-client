import { Route, Routes } from "react-router-dom";
import {Dashboard, Users} from "../pages";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    );
}

export default AppRouter;
