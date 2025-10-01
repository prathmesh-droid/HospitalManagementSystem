import CustomQuickActionCard from "../../components/CustomComponents/CustomQuickActionCard/customQuickActionCard";
import type { QuickActionType } from "../../types/quickActionType";
import { useNavigate } from "react-router-dom";


const actionList : QuickActionType[] = [
    {
        title : "Add new patient",
        icon : "patient",
        actionLabel : "Add",
        action: (navigate: ReturnType<typeof useNavigate>) => {
            navigate("/scheduleAppointment");
        },
    }, 
    {
        title : "Schedule appointment",
        icon : "schedule",
        actionLabel : "Add",
        action: (navigate: ReturnType<typeof useNavigate>) => {
            navigate("/scheduleAppointment");
        },   
    }
]

export default function QuickActionSection() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-4 p-6 border rounded-3xl shadow-md bg-gray-50 h-fit">
            <h2 className="text-2xl text-left font-bold mb-4">Quick Actions</h2>
            <div>
                {actionList.map((action, index) => (
                    <div key={index} className="mb-4">
                        <CustomQuickActionCard 
                             props={{
                                ...action,
                                action: () => action.action?.(navigate), // pass navigate
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}