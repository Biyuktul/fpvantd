import { Route, Routes } from "react-router-dom";
import OverviewDashboard from "./OverviewDashboard";
import StaffsDashboard from "./StaffsDashboard";
import SettingsDashboard from "./SettingsDashboard";


function Main() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<OverviewDashboard />}></Route>
            <Route path='/staffs' element={<StaffsDashboard />}></Route>
            <Route path='/settings' element={<SettingsDashboard />}></Route>
        </Routes>
    </div>
  );
}
export default Main;