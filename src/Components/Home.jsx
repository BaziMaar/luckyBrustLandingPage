import React,{useState,useEffect} from 'react'
import Header from './Header';
import Feature from './Feature';
import About from './About';
import AboutImages from '../Images/Wingo Logo.png'
import AboutImaged from '../Images/Dragon & Tiger Logo.png'
import AboutImage from '../Images/Lucky.png'
import LuckySpin from '../Images/Lucky Spin Logo.png'
import Presentation from './Presentation';
import Contact from './Contact';
import Mines from '../Images/Mines Logo.png'

function Home() {
  const [versionLink, setVersionLink] = useState('');
  useEffect(()=>{
   getVersionLink()
  })

  const getVersionLink = async () => {
    try {
      const response = await fetch('https://ajayluckybrust.today/user/getVersion');
      const data = await response.json();
      if (data && data.latestEntry && data.latestEntry.link) {
        setVersionLink(data.latestEntry.link);
      } 
      else {
        console.error('Invalid response format from the API');
      }
    }
    catch (error) {
      console.error('Error fetching version link:', error);
    }
  };
  return (
    <>
    <Header/>
    <div className="App">
    
    <Feature versionLink={versionLink}/>
    <Presentation/>
    <About image={LuckySpin} title="Lucky Brust Games" button='Download App'/>
    <Contact/>
    
  </div>
  </>
  )
}

export default Home
