import React from "react";
import clsx from "clsx";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import { Close } from "@mui/icons-material";
import { useNotification } from "@/app/_contexts/NotificationContext";

const Notifications: React.FC = () => {
  const { notifications, removeNotification } = useNotification();
  return (
    <>
      {notifications.map(({ type, message, id }) => (
        <Snackbar
          key={id}
          open={true}
          autoHideDuration={3500}
          onClose={() => removeNotification(id)}
        >
          <SnackbarContent
            message={message}
            className={clsx(
              type === "error" && "bg-red-500",
              type === "warning" && "bg-orange-500",
              type === "success" && "bg-green-500"
            )}
            action={<Close onClick={() => removeNotification(id)} />}
          />
        </Snackbar>
      ))}
    </>
  );
};

export default Notifications;
