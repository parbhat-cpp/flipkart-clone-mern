import { createContext, useState } from "react";

export const DataContext = createContext('default');

const DataProvider = ({ children }) => {

    const [acc, setAcc] = useState('');

    return (
        <DataContext.Provider
            value={[
                acc,
                setAcc
            ]}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;