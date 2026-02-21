import DashboardHeader from "@/components/DashboardHeader";
import WeekCalendar from "@/components/WeekCalendar";
import DailySchedule from "@/components/DailySchedule";
import AssessmentPanel from "@/components/AssessmentPanel";
import TrimesterStatus from "@/components/TrimesterStatus";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      <DashboardHeader />
      <WeekCalendar />
      <DailySchedule />
      <AssessmentPanel />
      <TrimesterStatus />
      <footer className="text-center py-6 text-xs font-medium text-muted-foreground">
        © 2025 – Todos os direitos reservados
      </footer>
    </div>
  );
};

export default Index;
