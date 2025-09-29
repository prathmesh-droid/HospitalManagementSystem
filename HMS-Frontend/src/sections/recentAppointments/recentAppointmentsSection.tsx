import CustomAppointmentCard from "../../components/CustomComponents/CustomAppointmentCard/CustomAppointmentCard";
import type { Appointment } from "../../types/recentAppointmen";

const appointmentList : Appointment[] = [
    {
        patientName : "John Doe",
        appointmentDate : "2023-10-01T10:00:00Z",
        doctorName : "Dr. Smith",
        status : "Scheduled"
    },
    {
        patientName : "Jane Smith",
        appointmentDate : "2023-09-25T14:30:00Z",
        doctorName : "Dr. Brown",
        status : "Completed"
    }
]

export default function RecentAppointmentsSection() {
    return (
        <div className="flex flex-col w-200 gap-4 p-6 border rounded-3xl shadow-md bg-gray-50">
            <h2 className="text-2xl text-left font-bold mb-4">Recent Appointments</h2>
            {appointmentList.length === 0 ? (
                <p>No recent appointments available.</p>
            ) : (
                <div>
                {appointmentList.map((appointment, index) => (
                    <div key={index} className="mb-4">
                        <CustomAppointmentCard props={appointment} />
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}