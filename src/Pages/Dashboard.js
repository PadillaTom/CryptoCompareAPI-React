import React, {useContext, useState, useEffect} from 'react'

// Context:
import {CoinsContext} from "../Context/CoinsContext"

const Dashboard = () => {
const {allCoins} = useContext(CoinsContext);

    return (
        <div>
            Home Page
            <h2>Coins</h2>
            <ul> 
           
            </ul>
        </div>
    )
}

export default Dashboard;
