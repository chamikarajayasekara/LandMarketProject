import {createContext, useContext, useState} from "react";
import {useRouter} from "next/router";
import {useAlerts} from "../src/app/hook";

const RouteContext = createContext();

const RouterContext = ({children}) => {
    const router = useRouter();
    const [currentRoute, setCurrentRoute] = useState(null);
    const [prevRoute, setPrevRoute]= useState(null);

    useState(()=>{
        console.log(router.pathname)
        console.log(router)
    },[])

    return (
        <RouteContext.Provider value={{currentRoute, prevRoute, setCurrentRoute, setPrevRoute}}>
            {children}
        </RouteContext.Provider>
    );
};
export const RouteContextState = () => {
    return useContext(RouteContext);
};

export default RouterContext;