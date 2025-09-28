import { Avatar } from "../../ui/avatar";
import { MaleDoctorSVG } from "../../svg";

export function CustomAvatar() {
  return (
    <Avatar className="w-15 h-15">
      <MaleDoctorSVG className="w-full h-full rounded-full" />
    </Avatar>
  );
}
