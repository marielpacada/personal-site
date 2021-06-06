import React from "react";
import HomeCard from "./HomeCard";
import Sidebar from "./Sidebar";

function App() {
    return <div className="flex-row">
        <Sidebar />
        <HomeCard />
    </div>
}

export default App;