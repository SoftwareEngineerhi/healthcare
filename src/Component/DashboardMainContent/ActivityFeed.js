const Activity = ({activity}) => {
  return (
    <div className="activity-container">
      <h3>Activity</h3>
      <p className="appointment-count">3 appointment on this week</p>
      <div className="activity-bars">
        {activity.map((item, index) => (
          <div className="activity-bar" key={index}>
            <div
              className="bar bar-blue"
              style={{ height: `${item.values[0]}px` }}
            ></div>
            <div
              className="bar bar-cyan"
              style={{ height: `${item.values[1]}px` }}
            ></div>
            <p className="day-label">{item.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
