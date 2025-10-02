
import { useState } from "react";

const hospitalData = [
  {
    location: "Apollo Hospital",
    slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
  },
  {
    location: "City Clinic",
    slots: ["9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM"],
  },
];

import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";

import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export default function AppointmentMatrix() {
  const [selectedSlot, setSelectedSlot] = useState<{
    location: string;
    slot: string;
  } | null>(null);

  const hospitalData = [
    {
      location: "Apollo Hospital",
      slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    },
    {
      location: "City Clinic",
      slots: ["9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM"],
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Select Appointment Slot</h2>

      {hospitalData.map((hospital, index) => (
        <Card key={index} className="shadow-md">
          <CardHeader>
            <CardTitle>{hospital.location}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              {hospital.slots.map((slot, idx) => {
                const isSelected =
                  selectedSlot?.location === hospital.location &&
                  selectedSlot?.slot === slot;

                return (
                  <Button
                    key={idx}
                    variant={isSelected ? "outline" : "outline"}
                    className={`w-full`}
                    onClick={() => setSelectedSlot({ location: hospital.location, slot })}
                  >
                    {slot}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      {selectedSlot && (
        <div className="mt-6">
          <Badge variant="outline" className="px-4 py-2 text-lg">
            ✅ You selected {selectedSlot.slot} at {selectedSlot.location}
          </Badge>
        </div>
      )}
    </div>
  );
}
