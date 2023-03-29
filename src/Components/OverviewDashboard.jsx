import Card from './Card';
import Chart from './Chart';
import Report from './Report';
import ActivityLog from './ActivityLog';
import { GiPoliceOfficerHead, GiHandcuffs } from 'react-icons/gi';
import { MdLocalPolice } from 'react-icons/md';
import { FaFlag } from 'react-icons/fa';
import '../styles/Main.css';

const card1_info = "Departments"
const card2_info = "Officers"
const card3_info = "Stations"
const card4_info = "Arrests"

function OverviewDashboard() {
  return (
    <div className="overview-container">
        <div className='card-container'>
            <Card text={card1_info}>
                <MdLocalPolice size={50} style={{ fill: '#0E8388' }}/>
            </Card>
            <Card text={card2_info}>
                <GiPoliceOfficerHead size={50} style={{ fill: '#4D455D' }}/>
            </Card>
            <Card text={card3_info}>
                <FaFlag size={50} style={{ fill: '#698269' }}/>
            </Card>
            <Card text={card4_info}>
                <GiHandcuffs size={50} style={{ fill: '#DF2E38' }}/>
            </Card> 
        </div>

        <div className='chart-container2'>
            <Chart />
        </div>
        <div className='report-container2'>
            <Report />
        </div>
        <div className='log-container'>
            <ActivityLog />
        </div>
    </div>
  );
}
export default OverviewDashboard;