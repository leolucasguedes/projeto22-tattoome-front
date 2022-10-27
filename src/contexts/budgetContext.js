import { createContext, useState } from "react";

const budgetContext = createContext();

const BudgetProvider = ({ children }) => {
    const [budget, setBudget] = useState({
        name: "",
        email: "",
        number: "",
        description: "",
        size: "",
        userId: "",
      });

    return (
        <budgetContext.Provider value={{ budget, setBudget}}>{ children }</budgetContext.Provider>
    );
};

export { budgetContext, BudgetProvider };