import CustomQuickInfoCard from "../components/CustomComponents/CustomQuickInfoCard/customQuickInfoCard";
import QuickActionSection from "../sections/quickActions/quickActionSection";
import { CarouselSpacing } from "../sections/quickInfo/quickInfoSection";
import RecentAppointmentsSection from "../sections/recentAppointments/recentAppointmentsSection";
import { SidebarTrigger } from "../components/ui/sidebar";
export default function Dashboard() {
    return (
        <div>
            <CarouselSpacing/>
            <div className="flex gap-2">
            <RecentAppointmentsSection></RecentAppointmentsSection>
            <QuickActionSection></QuickActionSection>
            </div>
        </div>
    )
}