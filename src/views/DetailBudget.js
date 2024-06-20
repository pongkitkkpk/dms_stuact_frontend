import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import DetailBudgetStudent from "./DetailBudget3Role/DetailBudgetStudent";
import DetailBudgetAdmin from "./DetailBudget3Role/DetailBudgetAdmin";

function DetailBudget() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const straccount_type =storedUser.account_type;

  // useEffect(()=>{
  //   console.log("straccount_type")
  //   console.log(straccount_type)
  // },straccount_type)


  const [account_type, setAccount_type] = useState(straccount_type)
  const [position, setPosition] = useState(storedUser.position)



  return (
    <>
    {/* admin admin */}
    {account_type == "admin" && <DetailBudgetAdmin />}
    {/* setDB */}
    {account_type == "students" && <DetailBudgetStudent />}
    {position == "AD" && <DetailBudgetStudent />}
    {position == "Stuact" && <DetailBudgetAdmin />}
    {position == "Admin" && <DetailBudgetAdmin />}
    
  </>
  );
  
  
}

export default DetailBudget;








