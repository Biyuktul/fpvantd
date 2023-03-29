import '../styles/Appbar.css';
import profile from '../assets/images/profile.png';
import { 
    FaBell,
    FaSearch
} from 'react-icons/fa';
import { BsCircle } from "react-icons/bs";
import { RiMailOpenFill } from "react-icons/ri";


function AppBar() {
    return (
        <div className='navbar'>
            <h2>Overview</h2>
            <ul className="navbar-items">
                <li>
                    <FaSearch color='#EDF1D6' size={25}/>
                </li>
                <li>
                    <FaBell color='#EDF1D6' size={25}/>
                </li>
                <li>
                    <RiMailOpenFill color='#EDF1D6' size={25}/>
                </li>
                <h3>Yonatan Addis</h3>
                <li className='photo-item'>
                    <BsCircle size={65}/>
                    <img src={profile} alt="profile image" />
                </li>
            </ul>
        </div>
    )
}

export default AppBar;