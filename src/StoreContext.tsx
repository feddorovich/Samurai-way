import React from "react";

const StoreContext: any = React.createContext(null)

// export const StoreProvider = ({ store,children}: any) => {
//     return (
//         <StoreContext.Provider value={store}>
//             {children}
//         </StoreContext.Provider>
//     )
// }

export default StoreContext