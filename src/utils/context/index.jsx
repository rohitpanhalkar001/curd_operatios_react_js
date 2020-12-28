import React from "react";

const Context = React.createContext();

const ContextProvider = props => {
  let baseurl = "http://localhost:3003/";

  const url = {
    getUsers: `${baseurl}users`
  };

  return <Context.Provider value={url}>{props.children}</Context.Provider>;
};

export { ContextProvider, Context };
