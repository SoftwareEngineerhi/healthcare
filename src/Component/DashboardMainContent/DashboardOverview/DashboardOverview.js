import {AnatomySection} from './AnatomySection';
import { HealthStatusCards } from './HealthStatusCards';
import { healthstatus } from '../../../data/healthstatus';
export function DashboardOverview(){
return(
    <>
    <section className="dashboard">
       <AnatomySection/>
       <HealthStatusCards healthstatus={healthstatus}/>
        </section>
    </>
)
}