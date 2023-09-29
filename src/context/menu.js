import { createContext, useState } from "react"

export const MenuAtivo = createContext()

export const ContextMenu = ({ children }) => {
    const [menu, setMenu] = useState(false)

    return(
        <MenuAtivo.Provider value={{menu, setMenu}}>
            {children}
        </MenuAtivo.Provider>
    )
}
