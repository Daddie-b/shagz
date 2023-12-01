// UpdatesTab

import React from 'react';

/*const UpdatesTab: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Updates</h1>
      {/* Video/Visual updates display area */
 /*     <div className="mb-4"> {/* Add your video/visual updates display component here *//*}/*</div>
    </div>
  );
};// CommunityTab.tsx
*/
import "./comm.css"
const updatesTab: React.FC = () => {
  const communities = [
    { name: 'David', image: 'https://th.bing.com/th/id/OIP.hNHJ-zc08apjGguFHiugtQHaEK?w=290&h=180&c=7&r=0&o=5&pid=1.7' },
    { name: 'Mike', image: 'https://th.bing.com/th/id/OIP.pBYapFQnwyUOr-6TgMUQ_AHaK7?w=122&h=180&c=7&r=0&o=5&pid=1.7' },
   
    { name: 'Bill', image: 'https://th.bing.com/th/id/OIP.d4_HMFJqMbA5xlkvFcjUUAHaKx?w=129&h=187&c=7&r=0&o=5&pid=1.7' },
    { name: 'Geoginah', image: 'https://th.bing.com/th/id/OIP.OZywuCy-T-37gYT5RXZw3wHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7' },
    { name: 'Brian', image: 'https://th.bing.com/th/id/OIP.oW8Jap3i93AYkUgwdSuRkwHaE8?w=304&h=202&c=7&r=0&o=5&pid=1.7' },
    { name: 'Mary', image: 'https://th.bing.com/th/id/OIP.bLxWB88sWK-utyTBNrG_uAHaEc?w=312&h=187&c=7&r=0&o=5&pid=1.7' },
    { name: 'Eugine', image: 'https://th.bing.com/th/id/OIP.QLDkMkwUTOMAdPpcuvn1UQHaFj?w=245&h=184&c=7&r=0&o=5&pid=1.7' },
    { name: 'Lucy', image: 'https://th.bing.com/th/id/OIP.z1aGZA76HtP9ZEO4vmU4xgHaEo?w=294&h=183&c=7&r=0&o=5&pid=1.7' }
  ];


  return(
    <>
    {
      communities.map((c, idx)=>(  
        <div className="status" key={idx}>
        <div className="content">
          <h3>{c.name}</h3>
          <p>Just posted a new status. Check it out!</p>
        </div>
        <div className="image">
          <img src={c.image} alt="" />
        </div>
      </div>
    
    ))} 
    </>
  )
}

export default updatesTab
