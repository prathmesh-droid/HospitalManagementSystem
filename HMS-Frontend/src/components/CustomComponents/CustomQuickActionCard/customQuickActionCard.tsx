import { Button } from "../../ui/button";
import { Avatar } from "../../ui/avatar";
import { AvatarFallback,AvatarImage } from "../../ui/avatar";
import * as React from "react";
import type { QuickActionType } from "../../../types/quickActionType";

interface QuickActionCardProps {
    props : QuickActionType
}

const customQuickActionCard : React.FC<QuickActionCardProps> = ({props}) => {
  return (<div className="flex flex items-center justify-between gap-4 p-6 border rounded-lg shadow-md">
    <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>P</AvatarFallback>
    </Avatar>
    <label>{props.title}</label>
    <Button variant="default">{props.actionLabel}</Button>
  </div>);
}

export default customQuickActionCard;