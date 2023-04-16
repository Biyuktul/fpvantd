import { Route, Routes } from "react-router-dom";
import Incident from './Incident';
import CaseTable from "./CaseTable";
import ReportPage from './ReportPage';

function Main() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<OverviewDashboard />}></Route>
            <Route path='/case_mgt' element={<CaseTable />}></Route>
            <Route path='/criminal_records' element={<Criminal />}></Route>
            <Route path='/incidents' element={<Incident/>}></Route>
            <Route path="/reports" element={<ReportPage />}> </Route>
        </Routes>
    </div>
  );
}
export default Main;