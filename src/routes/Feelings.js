import react from 'react'
import '.././styles/_app.scss'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Link } from 'react-router-dom'
import angry from '../elements/angry.png'
import anxious from '../elements/anxious.png'
import happy from '../elements/happy.png'
import sad from '../elements/sad.png'

function Feelings() {
  return (
    <main className="main">
      
      <div className="emoGrid">
        <div className="emoGrid-title"><p>WHAT ARE YOU FEELING?</p></div>
        <div className="emoGrid-emoIcon">
            <div><Link to="./details/angry"><img src={angry} alt="angry person"/><p>Angry</p></Link></div>
            <div><Link to="./details/anxious"><img src={anxious} alt="anxious person"/><p>Anxious</p></Link></div>
            <div><Link to="./details/happy"><img src={happy} alt="happy person"/><p>Happy</p></Link></div>
            <div><Link to="./details/sad"><img src={sad} alt="sad person"/><p>Sad</p></Link></div>
        </div>

      </div>
    </main>
  )
}

export default Feelings
