import "../styles/section4.css";
import Pic from "/national.jpg"

export default function section4() {
  return (
    <div className='section4-container'>
        <div className="card-1">
            <img src={Pic} alt="" id="pic"/>
        </div>
        <div className="card2"></div>
    </div>
  )
}
