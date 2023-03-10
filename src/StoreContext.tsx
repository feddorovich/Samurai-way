import React from "react";

const StoreContext = React.createContext(null)

export const Provider = ({ store,children}: any) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContext