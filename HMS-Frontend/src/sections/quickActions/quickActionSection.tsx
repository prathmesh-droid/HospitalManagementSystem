import CustomQuickActionCard from "../../components/CustomComponents/CustomQuickActionCard/customQuickActionCard";
import type { QuickActionType } from "../../types/quickActionType";

const actionList : QuickActionType[] = [
    {
        title : "Add new patient",
        icon : "patient",
        actionLabel : "Add",
        action : () => {console.log("Add new patient clicked")}
    }, 
    {
        title : "Schedule appointment",
        icon : "schedule",
        actionLabel : "Add",
        action : () => {console.log("Schedule appointment clicked")}
    }
]

export default function QuickActionSection() {
    return (
        <div className="flex flex-col gap-4 p-6 border rounded-3xl shadow-md bg-gray-50">
            <h2 className="text-2xl text-left font-bold mb-4">Quick Actions</h2>
            <div>
                {actionList.map((action, index) => (
                    <div key={index} className="mb-4">
                        <CustomQuickActionCard props={action} />
                    </div>
                ))}
            </div>
        </div>
    );
}