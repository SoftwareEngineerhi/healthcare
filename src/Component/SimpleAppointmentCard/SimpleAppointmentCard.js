export function SimpleAppoinmentCard ({ title, time, icon }){ 
   return(
  <div className="simpleapp">
    <span className="simicn">{title}{icon}</span>
    <div className="simtime">{time}</div>
    
  </div>
  )
}
