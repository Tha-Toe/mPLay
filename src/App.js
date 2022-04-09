import {  Routes, Route } from "react-router-dom";
import './App.css';
import DefaultPage from './component/defaultListPage/DefaultPage';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import PlayPage from './component/playPage/PlayPage';
import {useEffect,useState} from "react";
import { motion } from 'framer-motion';
import {useInView} from "react-intersection-observer";




export function LogInPage ({AUTH_ENDPOINT,CLIENT_ID,REDIRECT_URI,RESPONSE_TYPE}) {

  const [viewed,setViewed] = useState(false);

  const {ref: lgRef, inView: lgVisible} = useInView();

  useEffect(() => {
    if(lgVisible) {
      setViewed(true);
    }
  },[lgVisible])
    return(
      <div className='lgContainer'>
        <div className={`${'lgH'} ${viewed? "lgHAnimation" : ""} `}><div className='lgMHeader'>MUSIC</div> <div className='lgHeader'>TOUCHING HEAVEN ON FREQUENCY</div></div>
        <div className="lgImgContainer">
          <img src='/loginPic.webp' className={`${'lgImg'} ${viewed? "lgImgAnimation" : ""} `}/>
        </div>
        <div  className={`${'lgButtonContainer'} ${viewed? "lgbAnimation" : ""} `}>
          <motion.button whileHover={{transition:{duration:.2},scale: [1,1.2,1.1]}} className='lgButton'>
            <a className='lgA' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`}>LogIn with spotify</a>         
          </motion.button>
        </div>
        <div className={`${'lgWarn'} ${viewed? "lgbAnimation" : ""} `}>You need to login spotify and you can fly with symphony</div>
        <div className={`${"lgBg1"} ${viewed? "lgAnimation" : ""}`} ref={lgRef}>
          <div className="lgBg2">
            <div className="lgBg3"></div>
          </div>
        </div>
      </div>
    )
}

const code = new URLSearchParams(window.location.search).get("code")

function App() {

  const CLIENT_ID = "2614e21fa9364cc690d8562664d222b3";
  const REDIRECT_URI = "https://musicplay.vercel.app/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "code";



  return (
    <>
        <Routes>
          <Route exact path="/" element={ !code ? 
              <LogInPage AUTH_ENDPOINT={AUTH_ENDPOINT} CLIENT_ID={CLIENT_ID} REDIRECT_URI={REDIRECT_URI} RESPONSE_TYPE={RESPONSE_TYPE} />
               :<Home code = {code}/> }/>
        </Routes>
    </>
  )
}
export default App;
