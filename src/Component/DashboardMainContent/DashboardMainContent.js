import CalenderView from './CalendarView';
import ActivityFeed from './ActivityFeed';
import UpcomingSchedule from './UpcomingSchedule';
import {DashboardOverview} from './DashboardOverview/DashboardOverview';
export function DashboardMainContent({calendarDays,calendarDetails,upcomingAppointments,activity}){
    return(
        <><h1 className="dashboard-heading">Dashboard </h1>
        <div className="dashboard-main">
         <DashboardOverview/>
         <CalenderView days={calendarDays} details={calendarDetails} />
         <ActivityFeed activity={activity}/>
         <UpcomingSchedule upcoming={upcomingAppointments}/>
         </div>
        </>
    )
}