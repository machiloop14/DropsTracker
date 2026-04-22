let logoutHandler: (() => void) | null = null;
let userHandler: ((user: any) => void) | null = null;

export const registerLogoutHandler = (handler: () => void) => {
  logoutHandler = handler;
};

export const triggerLogout = () => {
  if (logoutHandler) {
    logoutHandler();
  }
};

export const registerUserHandler = (handler: (user: any) => void) => {
  userHandler = handler;
};

export const triggerUserUpdate = (user: any) => {
  if (userHandler) userHandler(user);
};
