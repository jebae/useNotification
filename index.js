export default (title, options) => {
  const fireNofication = () => {
    if (!("Notification" in window))
      return;
    if (Notification.permission !== "granted") {
      Notification.requestPermission()
        .then(permission => {
          if (permission === "granted")
            new Notification(title, options);
          return ;
        });
    } else {
      new Notification(title, options);
    }
  };
  return fireNofication;
};
