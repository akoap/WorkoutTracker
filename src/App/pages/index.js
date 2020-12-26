import React from "react";
import { DBProvider } from "../../contexts/DBContext";
import Exercises from "../exercises/exercises"

function Home() {
    return (
        <DBProvider>
            <Exercises />
        </DBProvider>
    );
}

export default Home;