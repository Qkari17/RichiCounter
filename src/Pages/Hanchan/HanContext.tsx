import { createContext } from "react"

const RichiContext= createContext
export const HanProvider = ({children}) =>{   
    return(
        <RichiContext.Provider >
            {children}
        </RichiContext.Provider>
    )
}