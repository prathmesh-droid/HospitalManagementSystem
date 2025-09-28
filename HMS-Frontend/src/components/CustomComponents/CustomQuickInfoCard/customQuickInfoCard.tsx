import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { CustomAvatar } from "../CustomAvatar/customAvatar";

function CustomQuickInfoCard({ title, description, content, footer, action }: any) {
  return (
    <Card>
      <CustomAvatar></CustomAvatar>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {action && <CardAction>{action}</CardAction>}
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      {footer && (
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
}

export default CustomQuickInfoCard;
