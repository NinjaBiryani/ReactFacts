import { createRoot } from "react-dom/client"
import Header from "./Header.jsx"
import MainContent from "./MainContent.jsx"

const root = createRoot(document.getElementById("root")) 

root.render(
    <>
        <Header />
        <MainContent />
    </>
)