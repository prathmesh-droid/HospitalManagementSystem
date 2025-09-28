import { Avatar } from "../../ui/avatar";
import { MaleDoctorSVG } from "../../svg";

type CustomAvatarProps = {
    className?: string;
};

export function CustomAvatar({className}: CustomAvatarProps): any {
  return (
    <Avatar className={`w-12 h-12 ${className || ""}`}>
      <MaleDoctorSVG className="w-full h-full rounded-full" />
    </Avatar>
  );
}
