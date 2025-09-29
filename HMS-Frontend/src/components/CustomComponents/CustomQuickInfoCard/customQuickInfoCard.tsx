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

function CustomQuickInfoCard({
  title,
  description,
  content,
  footer,
  action,
}: any) {
  return (
    <Card>
      <div className="flex items-center gap-3 p-4">
        {/* Apply styles to CustomAvatar */}
        <CustomAvatar className="w-12 h-12 border border-gray-200 shadow-sm" />

        {/* Apply styles to CardHeader */}
        <CardHeader className="p-0 flex-1">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
      </div>

      {description && (
        <CardDescription className="px-4 text-sm text-gray-500">
          {description}
        </CardDescription>
      )}
      {/* {action && <CardAction className="px-4">{action}</CardAction>} */}

      <CardContent className="px-4 py-2">
        <p>{content}</p>
      </CardContent>

      {footer && (
        <CardFooter className="px-4 py-2 border-t">{footer}</CardFooter>
      )}
    </Card>
  );
}

export default CustomQuickInfoCard;
