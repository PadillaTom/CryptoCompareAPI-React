import React from 'react'

// Context:
import {CoinsContext} from "../Context/CoinsContext"

const Dashboard = () => {
    //Context:
    const data = React.useContext(CoinsContext);
    console.log(data);
    return (
        <div>
            Home Page
        </div>
    )
}

export default Dashboard;
