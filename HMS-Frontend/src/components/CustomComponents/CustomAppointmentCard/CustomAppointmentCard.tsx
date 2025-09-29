import type { Appointment } from "../../../types/recentAppointmen";

interface AppointmentCard {
    props : Appointment
}

export default function CustomAppointmentCard({props} : AppointmentCard) {
    return (
        <div className="flex items-center justify-between p-2 border rounded-lg shadow-md bg-white">
            <div className="flex flex-col text-left">
                <h3 className="text-lg font-semibold">{props.patientName}</h3>
                <div>
                <span className="text-sm text-gray-600 mb-1">{props.doctorName}</span> ·
                {props.appointmentDate && <span className="text-sm text-gray-600 mb-1"> {new Date(props.appointmentDate).toLocaleTimeString()}</span>}
                </div>
            </div>
            <label className={`text-sm font-medium rounded-lg p-1 ${props.status === 'Scheduled' ? 'text-blue-600 bg-blue-50' : props.status === 'Completed' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                {props.status}
            </label>
        </div>
    );
}