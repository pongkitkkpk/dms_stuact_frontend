import React, { useState, useEffect } from "react";
import { Button, Card, Form, Col, Table } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import Axios from "axios";
function SD_budget({ id_project }) {
  const [originalData, setOriginalData] = useState({});
  const [editData, setEditData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [showdeadline, setShowDeadLine] = useState("");
  const getProjectData = () => {
    Axios.get(
      `http://localhost:3001/student/project/budget/getidproject/${id_project}`
    ).then((response) => {
      const responseData = response.data[0];
      setOriginalData(responseData);
      setEditData(responseData);

      const newListA = Array.from(
        { length: 15 },
        (_, index) => responseData[`listA${index + 1}`] || ""
      );
      setListA(newListA);
      const newListNA = Array.from(
        { length: 15 },
        (_, index) => responseData[`listNA${index + 1}`] || ""
      );
      setListNA(newListNA);
      const newListTA = Array.from(
        { length: 15 },
        (_, index) => responseData[`listTA${index + 1}`] || ""
      );
      setListTA(newListTA);
      const newListTPA = Array.from(
        { length: 15 },
        (_, index) => responseData[`listTPA${index + 1}`] || ""
      );
      setListTPA(newListTPA);
      const newListSA = Array.from(
        { length: 15 },
        (_, index) => responseData[`listSA${index + 1}`] || ""
      );
      setListSA(newListSA);
      setListSSA(responseData.listSSA);

      const newListBT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listBT${index + 1}`] || ""
      );
      setListBT(newListBT);
      const newListNBT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listNBT${index + 1}`] || ""
      );
      setListNBT(newListNBT);
      const newListNNBT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listNNBT${index + 1}`] || ""
      );
      setListNNBT(newListNNBT);
      const newListTBT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listTBT${index + 1}`] || ""
      );
      setListTBT(newListTBT);
      const newListTNBT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listTNBT${index + 1}`] || ""
      );
      setListTNBT(newListTNBT);
      const newListTPBT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listTPBT${index + 1}`] || ""
      );
      setListTPBT(newListTPBT);
      const newListSBT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listSBT${index + 1}`] || ""
      );
      setListSBT(newListSBT);
      setListSSBT(responseData.listSSBT);

      const newListBNT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listBNT${index + 1}`] || ""
      );
      setListBNT(newListBNT);
      const newListNBNT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listNBNT${index + 1}`] || ""
      );
      setListNBNT(newListNBNT);
      const newListNNBNT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listNNBNT${index + 1}`] || ""
      );
      setListNNBNT(newListNNBNT);
      const newListTPBNT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listTPBNT${index + 1}`] || ""
      );
      setListTPBNT(newListTPBNT);
      const newListSBNT = Array.from(
        { length: 15 },
        (_, index) => responseData[`listSBNT${index + 1}`] || ""
      );
      setListSBNT(newListSBNT);
      setListSSBNT(responseData.listSSBNT);

      const newListC = Array.from(
        { length: 15 },
        (_, index) => responseData[`listC${index + 1}`] || ""
      );
      setListC(newListC);
      const newListNC = Array.from(
        { length: 15 },
        (_, index) => responseData[`listNC${index + 1}`] || ""
      );
      setListNC(newListNC);
      const newListNNC = Array.from(
        { length: 15 },
        (_, index) => responseData[`listNNC${index + 1}`] || ""
      );
      setListNNC(newListNNC);
      const newListTPC = Array.from(
        { length: 15 },
        (_, index) => responseData[`listTPC${index + 1}`] || ""
      );
      setListTPC(newListTPC);
      const newListSC = Array.from(
        { length: 15 },
        (_, index) => responseData[`listSC${index + 1}`] || ""
      );
      setListSC(newListSC);
      setListSSC(responseData.listSSC);

      setListETC(responseData.listETC);
      setListSETC(responseData.listSETC);
      
      setTypeACount(responseData.TypeACount);
      setTypeBTCount(responseData.TypeBTCount);
      setTypeBNTCount(responseData.TypeBNTCount);
      setTypeCCount(responseData.TypeCCount);
    });
  };

  useEffect(() => {
    getProjectData();
  }, [id_project]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleBackClick = () => {
    const confirmBack = window.confirm(
      "คุณต้องการยกเลิกกลับไปเป็นข้อมูลเดิมใช่ไหม ข้อมูลที่คุณกรอกไปจะไม่บันทึกลงระบบ"
    );

    if (confirmBack) {
      setIsEditMode(false);
      setEditData(originalData);
      const newListA = Array.from(
        { length: 15 },
        (_, index) => responseData[`listA${index + 1}`] || ""
      );
      setListA(newListA);
    }
  };

  //
  //                          ListA
  //
  const [listA, setListA] = useState(Array.from({ length: 15 }, () => ""));
  const [listNA, setListNA] = useState(Array.from({ length: 15 }, () => ""));
  const [listTA, setListTA] = useState(Array.from({ length: 15 }, () => ""));
  const [listTPA, setListTPA] = useState(Array.from({ length: 15 }, () => ""));
  const [listSA, setListSA] = useState(Array.from({ length: 15 }, () => ""));

  const [listSSA, setListSSA] = useState(1);
  const [TypeACount, setTypeACount] = useState(1);
  useEffect(() => {
    console.log(listA);
  }, [listA]);
  const handleSaveClick = () => {
    Axios.put(
      `http://localhost:3001/student/project/p_budget/create/${id_project}`,
      {
        // A
        listA1: listA[0],
        listA2: listA[1],
        listA3: listA[2],
        listA4: listA[3],
        listA5: listA[4],
        listA6: listA[5],
        listA7: listA[6],
        listA8: listA[7],
        listA9: listA[8],
        listA10: listA[9],
        listA11: listA[10],
        listA12: listA[11],
        listA13: listA[12],
        listA14: listA[13],
        listA15: listA[14],
        // NA
        listNA1: listNA[0],
        listNA2: listNA[1],
        listNA3: listNA[2],
        listNA4: listNA[3],
        listNA5: listNA[4],
        listNA6: listNA[5],
        listNA7: listNA[6],
        listNA8: listNA[7],
        listNA9: listNA[8],
        listNA10: listNA[9],
        listNA11: listNA[10],
        listNA12: listNA[11],
        listNA13: listNA[12],
        listNA14: listNA[13],
        listNA15: listNA[14],
        // TA
        listTA1: listTA[0],
        listTA2: listTA[1],
        listTA3: listTA[2],
        listTA4: listTA[3],
        listTA5: listTA[4],
        listTA6: listTA[5],
        listTA7: listTA[6],
        listTA8: listTA[7],
        listTA9: listTA[8],
        listTA10: listTA[9],
        listTA11: listTA[10],
        listTA12: listTA[11],
        listTA13: listTA[12],
        listTA14: listTA[13],
        listTA15: listTA[14],
        // TPA
        listTPA1: listTPA[0],
        listTPA2: listTPA[1],
        listTPA3: listTPA[2],
        listTPA4: listTPA[3],
        listTPA5: listTPA[4],
        listTPA6: listTPA[5],
        listTPA7: listTPA[6],
        listTPA8: listTPA[7],
        listTPA9: listTPA[8],
        listTPA10: listTPA[9],
        listTPA11: listTPA[10],
        listTPA12: listTPA[11],
        listTPA13: listTPA[12],
        listTPA14: listTPA[13],
        listTPA15: listTPA[14],
        // SA
        listSA1: listSA[0],
        listSA2: listSA[1],
        listSA3: listSA[2],
        listSA4: listSA[3],
        listSA5: listSA[4],
        listSA6: listSA[5],
        listSA7: listSA[6],
        listSA8: listSA[7],
        listSA9: listSA[8],
        listSA10: listSA[9],
        listSA11: listSA[10],
        listSA12: listSA[11],
        listSA13: listSA[12],
        listSA14: listSA[13],
        listSA15: listSA[14],
        listSSA: listSSA,
        // BT
        listBT1: listBT[0],
        listBT2: listBT[1],
        listBT3: listBT[2],
        listBT4: listBT[3],
        listBT5: listBT[4],
        listBT6: listBT[5],
        listBT7: listBT[6],
        listBT8: listBT[7],
        listBT9: listBT[8],
        listBT10: listBT[9],
        listBT11: listBT[10],
        listBT12: listBT[11],
        listBT13: listBT[12],
        listBT14: listBT[13],
        listBT15: listBT[14],
        listBT16: listBT[15],
        listBT17: listBT[16],
        listBT18: listBT[17],
        listBT19: listBT[18],
        listBT20: listBT[19],
        // NBT
        listNBT1: listNBT[0],
        listNBT2: listNBT[1],
        listNBT3: listNBT[2],
        listNBT4: listNBT[3],
        listNBT5: listNBT[4],
        listNBT6: listNBT[5],
        listNBT7: listNBT[6],
        listNBT8: listNBT[7],
        listNBT9: listNBT[8],
        listNBT10: listNBT[9],
        listNBT11: listNBT[10],
        listNBT12: listNBT[11],
        listNBT13: listNBT[12],
        listNBT14: listNBT[13],
        listNBT15: listNBT[14],
        listNBT16: listNBT[15],
        listNBT17: listNBT[16],
        listNBT18: listNBT[17],
        listNBT19: listNBT[18],
        listNBT20: listNBT[19],
        // NNBT
        listNNBT1: listNNBT[0],
        listNNBT2: listNNBT[1],
        listNNBT3: listNNBT[2],
        listNNBT4: listNNBT[3],
        listNNBT5: listNNBT[4],
        listNNBT6: listNNBT[5],
        listNNBT7: listNNBT[6],
        listNNBT8: listNNBT[7],
        listNNBT9: listNNBT[8],
        listNNBT10: listNNBT[9],
        listNNBT11: listNNBT[10],
        listNNBT12: listNNBT[11],
        listNNBT13: listNNBT[12],
        listNNBT14: listNNBT[13],
        listNNBT15: listNNBT[14],
        listNNBT16: listNNBT[15],
        listNNBT17: listNNBT[16],
        listNNBT18: listNNBT[17],
        listNNBT19: listNNBT[18],
        listNNBT20: listNNBT[19],
        // TBT
        listTBT1: listTBT[0],
        listTBT2: listTBT[1],
        listTBT3: listTBT[2],
        listTBT4: listTBT[3],
        listTBT5: listTBT[4],
        listTBT6: listTBT[5],
        listTBT7: listTBT[6],
        listTBT8: listTBT[7],
        listTBT9: listTBT[8],
        listTBT10: listTBT[9],
        listTBT11: listTBT[10],
        listTBT12: listTBT[11],
        listTBT13: listTBT[12],
        listTBT14: listTBT[13],
        listTBT15: listTBT[14],
        listTBT16: listTBT[15],
        listTBT17: listTBT[16],
        listTBT18: listTBT[17],
        listTBT19: listTBT[18],
        listTBT20: listTBT[19],
        // TNBT
        listTNBT1: listTNBT[0],
        listTNBT2: listTNBT[1],
        listTNBT3: listTNBT[2],
        listTNBT4: listTNBT[3],
        listTNBT5: listTNBT[4],
        listTNBT6: listTNBT[5],
        listTNBT7: listTNBT[6],
        listTNBT8: listTNBT[7],
        listTNBT9: listTNBT[8],
        listTNBT10: listTNBT[9],
        listTNBT11: listTNBT[10],
        listTNBT12: listTNBT[11],
        listTNBT13: listTNBT[12],
        listTNBT14: listTNBT[13],
        listTNBT15: listTNBT[14],
        listTNBT16: listTNBT[15],
        listTNBT17: listTNBT[16],
        listTNBT18: listTNBT[17],
        listTNBT19: listTNBT[18],
        listTNBT20: listTNBT[19],
        // TPBT
        listTPBT1: listTPBT[0],
        listTPBT2: listTPBT[1],
        listTPBT3: listTPBT[2],
        listTPBT4: listTPBT[3],
        listTPBT5: listTPBT[4],
        listTPBT6: listTPBT[5],
        listTPBT7: listTPBT[6],
        listTPBT8: listTPBT[7],
        listTPBT9: listTPBT[8],
        listTPBT10: listTPBT[9],
        listTPBT11: listTPBT[10],
        listTPBT12: listTPBT[11],
        listTPBT13: listTPBT[12],
        listTPBT14: listTPBT[13],
        listTPBT15: listTPBT[14],
        listTPBT16: listTPBT[15],
        listTPBT17: listTPBT[16],
        listTPBT18: listTPBT[17],
        listTPBT19: listTPBT[18],
        listTPBT20: listTPBT[19],
        // SBT
        listSBT1: listSBT[0],
        listSBT2: listSBT[1],
        listSBT3: listSBT[2],
        listSBT4: listSBT[3],
        listSBT5: listSBT[4],
        listSBT6: listSBT[5],
        listSBT7: listSBT[6],
        listSBT8: listSBT[7],
        listSBT9: listSBT[8],
        listSBT10: listSBT[9],
        listSBT11: listSBT[10],
        listSBT12: listSBT[11],
        listSBT13: listSBT[12],
        listSBT14: listSBT[13],
        listSBT15: listSBT[14],
        listSBT16: listSBT[15],
        listSBT17: listSBT[16],
        listSBT18: listSBT[17],
        listSBT19: listSBT[18],
        listSBT20: listSBT[19],

        listSSBT: listSSBT,
        // BNT
        listBNT1: listBNT[0],
        listBNT2: listBNT[1],
        listBNT3: listBNT[2],
        listBNT4: listBNT[3],
        listBNT5: listBNT[4],
        listBNT6: listBNT[5],
        listBNT7: listBNT[6],
        listBNT8: listBNT[7],
        listBNT9: listBNT[8],
        listBNT10: listBNT[9],
        // NBNT
        listNBNT1: listNBNT[0],
        listNBNT2: listNBNT[1],
        listNBNT3: listNBNT[2],
        listNBNT4: listNBNT[3],
        listNBNT5: listNBNT[4],
        listNBNT6: listNBNT[5],
        listNBNT7: listNBNT[6],
        listNBNT8: listNBNT[7],
        listNBNT9: listNBNT[8],
        listNBNT10: listNBNT[9],
        // NNBNT
        listNNBNT1: listNNBNT[0],
        listNNBNT2: listNNBNT[1],
        listNNBNT3: listNNBNT[2],
        listNNBNT4: listNNBNT[3],
        listNNBNT5: listNNBNT[4],
        listNNBNT6: listNNBNT[5],
        listNNBNT7: listNNBNT[6],
        listNNBNT8: listNNBNT[7],
        listNNBNT9: listNNBNT[8],
        listNNBNT10: listNNBNT[9],
        // TPBNT
        listTPBNT1: listTPBNT[0],
        listTPBNT2: listTPBNT[1],
        listTPBNT3: listTPBNT[2],
        listTPBNT4: listTPBNT[3],
        listTPBNT5: listTPBNT[4],
        listTPBNT6: listTPBNT[5],
        listTPBNT7: listTPBNT[6],
        listTPBNT8: listTPBNT[7],
        listTPBNT9: listTPBNT[8],
        listTPBNT10: listTPBNT[9],
        // SBNT
        listSBNT1: listSBNT[0],
        listSBNT2: listSBNT[1],
        listSBNT3: listSBNT[2],
        listSBNT4: listSBNT[3],
        listSBNT5: listSBNT[4],
        listSBNT6: listSBNT[5],
        listSBNT7: listSBNT[6],
        listSBNT8: listSBNT[7],
        listSBNT9: listSBNT[8],
        listSBNT10: listSBNT[9],

        listSSBNT: listSSBNT,
        // C
        listC1: listC[0],
        listC2: listC[1],
        listC3: listC[2],
        listC4: listC[3],
        listC5: listC[4],
        listC6: listC[5],
        listC7: listC[6],
        listC8: listC[7],
        listC9: listC[8],
        listC10: listC[9],
        listC11: listC[10],
        listC12: listC[11],
        listC13: listC[12],
        listC14: listC[13],
        listC15: listC[14],
        listC16: listC[15],
        listC17: listC[16],
        listC18: listC[17],
        listC19: listC[18],
        listC20: listC[19],
        // NC
        listNC1: listNC[0],
        listNC2: listNC[1],
        listNC3: listNC[2],
        listNC4: listNC[3],
        listNC5: listNC[4],
        listNC6: listNC[5],
        listNC7: listNC[6],
        listNC8: listNC[7],
        listNC9: listNC[8],
        listNC10: listNC[9],
        listNC11: listNC[10],
        listNC12: listNC[11],
        listNC13: listNC[12],
        listNC14: listNC[13],
        listNC15: listNC[14],
        listNC16: listNC[15],
        listNC17: listNC[16],
        listNC18: listNC[17],
        listNC19: listNC[18],
        listNC20: listNC[19],
        //NNC
        listNNC1: listNNC[0],
        listNNC2: listNNC[1],
        listNNC3: listNNC[2],
        listNNC4: listNNC[3],
        listNNC5: listNNC[4],
        listNNC6: listNNC[5],
        listNNC7: listNNC[6],
        listNNC8: listNNC[7],
        listNNC9: listNNC[8],
        listNNC10: listNNC[9],
        listNNC11: listNNC[10],
        listNNC12: listNNC[11],
        listNNC13: listNNC[12],
        listNNC14: listNNC[13],
        listNNC15: listNNC[14],
        listNNC16: listNNC[15],
        listNNC17: listNNC[16],
        listNNC18: listNNC[17],
        listNNC19: listNNC[18],
        listNNC20: listNNC[19],
        //TPC
        listTPC1: listTPC[0],
        listTPC2: listTPC[1],
        listTPC3: listTPC[2],
        listTPC4: listTPC[3],
        listTPC5: listTPC[4],
        listTPC6: listTPC[5],
        listTPC7: listTPC[6],
        listTPC8: listTPC[7],
        listTPC9: listTPC[8],
        listTPC10: listTPC[9],
        listTPC11: listTPC[10],
        listTPC12: listTPC[11],
        listTPC13: listTPC[12],
        listTPC14: listTPC[13],
        listTPC15: listTPC[14],
        listTPC16: listTPC[15],
        listTPC17: listTPC[16],
        listTPC18: listTPC[17],
        listTPC19: listTPC[18],
        listTPC20: listTPC[19],
        //SC
        listSC1: listSC[0],
        listSC2: listSC[1],
        listSC3: listSC[2],
        listSC4: listSC[3],
        listSC5: listSC[4],
        listSC6: listSC[5],
        listSC7: listSC[6],
        listSC8: listSC[7],
        listSC9: listSC[8],
        listSC10: listSC[9],
        listSC11: listSC[10],
        listSC12: listSC[11],
        listSC13: listSC[12],
        listSC14: listSC[13],
        listSC15: listSC[14],
        listSC16: listSC[15],
        listSC17: listSC[16],
        listSC18: listSC[17],
        listSC19: listSC[18],
        listSC20: listSC[19],

        listSSC: listSSC,
        listETC: listETC,
        listSETC: listSETC,
        listSAll: listSAll,
        thailistSAll: thailistSAll,
        TypeACount: TypeACount,
        TypeBTCount: TypeBTCount,
        TypeBNTCount: TypeBNTCount,
        TypeCCount: TypeCCount,
      }
    )
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  };

  const increaseTypeACount = () => {
    if (+TypeACount < 15) {
      setTypeACount(+TypeACount + 1);
    }
  };

  const decreaseTypeACount = () => {
    if (TypeACount > 1) {
      setTypeACount(+TypeACount - 1);
      updateListA(+TypeACount - 1, "");
      updateListNA(+TypeACount - 1, "");
      updateListTA(+TypeACount - 1, "");
      updateListTPA(+TypeACount - 1, "");
      updateListSA(+TypeACount - 1, "");
    }
  };

  const updateListA = (index, value) => {
    setListA((prevListA) => {
      const newListA = [...prevListA];
      newListA[index] = value;
      return newListA;
    });
  };
  const updateListNA = (index, value) => {
    setListNA((prevListNA) => {
      const newListNA = [...prevListNA];
      newListNA[index] = value;
      updateListSA(index, value, listTA[index], listTPA[index]);
      return newListNA;
    });
  };
  const updateListTA = (index, value) => {
    setListTA((prevListTA) => {
      const newListTA = [...prevListTA];
      newListTA[index] = value;
      updateListSA(index, listNA[index], value, listTPA[index]);
      return newListTA;
    });
  };
  const updateListTPA = (index, value) => {
    setListTPA((prevListTPA) => {
      const newListTPA = [...prevListTPA];
      newListTPA[index] = value;
      updateListSA(index, listNA[index], listTA[index], value);
      return newListTPA;
    });
  };
  const updateListSA = (index, numPeople, numHours, pricePerHour) => {
    const totalPrice =
      parseInt(numPeople) * parseInt(numHours) * parseInt(pricePerHour);
    const formattedTotalPrice = totalPrice.toLocaleString("en-US");
    setListSA((prevListSA) => {
      const newListSA = [...prevListSA];
      newListSA[index] = isNaN(totalPrice)
        ? ""
        : formattedTotalPrice.toString();
      return newListSA;
    });
  };

  const showListA = (index) => {
    return listA[index];
  };
  const showListNA = (index) => {
    return listNA[index];
  };
  const showListTA = (index) => {
    return listTA[index];
  };
  const showListTPA = (index) => {
    return listTPA[index];
  };
  const showListSA = (index) => {
    return listSA[index];
  };

  useEffect(() => {
    const numericValues = listSA
      .map((value) => {
        return parseFloat(value.replace(/,/g, ""));
      })
      .filter((value) => !isNaN(value));
    const sumA = numericValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const formattedSumA = sumA.toLocaleString("en-US");
    setListSSA(formattedSumA);
  }, [listSA]);

  useEffect(() => {});

  //
  //                      ListBT
  //
  const [listBT, setListBT] = useState(Array.from({ length: 20 }, () => ""));
  const [listNBT, setListNBT] = useState(Array.from({ length: 20 }, () => ""));
  const [listNNBT, setListNNBT] = useState(
    Array.from({ length: 20 }, () => "")
  );
  const [listTBT, setListTBT] = useState(Array.from({ length: 20 }, () => ""));
  const [listTNBT, setListTNBT] = useState(
    Array.from({ length: 20 }, () => "")
  );
  const [listTPBT, setListTPBT] = useState(
    Array.from({ length: 20 }, () => "")
  );
  const [listSBT, setListSBT] = useState(Array.from({ length: 20 }, () => ""));

  const [listSSBT, setListSSBT] = useState(1);
  const [TypeBTCount, setTypeBTCount] = useState(1);

  // useEffect(()=>{
  //   console.log(listBT)
  //   console.log(listNBT)
  //   console.log(listNNBT)
  //   console.log(listTBT)
  //   console.log(listTNBT)
  //   console.log(listTPBT)
  //   console.log(listSBT)
  //   console.log(listSSBT)
  // },[listBT,listNBT,listNNBT,listTBT,listTNBT,listTPBT,listSBT,listSSBT])

  const increaseTypeBTCount = () => {
    if (+TypeBTCount < 20) {
      setTypeBTCount(+TypeBTCount + 1);
    }
  };

  const decreaseTypeBTCount = () => {
    if (+TypeBTCount > 1) {
      setTypeBTCount(+TypeBTCount - 1);
      updateListBT(+TypeBTCount - 1, "");
      updateListNBT(+TypeBTCount - 1, "");
      updateListNNBT(+TypeBTCount - 1, "");
      updateListTBT(+TypeBTCount - 1, "");
      updateListTNBT(+TypeBTCount - 1, "");
      updateListTPBT(+TypeBTCount - 1, "");
      updateListSBT(+TypeBTCount - 1, "");
    }
  };

  const updateListBT = (index, value) => {
    setListBT((prevListBT) => {
      const newListBT = [...prevListBT];
      newListBT[index] = value;
      return newListBT;
    });
  };
  const updateListNBT = (index, value) => {
    setListNBT((prevListNBT) => {
      const newListNBT = [...prevListNBT];
      newListNBT[index] = value;
      updateListSBT(index, value, listTBT[index], listTPBT[index]);
      return newListNBT;
    });
  };
  const updateListNNBT = (index, value) => {
    setListNNBT((prevListNNBT) => {
      const newListNNBT = [...prevListNNBT];
      newListNNBT[index] = value;
      return newListNNBT;
    });
  };
  const updateListTBT = (index, value) => {
    setListTBT((prevListTBT) => {
      const newListTBT = [...prevListTBT];
      newListTBT[index] = value;
      updateListSBT(index, listNBT[index], value, listTPBT[index]);
      return newListTBT;
    });
  };
  const updateListTNBT = (index, value) => {
    setListTNBT((prevListTNBT) => {
      const newListTNBT = [...prevListTNBT];
      newListTNBT[index] = value;
      return newListTNBT;
    });
  };
  const updateListTPBT = (index, value) => {
    setListTPBT((prevListTPBT) => {
      const newListTPBT = [...prevListTPBT];
      newListTPBT[index] = value;
      updateListSBT(index, listNBT[index], listTBT[index], value);
      return newListTPBT;
    });
  };
  const updateListSBT = (index, numPeople, numHours, pricePerHour) => {
    const totalPrice =
      parseInt(numPeople) * parseInt(numHours) * parseInt(pricePerHour);
    const formattedTotalPrice = totalPrice.toLocaleString("en-US");
    setListSBT((prevListSBT) => {
      const newListSBT = [...prevListSBT];
      newListSBT[index] = isNaN(totalPrice)
        ? ""
        : formattedTotalPrice.toString();
      return newListSBT;
    });
  };

  const showListBT = (index) => {
    return listBT[index];
  };
  const showListNBT = (index) => {
    return listNBT[index];
  };
  const showListNNBT = (index) => {
    return listNNBT[index];
  };
  const showListTBT = (index) => {
    return listTBT[index];
  };
  const showListTNBT = (index) => {
    return listTNBT[index];
  };
  const showListTPBT = (index) => {
    return listTPBT[index];
  };
  const showListSBT = (index) => {
    return listSBT[index];
  };
  useEffect(() => {
    const numericValues = listSBT
      .map((value) => {
        return parseFloat(value.replace(/,/g, ""));
      })
      .filter((value) => !isNaN(value));
    const sumBT = numericValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const formattedSumBT = sumBT.toLocaleString("en-US");
    setListSSBT(formattedSumBT);
  }, [listSBT]);

  //
  //                        ListBNT
  //
  const [listBNT, setListBNT] = useState(Array.from({ length: 10 }, () => ""));
  const [listNBNT, setListNBNT] = useState(
    Array.from({ length: 10 }, () => "")
  );
  const [listNNBNT, setListNNBNT] = useState(
    Array.from({ length: 10 }, () => "")
  );
  const [listTPBNT, setListTPBNT] = useState(
    Array.from({ length: 10 }, () => "")
  );
  const [listSBNT, setListSBNT] = useState(
    Array.from({ length: 10 }, () => "")
  );

  const [listSSBNT, setListSSBNT] = useState(1);
  const [TypeBNTCount, setTypeBNTCount] = useState(1);

  useEffect(() => {
    console.log(listBNT);
    console.log(listNBNT);
    console.log(listNNBNT);
    console.log(listTPBNT);
    console.log(listSBNT);
    console.log(listSSBNT);
  }, [listBNT, listNBNT, listNNBNT, listTPBNT, listSBNT, listSSBNT]);
  const increaseTypeBNTCount = () => {
    if (+TypeBNTCount < 10) {
      setTypeBNTCount(+TypeBNTCount + 1);
    }
  };

  const decreaseTypeBNTCount = () => {
    if (+TypeBNTCount > 1) {
      setTypeBNTCount(+TypeBNTCount - 1);
      updateListBNT(+TypeBNTCount - 1, "");
      updateListNBNT(+TypeBNTCount - 1, "");
      updateListNNBNT(+TypeBNTCount - 1, "");
      updateListTPBNT(+TypeBNTCount - 1, "");
      updateListSBNT(+TypeBNTCount - 1, "");
    }
  };

  const updateListBNT = (index, value) => {
    setListBNT((prevListBNT) => {
      const newListBNT = [...prevListBNT];
      newListBNT[index] = value;
      return newListBNT;
    });
  };
  const updateListNBNT = (index, value) => {
    setListNBNT((prevListNBNT) => {
      const newListNBNT = [...prevListNBNT];
      newListNBNT[index] = value;
      updateListSBNT(index, value, listTPBNT[index]);
      return newListNBNT;
    });
  };
  const updateListNNBNT = (index, value) => {
    setListNNBNT((prevListNNBNT) => {
      const newListNNBNT = [...prevListNNBNT];
      newListNNBNT[index] = value;
      return newListNNBNT;
    });
  };
  const updateListTPBNT = (index, value) => {
    setListTPBNT((prevListTPBNT) => {
      const newListTPBNT = [...prevListTPBNT];
      newListTPBNT[index] = value;
      updateListSBNT(index, listNBNT[index], value);
      return newListTPBNT;
    });
  };
  const updateListSBNT = (index, numPeople, pricePerHour) => {
    const totalPrice = parseInt(numPeople) * parseInt(pricePerHour);
    const formattedTotalPrice = totalPrice.toLocaleString("en-US");
    setListSBNT((prevListSBNT) => {
      const newListSBNT = [...prevListSBNT];
      newListSBNT[index] = isNaN(totalPrice)
        ? ""
        : formattedTotalPrice.toString();
      return newListSBNT;
    });
  };

  const showListBNT = (index) => {
    return listBNT[index];
  };
  const showListNBNT = (index) => {
    return listNBNT[index];
  };
  const showListNNBNT = (index) => {
    return listNNBNT[index];
  };
  const showListTPBNT = (index) => {
    return listTPBNT[index];
  };
  const showListSBNT = (index) => {
    return listSBNT[index];
  };

  useEffect(() => {
    const numericValues = listSBNT
      .map((value) => {
        return parseFloat(value.replace(/,/g, ""));
      })
      .filter((value) => !isNaN(value));
    const sumBNT = numericValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const formattedSumBNT = sumBNT.toLocaleString("en-US");
    setListSSBNT(formattedSumBNT);
  }, [listSBNT]);

  //
  //                    ListC
  //
  const [listC, setListC] = useState(Array.from({ length: 20 }, () => ""));
  const [listNC, setListNC] = useState(Array.from({ length: 20 }, () => ""));
  const [listNNC, setListNNC] = useState(Array.from({ length: 20 }, () => ""));
  const [listTPC, setListTPC] = useState(Array.from({ length: 20 }, () => ""));
  const [listSC, setListSC] = useState(Array.from({ length: 20 }, () => ""));

  const [listSSC, setListSSC] = useState(1);
  const [TypeCCount, setTypeCCount] = useState(1);

  // useEffect(()=>{
  //   console.log(listC)
  //   console.log(listNC)
  //   console.log(listNNC)
  //   console.log(listTPC)
  //   console.log(listSC)
  //   console.log(listSSC)
  // },[listC,listNC,listNNC,listTPC,listSC,listSSC])
  const increaseTypeCCount = () => {
    if (+TypeCCount < 20) {
      setTypeCCount(+TypeCCount + 1);
    }
  };

  const decreaseTypeCCount = () => {
    if (TypeCCount > 1) {
      setTypeCCount(+TypeCCount - 1);
      updateListC(+TypeCCount - 1, "");
      updateListNC(+TypeCCount - 1, "");
      updateListNNC(+TypeCCount - 1, "");
      updateListTPC(+TypeCCount - 1, "");
      updateListSC(+TypeCCount - 1, "");
    }
  };

  const updateListC = (index, value) => {
    setListC((prevListC) => {
      const newListC = [...prevListC];
      newListC[index] = value;
      return newListC;
    });
  };
  const updateListNC = (index, value) => {
    setListNC((prevListNC) => {
      const newListNC = [...prevListNC];
      newListNC[index] = value;
      updateListSC(index, value, listTPC[index]);
      return newListNC;
    });
  };
  const updateListNNC = (index, value) => {
    setListNNC((prevListNNC) => {
      const newListNNC = [...prevListNNC];
      newListNNC[index] = value;
      return newListNNC;
    });
  };
  const updateListTPC = (index, value) => {
    setListTPC((prevListTPC) => {
      const newListTPC = [...prevListTPC];
      newListTPC[index] = value;
      updateListSC(index, listNC[index], value);
      return newListTPC;
    });
  };
  const updateListSC = (index, numPeople, pricePerHour) => {
    const totalPrice = parseInt(numPeople) * parseInt(pricePerHour);
    const formattedTotalPrice = totalPrice.toLocaleString("en-US");
    setListSC((prevListSC) => {
      const newListSC = [...prevListSC];
      newListSC[index] = isNaN(totalPrice)
        ? ""
        : formattedTotalPrice.toString();
      return newListSC;
    });
  };

  const showListC = (index) => {
    return listC[index];
  };
  const showListNC = (index) => {
    return listNC[index];
  };
  const showListNNC = (index) => {
    return listNNC[index];
  };
  const showListTPC = (index) => {
    return listTPC[index];
  };
  const showListSC = (index) => {
    return listSC[index];
  };
  useEffect(() => {
    const numericValues = listSC
      .map((value) => {
        return parseFloat(value.replace(/,/g, ""));
      })
      .filter((value) => !isNaN(value));
    const sumC = numericValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const formattedSumC = sumC.toLocaleString("en-US");
    setListSSC(formattedSumC);
  }, [listSC]);

  const [listETC, setListETC] = useState(0);
  const [listSETC, setListSETC] = useState(0);

  const [listSAll, setListSAll] = useState(0);
  const [thailistSAll, setThaiListSAll] = useState(0);

  useEffect(() => {
    // Convert string values back to integers and filter out non-numeric values for each list
    const numericValuesSA = listSA
      .map((value) => parseInt(value.replace(/,/g, "")))
      .filter((value) => !isNaN(value));
    const numericValuesSBT = listSBT
      .map((value) => parseInt(value.replace(/,/g, "")))
      .filter((value) => !isNaN(value));
    const numericValuesSBNT = listSBNT
      .map((value) => parseInt(value.replace(/,/g, "")))
      .filter((value) => !isNaN(value));
    const numericValuesSC = listSC
      .map((value) => parseInt(value.replace(/,/g, "")))
      .filter((value) => !isNaN(value));

    // Calculate sum for each list
    const sumSA = numericValuesSA.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const sumSBT = numericValuesSBT.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const sumSBNT = numericValuesSBNT.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const sumSC = numericValuesSC.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    // Calculate total sum
    const totalSum = sumSA + sumSBT + sumSBNT + sumSC + Number(listSETC);

    // Format the total sum with commas
    const formattedTotalSum = totalSum.toLocaleString("en-US");

    // Set listSAll to the formatted total sum
    setListSAll(formattedTotalSum);
  }, [listSA, listSBT, listSBNT, listSC, listSETC]);

  function ThaiNumberToText(num) {
    num = String(num);
    num = num.replace(/๐/gi, "0");
    num = num.replace(/๑/gi, "1");
    num = num.replace(/๒/gi, "2");
    num = num.replace(/๓/gi, "3");
    num = num.replace(/๔/gi, "4");
    num = num.replace(/๕/gi, "5");
    num = num.replace(/๖/gi, "6");
    num = num.replace(/๗/gi, "7");
    num = num.replace(/๘/gi, "8");
    num = num.replace(/๙/gi, "9");
    return ArabicNumberToText(num);
  }

  function ArabicNumberToText(Number) {
    var Number = CheckNumber(Number);
    var NumberArray = new Array(
      "ศูนย์",
      "หนึ่ง",
      "สอง",
      "สาม",
      "สี่",
      "ห้า",
      "หก",
      "เจ็ด",
      "แปด",
      "เก้า",
      "สิบ"
    );
    var DigitArray = new Array(
      "",
      "สิบ",
      "ร้อย",
      "พัน",
      "หมื่น",
      "แสน",
      "ล้าน"
    );
    var BahtText = "";
    if (isNaN(Number)) {
      return "ข้อมูลนำเข้าไม่ถูกต้อง";
    } else {
      if (Number - 0 > 9999999.9999) {
        return "ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";
      } else {
        Number = Number.split(".");
        if (Number[1].length > 0) {
          Number[1] = Number[1].substring(0, 2);
        }
        var NumberLen = Number[0].length - 0;
        for (var i = 0; i < NumberLen; i++) {
          var tmp = Number[0].substring(i, i + 1) - 0;
          if (tmp != 0) {
            if (i == NumberLen - 1 && tmp == 1) {
              BahtText += "เอ็ด";
            } else if (i == NumberLen - 2 && tmp == 2) {
              BahtText += "ยี่";
            } else if (i == NumberLen - 2 && tmp == 1) {
              BahtText += "";
            } else {
              BahtText += NumberArray[tmp];
            }
            BahtText += DigitArray[NumberLen - i - 1];
          }
        }
        BahtText += "บาท";
        if (Number[1] == "0" || Number[1] == "00") {
          BahtText += "ถ้วน";
        } else {
          DecimalLen = Number[1].length - 0;
          for (var i = 0; i < DecimalLen; i++) {
            var tmp = Number[1].substring(i, i + 1) - 0;
            if (tmp != 0) {
              if (i == DecimalLen - 1 && tmp == 1) {
                BahtText += "เอ็ด";
              } else if (i == DecimalLen - 2 && tmp == 2) {
                BahtText += "ยี่";
              } else if (i == DecimalLen - 2 && tmp == 1) {
                BahtText += "";
              } else {
                BahtText += NumberArray[tmp];
              }
              BahtText += DigitArray[DecimalLen - i - 1];
            }
          }
          BahtText += "สตางค์";
        }
        return BahtText;
      }
    }
  }

  function CheckNumber(Number) {
    var decimal = false;
    Number = Number.toString();
    Number = Number.replace(/ |,|บาท|฿/gi, "");
    for (var i = 0; i < Number.length; i++) {
      if (Number[i] == ".") {
        decimal = true;
      }
    }
    if (decimal == false) {
      Number = Number + ".00";
    }
    return Number;
  }
  useEffect(() => {
    setThaiListSAll(ThaiNumberToText(listSAll));
  }, [listSAll]);

  useEffect(() => {}, [listSSA]);

  return (
    <>
      <Col md="9">
        {/* <div style={{ width: "79%", marginLeft: "1%" }}> */}
        <Card>
          {!isEditMode && (
            <Button
              type="submit"
              className="btn-dataupdate"
              style={{ fontSize: "14px", margin: "1%" }}
              variant="primary"
              onClick={handleEditClick}
            >
              Edit
            </Button>
          )}
          <CardHeader
            style={{
              backgroundColor: "#535353",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "auto",
                marginBottom: "10px",
                fontSize: "16px",
                color: "white",
              }}
            >
              งบประมาณโครงการ
            </div>
          </CardHeader>

          <CardBody>
            <Table striped>
              <tbody>
                {/* ค่าตอบแทน */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>หมวดค่าตอบแทน</div>
                  </td>
                  <td className="back-side-td">
                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "30%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            รายการค่าใช้จ่าย
                          </th>
                          <th
                            style={{
                              width: "10%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            จำนวน (คน)
                          </th>
                          <th style={{ width: "10%" }}></th>
                          <th
                            style={{
                              width: "11%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            จำนวน (ชั่วโมง)
                          </th>
                          <th style={{ width: "10%" }}></th>
                          <th
                            style={{
                              width: "16%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            ราคา (ต่อชั่วโมง)(บาท)
                          </th>
                          <th
                            style={{
                              width: "25%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            ราคาสุทธิ (บาท)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: TypeACount }).map((_, index) => (
                          <tr key={index} style={{ backgroundColor: "white" }}>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`รายการที่ ${index + 1}`}
                                value={showListA(index)}
                                onChange={(event) => {
                                  updateListA(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`จำนวน`}
                                value={showListNA(index)}
                                onChange={(event) => {
                                  updateListNA(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <div>คน</div>
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`จำนวน`}
                                value={showListTA(index)}
                                onChange={(event) => {
                                  updateListTA(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <div>ชั่วโมง</div>
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`ราคารายการที่ ${index + 1}`}
                                value={showListTPA(index)}
                                onChange={(event) => {
                                  updateListTPA(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                // value={showListSA(index)}
                                value={listSA[index]}
                                disabled
                              />
                            </td>
                          </tr>
                        ))}
                        <tr
                          style={{
                            backgroundColor: "rgba(255, 139, 19, .3)",
                          }}
                        >
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              รวมเป็นเงิน
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              value={listSSA}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    {isEditMode && (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {TypeACount < 15 && (
                            <Button
                              variant="success"
                              className="ml-5 mb-3 btn-budget-increase border-success"
                              onClick={increaseTypeACount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                เพิ่มรายการค่าตอบแทน
                              </div>
                            </Button>
                          )}
                          {TypeACount > 1 && (
                            <Button
                              variant="danger"
                              className="ml-5 mb-3 btn-budget-decrease border-danger"
                              onClick={decreaseTypeACount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                ลดรายการค่าตอบแทน
                              </div>
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </td>
                </tr>

                {/* ค่าใช้สอย(มีจำนวนเวลา) */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>หมวดค่าใช้สอย</div>
                    <div>(มีจำนวนเวลา)</div>
                  </td>

                  <td className="back-side-td">
                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "30%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            รายการค่าใช้จ่าย
                          </th>
                          <th
                            style={{
                              width: "10%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            จำนวน (หน่วย)
                          </th>
                          <th
                            style={{
                              width: "10%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            หน่วยนับ
                          </th>
                          <th
                            style={{
                              width: "11%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            จำนวน (เวลา)
                          </th>
                          <th
                            style={{
                              width: "10%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            หน่วยนับ
                          </th>
                          <th
                            style={{
                              width: "16%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            ราคา (ต่อหน่วย)(บาท)
                          </th>
                          <th
                            style={{
                              width: "25%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            ราคาสุทธิ (บาท)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: TypeBTCount }).map((_, index) => (
                          <tr key={index} style={{ backgroundColor: "white" }}>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`รายการที่ ${index + 1}`}
                                value={showListBT(index)}
                                onChange={(event) => {
                                  updateListBT(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`จำนวน`}
                                value={showListNBT(index)}
                                onChange={(event) => {
                                  updateListNBT(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`หน่วย`}
                                value={showListNNBT(index)}
                                onChange={(event) => {
                                  updateListNNBT(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`จำนวน`}
                                value={showListTBT(index)}
                                onChange={(event) => {
                                  updateListTBT(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`หน่วย`}
                                value={showListTNBT(index)}
                                onChange={(event) => {
                                  updateListTNBT(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`ราคารายการที่ ${index + 1}`}
                                value={showListTPBT(index)}
                                onChange={(event) => {
                                  updateListTPBT(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                value={listSBT[index]}
                                disabled
                              />
                            </td>
                          </tr>
                        ))}
                        <tr
                          style={{
                            backgroundColor: "rgba(255, 139, 19, .3)",
                          }}
                        >
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              รวมเป็นเงิน
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              value={listSSBT}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    {isEditMode && (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {TypeBTCount < 20 && (
                            <Button
                              variant="success"
                              className="ml-5 mb-3 btn-budget-increase border-success"
                              onClick={increaseTypeBTCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                เพิ่มรายการค่าใช้สอย
                              </div>
                            </Button>
                          )}
                          {TypeBTCount > 1 && (
                            <Button
                              variant="danger"
                              className="ml-5 mb-3 btn-budget-decrease border-danger"
                              onClick={decreaseTypeBTCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                ลดรายการค่าใช้สอย
                              </div>
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </td>
                </tr>

                {/* ค่าใช้สอย(ไม่มีจำนวนเวลา) */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>หมวดค่าใช้สอย</div>
                    <div>(ไม่มีจำนวนเวลา)</div>
                  </td>

                  <td className="back-side-td">
                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "30%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            รายการค่าใช้จ่าย
                          </th>
                          <th
                            style={{
                              width: "10%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            จำนวน (หน่วย)
                          </th>
                          <th
                            style={{
                              width: "10%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            หน่วยนับ
                          </th>
                          <th style={{ width: "11%" }}></th>
                          <th style={{ width: "10%" }}></th>
                          <th
                            style={{
                              width: "16%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            ราคา (ต่อหน่วย)(บาท)
                          </th>
                          <th
                            style={{
                              width: "25%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            ราคาสุทธิ (บาท)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: TypeBNTCount }).map(
                          (_, index) => (
                            <tr
                              key={index}
                              style={{ backgroundColor: "white" }}
                            >
                              <td>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  value={showListBNT(index)}
                                  placeholder={`รายการที่ ${index + 1}`}
                                  onChange={(event) => {
                                    updateListBNT(index, event.target.value);
                                  }}
                                  readOnly={!isEditMode}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder={`จำนวน`}
                                  value={showListNBNT(index)}
                                  onChange={(event) => {
                                    updateListNBNT(index, event.target.value);
                                  }}
                                  readOnly={!isEditMode}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder={`หน่วย`}
                                  value={showListNNBNT(index)}
                                  onChange={(event) => {
                                    updateListNNBNT(index, event.target.value);
                                  }}
                                  readOnly={!isEditMode}
                                />
                              </td>
                              <td></td>
                              <td></td>
                              <td>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder={`ราคารายการที่ ${index + 1}`}
                                  value={showListTPBNT(index)}
                                  onChange={(event) => {
                                    updateListTPBNT(index, event.target.value);
                                  }}
                                  readOnly={!isEditMode}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  value={listSBNT[index]}
                                  disabled
                                />
                              </td>
                            </tr>
                          )
                        )}
                        <tr
                          style={{
                            backgroundColor: "rgba(255, 139, 19, .3)",
                          }}
                        >
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              รวมเป็นเงิน
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              value={listSSBNT}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    {isEditMode && (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {TypeBNTCount < 10 && (
                            <Button
                              variant="success"
                              className="ml-5 mb-3 btn-budget-increase border-success"
                              onClick={increaseTypeBNTCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                เพิ่มรายการค่าใช้สอย
                              </div>
                            </Button>
                          )}
                          {TypeBNTCount > 1 && (
                            <Button
                              variant="danger"
                              className="ml-5 mb-3 ml-5 mb-3 btn-budget-decrease border-danger"
                              onClick={decreaseTypeBNTCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                ลดรายการค่าใช้สอย
                              </div>
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </td>
                </tr>

                {/* ค่าวัสดุ  */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>หมวดค่าวัสดุ</div>
                  </td>

                  <td className="back-side-td">
                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "30%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            รายการค่าใช้จ่าย
                          </th>
                          <th
                            style={{
                              width: "10%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            จำนวน (หน่วย)
                          </th>
                          <th
                            style={{
                              width: "10%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            หน่วยนับ
                          </th>
                          <th style={{ width: "11%" }}></th>
                          <th style={{ width: "10%" }}></th>
                          <th
                            style={{
                              width: "16%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            ราคา (ต่อหน่วย)(บาท)
                          </th>
                          <th
                            style={{
                              width: "25%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            ราคาสุทธิ (บาท)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: TypeCCount }).map((_, index) => (
                          <tr key={index} style={{ backgroundColor: "white" }}>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`รายการที่ ${index + 1}`}
                                value={showListC(index)}
                                onChange={(event) => {
                                  updateListC(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`จำนวน`}
                                value={showListNC(index)}
                                onChange={(event) => {
                                  updateListNC(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`หน่วย`}
                                value={showListNNC(index)}
                                onChange={(event) => {
                                  updateListNNC(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`ราคารายการที่ ${index + 1}`}
                                value={showListTPC(index)}
                                onChange={(event) => {
                                  updateListTPC(index, event.target.value);
                                }}
                                readOnly={!isEditMode}
                              />
                            </td>
                            <td>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                value={listSC[index]}
                                disabled
                              />
                            </td>
                          </tr>
                        ))}
                        <tr
                          style={{
                            backgroundColor: "rgba(255, 139, 19, .3)",
                          }}
                        >
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              รวมเป็นเงิน
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              value={listSSC}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    {isEditMode && (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {TypeCCount < 20 && (
                            <Button
                              variant="success"
                              className="ml-5 mb-3 btn-budget-increase border-success"
                              onClick={increaseTypeCCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                เพิ่มรายการค่าวัสดุ
                              </div>
                            </Button>
                          )}
                          {TypeCCount > 1 && (
                            <Button
                              variant="danger"
                              className="ml-5 mb-3 btn-budget-decrease border-danger"
                              onClick={decreaseTypeCCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                ลดรายการค่าวัสดุ
                              </div>
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </td>
                </tr>

                {/* ค่าอื่นๆ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>หมวดอื่นๆ</div>
                  </td>

                  <td className="back-side-td">
                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "30%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            รายการค่าใช้จ่าย
                          </th>
                          <th style={{ width: "10%" }}></th>
                          <th style={{ width: "10%" }}></th>
                          <th style={{ width: "11%" }}></th>
                          <th style={{ width: "10%" }}></th>
                          <th style={{ width: "16%" }}></th>
                          <th
                            style={{
                              width: "25%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            ราคาสุทธิ (บาท)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: "white" }}>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              placeholder={`รายการอื่นๆ`}
                              value={listETC}
                              onChange={(event) => {
                                setListETC(event.target.value);
                              }}
                              readOnly={!isEditMode}
                            />
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              placeholder={`ราคา`}
                              value={listSETC}
                              onChange={(event) => {
                                setListSETC(event.target.value);
                              }}
                              readOnly={!isEditMode}
                            />
                          </td>
                        </tr>
                        <tr
                          style={{
                            backgroundColor: "rgba(255, 139, 19, .3)",
                          }}
                        >
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              รวมเป็นเงิน
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              value={listSETC}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>

                {/* ยอดงบประมาณรวม */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>งบประมาณสุทธิ</div>
                  </td>

                  <td className="back-side-td">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          color: "#FF8B13",
                          fontWeight: "bold",
                          width: "40%",
                          textAlignLast: "right",
                        }}
                      >
                        รวมเป็นเงิน
                      </div>
                      <Form.Control
                        style={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          width: "20%",
                        }} // Adjust margin as needed
                        size="sm"
                        type="text"
                        value={listSAll}
                        disabled
                      />
                      <div
                        style={{
                          color: "#FF8B13",
                          fontWeight: "bold",
                          width: "40%",
                        }}
                      >
                        บาท
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>

          <CardFooter
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {isEditMode ? (
              <>
                <Button
                  variant="success"
                  type="submit"
                  className="ml-5 mb-3 btn-budget-increase"
                  style={{ fontSize: "14px" }}
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
                <Button
                  type="submit"
                  className="ml-5 mb-3 btn-budget-decrease"
                  style={{ fontSize: "14px" }}
                  variant="danger"
                  onClick={handleBackClick}
                >
                  Back
                </Button>
              </>
            ) : null}
          </CardFooter>
        </Card>
      </Col>
    </>
  );
}

export default SD_budget;
