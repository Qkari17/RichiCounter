import { Route, Routes } from "react-router"
import { HanProvider } from "./HanContext"
import { HanForm } from "./HanForm"


export const HanApp = () => {
    return (
        <HanProvider>
            <Routes>
                <Route path="/" element={<HanForm/>}/>
            </Routes>
        </HanProvider>
    )
}