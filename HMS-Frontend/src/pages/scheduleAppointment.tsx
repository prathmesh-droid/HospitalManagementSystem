import QuickActionSection from "../sections/quickActions/quickActionSection";
import { CarouselSpacing } from "../sections/quickInfo/quickInfoSection";
import RecentAppointmentsSection from "../sections/recentAppointments/recentAppointmentsSection";
export default function ScheduleAppointment() {
    return (
        <div className="dashboardPage flex flex-col w-full h-full gap-2">
            <div className="HeroSection text-left flex flex-col">
                <h1>Schedule your appointment</h1>
                <span>Welcome back! Here's what your day looks like.</span>
            </div>
            <CarouselSpacing/>
            <div className="grid grid-cols-[3fr_2fr] gap-2">
            <RecentAppointmentsSection></RecentAppointmentsSection>
            <QuickActionSection></QuickActionSection>
            </div>
        </div>
    )
}