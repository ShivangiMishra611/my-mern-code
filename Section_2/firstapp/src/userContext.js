import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const getUser = () => {
    let sessionUser=sessionStorage.getItem('user');

  console.log(sessionUser);
    if(typeof sessionUser == 'object'){
      //setLogged(true)
      return JSON.parse(sessionUser);
    }
  };
  const [loggedin, setLoggedin] = useState(
    typeof sessionStorage.getItem("user")=="object" ? false : true
  );
  const [currentUser, setCurrentUser] = useState(getUser());
  

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, loggedin, setLoggedin }}
    >
      {children}
    </UserContext.Provider>
  );

};