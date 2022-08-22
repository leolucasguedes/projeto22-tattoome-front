import { createContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    return (
        <userContext.Provider value={{ user, setUser}}>{ children }</userContext.Provider>
    );
};

export { userContext, UserProvider };