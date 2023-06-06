"use client";

import { UserContextProvider } from "~/hooks/useUser";

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default UserProvider;
