const CalendarView = ({ days, details }) => (
  <div className="calender">
    <h3 className="caltitle">October 2021</h3>
    <div className="colums">
      {days.map((day, idx) => (
        <div key={idx} className={`days ${day.date===26?'dayactives':''}`} >
          <div>{day.day}</div>
          <div className="date">{day.date}</div>
          {day.times.map((t, i) => (
            <div key={i} className={`dayactive ${t==="09:00" && day.date==26?'timeactive':''}`}>{t}</div>
          ))}
        </div>
      ))}
    </div>
    <div className="details">
      {details.map((item, idx) => (
        <div key={idx} className="detail-div">
          <span className="detail-icon">{item.icon}</span>
          <span className="detail-title">{item.title}</span>
           <span className="detail-time">({item.time})</span> 
           <span className="detail-time">{item.doctor}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CalendarView;
