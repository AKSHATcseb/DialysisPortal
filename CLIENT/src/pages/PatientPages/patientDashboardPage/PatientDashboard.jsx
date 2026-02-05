import "./PatientDashboard.css";
import DashboardHeader from "../../../components/patientDashboardComponents/dashboardHeader/DashboardHeader";
import QuickActions from "../../../components/patientDashboardComponents/quickActions/QuickActions";
import Sidebar from "../../../components/patientDashboardComponents/sidebar/Sidebar";
import StatsGrid from "../../../components/patientDashboardComponents/statsGrid/StatsGrid";


export default function PatientDashboard(){
  return(
    <div className="dashboard">

      <Sidebar />

      <main className="main">

        <DashboardHeader />

        <StatsGrid />

        <QuickActions />

      </main>

    </div>
  )
}
