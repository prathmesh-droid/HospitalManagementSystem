export interface Appointment {
    patientName: string;
    appointmentDate?: string; // ISO date string
    doctorName: string;
    status: 'Scheduled' | 'Completed' | 'Cancelled';
}