import React,{useState,useEffect} from 'react';

function FeatureBox(props) {
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
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt={props.title} />
      </div>
      <div className='s-b-text'>
        <h2>{props.title}</h2>
        <a href={versionLink} className='download-btn'>Download</a>
      </div>
    </div>
  );
}

export default FeatureBox;

