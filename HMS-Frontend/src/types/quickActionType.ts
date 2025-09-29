export interface QuickActionType {
    title: string;
    description?: string;
    icon?: string; // URL or icon name
    actionLabel: string;
    action? : Function;
}