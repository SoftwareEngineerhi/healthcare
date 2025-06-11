export function HealthStatusCards({healthstatus}){
    return(
        <>
        <div className="healthcard">
  <ul className="hlist">
         {healthstatus.map((health,i)=>(
    <li className="hcard" key={i}>
       <div class="info-content">
    <img src={health.img} alt="Icon" className="info-image" />
    <div class="info-text">
      <h3>{health.name}</h3> 
    </div>
  </div>
        <h2 className="hdate"> Date: {health.dates}</h2>
               
        <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${health.percentage}%`, backgroundColor: `${health.color}` }}
        ></div>
      </div>
     
       </li>
            
         ))}
         </ul>

        </div>
        </>
    )
}