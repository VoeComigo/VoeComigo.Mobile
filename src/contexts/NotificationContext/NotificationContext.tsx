import * as S from "./NotificationContext.styles";
import { createContext, useContext, useState } from "react";
import { Notification } from "../../components";
import { NotificationProps } from "../../components/Notification/Notification";
import uuid from "react-uuid";

//  Provider that wraps all notifications generated:
export const NotificationProvider = ({
  notificationList,
  removeCallback,
}: ProviderProps) => {
  function removeNotificationCallback(id: string) {
    //  DEBUG:
    //console.log(`Notification: ${id}, fullfilled its cycle.`);
    removeCallback && removeCallback(id);
  }

  return (
    <S.Container>
      {notificationList.map((el) => {
        return (
          <Notification
            key={el.id}
            id={el.id}
            type={el.type}
            title={el.title}
            text={el.text}
            removeNotification={removeNotificationCallback}
          />
        );
      })}
    </S.Container>
  );
};

type ProviderProps = {
  notificationList: NotificationProps[];
  removeCallback?: (id: string) => void;
};

//  Max simultaneous notifications at time:
const maxNotifications: number = 5;

// Notification status type:
export type NotificationStatus = "error" | "success" | "info" | "warn";

//  Notification Context:
type NotificationContextType = {
  notificationList?: NotificationProps[];
  createNotification: ({
    type,
    title,
    text,
  }: {
    type: NotificationStatus;
    title?: string;
    text?: string;
  }) => void;
};

//  Actual notification context:
const NotificationContext = createContext<NotificationContextType>({
  notificationList: [],
  createNotification: function () {},
});

//  Notification context hook to export the createNotification to another components:
export const useNotificationContext = () => {
  return useContext(NotificationContext);
};

export const NotificationContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  //    Add a new notification to the end of the list:
  function addNotification({
    type,
    title,
    text,
  }: {
    type: "error" | "success" | "info" | "warn";
    title?: string;
    text?: string;
  }) {
    if (notifications.length < maxNotifications) {
      const aux = [...notifications];
      aux.push({ id: uuid(), type: type, title: title, text: text });
      setNotifications(aux);
    }
  }

  //    Receive a callback from the NotificationProvider and remove the notification from the list:
  function removeCallback(id: string) {
    setNotifications((el) => el.filter((item) => item.id !== id));
  }

  return (
    <NotificationContext.Provider
      value={{
        notificationList: notifications,
        createNotification: addNotification,
      }}
    >
      <NotificationProvider
        notificationList={notifications}
        removeCallback={removeCallback}
      />
      {children}
    </NotificationContext.Provider>
  );
};
