import { Calendar29 } from "../components/CustomComponents/CustomCalendar/customCalendar";
import AppointmentForm from "../components/CustomComponents/CustomForms/AppointmentForm";
import AppointmentMatrix from "../sections/timeSlotMatrix/appointmentMatrix";
export default function ScheduleAppointment() {
    return (
        <div className="dashboardPage flex flex-col w-full h-full gap-2">
            <div className="HeroSection text-left flex flex-col">
                <h1>Schedule your appointment</h1>
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col gap-2 w-1/2">
                    <Calendar29 />
                    <AppointmentMatrix/>
                </div>
            <AppointmentForm/>
            </div>
        </div>
    )
}