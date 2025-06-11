import { SimpleAppoinmentCard } from '../SimpleAppointmentCard/SimpleAppointmentCard';
const UpcomingSchedule = ({ upcoming }) => (
  <div className="upcoming">
    <h3 className="upcoming-title">The Upcoming Schedule</h3>
    {upcoming.map((section, idx) => (
      <div key={idx} className="upc">
        <h4 className="uptime">{`On ${section.day}`}</h4>
        <div className="sim">
          {section.appointments.map((app, i) => (<SimpleAppoinmentCard key={i} title={app.title} time={app.time} icon={app.icon} />
           ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
