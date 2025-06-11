import './App.css';
import { Sidebar } from './Component/Sidebar/Sidebar';
import { navigationLinks} from './data/navigation';
import { calendarDays } from './data/calender';
import { activity } from './data/activity';
import upcomingAppointments from './data/upcoming';
import { calendarDetails } from './data/calender';
import {Header} from './Component/Header/Header';
import {DashboardMainContent} from './Component/DashboardMainContent/DashboardMainContent';
import './styles/dashboardover.css';
import './styles/anatomy.css';
import './styles/Sidebar.css';
import './styles/dashboardmain.css';
import './styles/head.css';
import './styles/healthcard.css';
import './styles/calender.css';
import './styles/activityfeed.css';
import './styles/simpleapp.css';
import './styles/upcoming.css';
function App() {
  return (
    <>
   <div>
    <Header />
    <div className="layout">
        <Sidebar navigation={navigationLinks} />
       <main className="main-content">
      <DashboardMainContent  calendarDays={calendarDays} calendarDetails={calendarDetails} upcomingAppointments={upcomingAppointments} activity={activity}/>
    </main>
    </div>
  </div>
    </>
  );
}

export default App;
