import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '../styles/header.css';

export default function header() {
  return (
    <div>
        <div className="header-one">
        <span className='icon-text'><LocationOnIcon/>Sydney,Australia</span>
        <span className='icon-text'><LocalPhoneIcon/>0468328227</span>
        <span className='icon-text'><AccessTimeIcon/>Mon - Fri: 9:00am - 5:00pm</span>
        <span className='icon-text'><AccessTimeIcon/>Weekends Appointments Only</span>
        </div>
    </div>
  )
}
