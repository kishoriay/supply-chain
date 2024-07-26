"use client"
 
import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import {
 Table,
 Form,
 Services,
 Profile,
 CompleteShipment,
 GetShipment,
 StartShipment,
 NavBar,
} from "./Components/index";
import { TrackingContext } from "./context/TrackingContext";

const page = () => {
 /*const {
   currentUser,
   createShipment,
   getAllShipment,
   completeShipment,
   getShipment,
   startShipment,
   getShipmentscount,
 } = useContext (TrackingContext); */  //error

 //STATE VARIABLE
 const [createShipmentModel, setCreateShipmentModel] = useState(false);
 const [openProfile,setOpenProfile] = useState(false);
 const [startModal, setStartModal] = useState(false);
 const [completeModal, setCompleteModal] = useState(false);
 const [getModel, setGetModel] = useState(false);
 //DATA STATE VARIABLE
 const [allShipmentsdata, setallShipmentsdata] = useState();
 //const [allShipmentsdata, setAllShipmentsdata] = useState([]);  //cpt

 useEffect (()=> {
   //const getCampaignsData = getAllShipment(); //error

   //return async () => {    //cpt
     const fetchData = async () => {   
     const allData = await getCampaignsData;
    // const allData = await getAllShipment(); //cpt
     //setAllShipmentsdata(allData);   //cpt
  };
  //fetchData();  //cpt
//}, [getAllShipment]);  //cpt
 },[]);

return (
   <>
      <Services
         setOpenProfile={setOpenProfile}
         setCompleteModal={setCompleteModal}
         setGetModel={setGetModel} 
         setStartModal={setStartModal}
       /> 
       <Table
          setCreateShipmentModel={setCreateShipmentModel}
          allShipmentsdata={allShipmentsdata}
       />
       <Form
          createShipmentModel={createShipmentModel}  
          //createShipment={createShipment}  //error
          setCreateShipmentModel={setCreateShipmentModel}
       />
       <Profile
           openProfile={openProfile}
           setOpenProfile={setOpenProfile}
           //currentUser={currentUser}  //error
           //getShipmentscount={getShipmentscount}  //error
       />
        <CompleteShipment
           completeModal={completeModal}
           setCompleteModal={setCompleteModal}
           //completeShipment={completeShipment}  //error
       /> 
        <GetShipment
            getModel={getModel}
            setGetModel={setGetModel}
            //getShipment={getShipment}  //error
       />
        <StartShipment
            startModal={startModal}
            setStartModal={setStartModal}
            //startShipment={startShipment}  //error
       />
       
           
    </>
  );
 };

export default page;
 