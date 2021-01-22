import Context from "./Context";

const Provider = ({ children }) => {
  const admin = {
    email: "admin@mail.com",
    password: "admin",
  };
  const value = { admin };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
