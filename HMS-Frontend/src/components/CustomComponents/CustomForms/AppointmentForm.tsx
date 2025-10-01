import { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
    status: "Scheduled",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Later you can POST this to your API
    // fetch("/api/appointments", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Schedule Appointment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
         <div>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Existing Patient?</label>
        </div>
        {/* Patient Name */}
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
          className="border p-2 rounded"
          required
        />

        {/* Doctor Name */}
        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          placeholder="Doctor Name"
          className="border p-2 rounded"
          required
        />

        {/* Appointment Date */}
        <input
          type="datetime-local"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Schedule
        </button>
      </form>
    </div>
  );
}
