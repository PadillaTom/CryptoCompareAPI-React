import React, {useEffect, useState} from "react";
import axios from "axios";

// *** MOCK DATA ***
import {Data} from "./mockData/allCoins";

// Root URL:
const rootUrl = "https://min-api.cryptocompare.com/data";


// Creating Context:
const CoinsContext = React.createContext();

const CoinsProvider = ({children}) => {
    // *** MOCK DATA ***
    const [allCoins, setAllCoins] = useState(Data);
    
    return <CoinsContext.Provider value={allCoins}>
        {children}
    </CoinsContext.Provider>
}

export {CoinsProvider, CoinsContext};

