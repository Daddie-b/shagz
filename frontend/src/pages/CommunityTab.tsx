// CommunityTab.tsx
import "./comm.css"
const CommunityTab: React.FC = () => {
  const communities = [
    { name: 'Tech Wizards', image: 'https://th.bing.com/th/id/OIP.hNHJ-zc08apjGguFHiugtQHaEK?w=290&h=180&c=7&r=0&o=5&pid=1.7' },
    { name: 'Nature Lovers', image: 'https://th.bing.com/th/id/OIP.pBYapFQnwyUOr-6TgMUQ_AHaK7?w=122&h=180&c=7&r=0&o=5&pid=1.7' },
   
    { name: 'Art Enthusiasts', image: 'https://th.bing.com/th/id/OIP.d4_HMFJqMbA5xlkvFcjUUAHaKx?w=129&h=187&c=7&r=0&o=5&pid=1.7' },
    { name: 'Bookworms Society', image: 'https://th.bing.com/th/id/OIP.OZywuCy-T-37gYT5RXZw3wHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7' },
    { name: 'Music Makers', image: 'https://th.bing.com/th/id/OIP.oW8Jap3i93AYkUgwdSuRkwHaE8?w=304&h=202&c=7&r=0&o=5&pid=1.7' },
    { name: 'Travel Adventurers', image: 'https://th.bing.com/th/id/OIP.bLxWB88sWK-utyTBNrG_uAHaEc?w=312&h=187&c=7&r=0&o=5&pid=1.7' },
    { name: 'Gaming Guild', image: 'https://th.bing.com/th/id/OIP.QLDkMkwUTOMAdPpcuvn1UQHaFj?w=245&h=184&c=7&r=0&o=5&pid=1.7' },
    { name: 'Film Buffs', image: 'https://th.bing.com/th/id/OIP.z1aGZA76HtP9ZEO4vmU4xgHaEo?w=294&h=183&c=7&r=0&o=5&pid=1.7' }
  ];


  return(
    <>
    {
      communities.map((c, idx)=>(  <>
      
        <div className="card" key={idx}>
        <div className="image">
          <img src={c.image} alt="" />
        </div>
        <div className="txt">
          <p><a>{c.name}</a></p>
        </div>
      </div>
      </>))
    }
      
    </>
  )
}

export default CommunityTab;
