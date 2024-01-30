import React, { useState } from "react" ; 
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
// import { Flag } from "@material-ui/icons";
import CreatePage from "../../CreatePage/CreatePage";

function PageLayout({getNavState}){
    const [clicked , setClicked] = useState(false) ; 

    function getData(state){
        setClicked(state) ; 
        console.log("state changed from layout " , state) ; 
        getNavState(state) ; 
    }


    return(
    <>
    <div className="bg-black h-screen flex relative">
    <Sidebar getState = {getData}  />
    <CreatePage />
    <Outlet  />
    
    </div>
        
    </>
    );

}

export default PageLayout ; 