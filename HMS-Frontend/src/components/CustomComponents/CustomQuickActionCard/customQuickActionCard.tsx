import { Button } from "../../ui/button";
import { Avatar } from "../../ui/avatar";
import { AvatarFallback,AvatarImage } from "../../ui/avatar";
import * as React from "react";
import type { QuickActionType } from "../../../types/quickActionType";
import { CalendarSVG, PatientSVG } from "../../svg";

interface QuickActionCardProps {
    props : QuickActionType
}

const ICON_MAP: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  patient: PatientSVG,
  schedule: CalendarSVG,
};

const customQuickActionCard : React.FC<QuickActionCardProps> = ({props}) => {

  const Icon = props.icon ? ICON_MAP[props.icon] : null;

  return (<div className="flex flex items-center justify-between gap-4 p-2 border rounded-lg shadow-md bg-white">
    <Avatar>
        {Icon ? (
          <Icon className="w-full h-full rounded-full" />
        ) : (
          <AvatarFallback>P</AvatarFallback>
        )}
      </Avatar>
    <label>{props.title}</label>
    <Button variant="default" onClick={() => props.action?.()}>{props.actionLabel}</Button>
  </div>);
}

export default customQuickActionCard;