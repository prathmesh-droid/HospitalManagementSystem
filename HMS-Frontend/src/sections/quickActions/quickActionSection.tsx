import CustomQuickActionCard from "../../components/CustomComponents/CustomQuickActionCard/customQuickActionCard";
import type { QuickActionType } from "../../types/quickActionType";

const actionList : QuickActionType[] = [
    {
        title : "Add new patient",
        //description : "Register a new patient in the system",
        actionLabel : "Add",
    }, 
    {
        title : "Schedule appointment",
        //description : "Book a new appointment for a patient",
        actionLabel : "Add",
    }
]

export default function QuickActionSection() {
    return (
        <div className="flex flex-col gap-4 p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl text-left font-bold mb-4">Quick Actions</h2>
            {/* <CustomQuickActionCard props={}></CustomQuickActionCard> */}
            {/* <CustomQuickActionCard props={}></CustomQuickActionCard> */}
            <div>
                {actionList.map((action, index) => (
                    <div key={index} className="mb-4">
                        <CustomQuickActionCard props={action}></CustomQuickActionCard>
                    </div>
                ))}
            </div>
        </div>
    );
}