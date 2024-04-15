import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// react-bootstrap components
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Nav,
  Table,
} from "react-bootstrap";
import Axios from "axios";

function SD_timestep({ id_project }) {

  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const [projectList, setProjectList] = useState([]);
  const [personNames, setPersonNames] = useState([]);
  const getProjectdeatailData = () => {
    Axios.get(
      `http://localhost:3001/student/project/getidproject/${id_project}`
    ).then((response) => {
      setProjectData(response.data);

      setPersonNames([
        response.data[0].person1_name,
        response.data[0].person2_name,
        response.data[0].person3_name,
      ]);

      const startPrepare = new Date(response.data[0].start_prepare);
      const endPrepare = new Date(response.data[0].end_prepare);
      const startEvent = new Date(response.data[0].start_event);
      const endEvent = new Date(response.data[0].end_event);
      const deadline = new Date(response.data[0].deadline);
    });
  };

  useEffect(() => {
    getProjectdeatailData();
  }, []);
  const [table1Id, setTable1Id] = useState("1");
  const [topic_table1, setTable1Topic] = useState(null);
  const [start_duration_table1, setStartDurationTable1] = useState("");
  const [end_duration_table1, setEndDurationTable1] = useState("");
  const [responsible_table1, setResponsibleTable1] = useState([]);
  const handleresponsibleTable1Change = (event) => {
    const name = event.target.value;
    if (responsible_table1.includes(name)) {
      setResponsibleTable1(
        responsible_table1.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable1([...responsible_table1, name]);
    }
  };

  const [table2Id, setTable2Id] = useState("2");
  const [topic_table2, setTable2Topic] = useState(null);
  const [start_duration_table2, setStartDurationTable2] = useState(null);
  const [end_duration_table2, setEndDurationTable2] = useState(null);
  const [responsible_table2, setResponsibleTable2] = useState("");
  const handleresponsibleTable2Change = (event) => {
    const name = event.target.value;
    if (responsible_table2.includes(name)) {
      setResponsibleTable2(
        responsible_table2.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable2([...responsible_table2, name]);
    }
  };

  const [table3Id, setTable3Id] = useState("3");
  const [topic_table3, setTable3Topic] = useState(null);
  const [start_duration_table3, setStartDurationTable3] = useState(null);
  const [end_duration_table3, setEndDurationTable3] = useState(null);
  const [responsible_table3, setResponsibleTable3] = useState("");
  const handleresponsibleTable3Change = (event) => {
    const name = event.target.value;
    if (responsible_table3.includes(name)) {
      setResponsibleTable3(
        responsible_table3.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable3([...responsible_table3, name]);
    }
  };

  const [table4Id, setTable4Id] = useState("4");
  const [topic_table4, setTable4Topic] = useState(null);
  const [start_duration_table4, setStartDurationTable4] = useState(null);
  const [end_duration_table4, setEndDurationTable4] = useState(null);
  const [responsible_table4, setResponsibleTable4] = useState("");
  const handleresponsibleTable4Change = (event) => {
    const name = event.target.value;
    if (responsible_table4.includes(name)) {
      setResponsibleTable4(
        responsible_table4.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable4([...responsible_table4, name]);
    }
  };

  const [table5Id, setTable5Id] = useState("5");
  const [topic_table5, setTable5Topic] = useState(null);
  const [start_duration_table5, setStartDurationTable5] = useState(null);
  const [end_duration_table5, setEndDurationTable5] = useState(null);
  const [responsible_table5, setResponsibleTable5] = useState("");
  const handleresponsibleTable5Change = (event) => {
    const name = event.target.value;
    if (responsible_table5.includes(name)) {
      setResponsibleTable5(
        responsible_table5.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable5([...responsible_table5, name]);
    }
  };

  const [table6Id, setTable6Id] = useState("6");
  const [topic_table6, setTable6Topic] = useState(null);
  const [start_duration_table6, setStartDurationTable6] = useState(null);
  const [end_duration_table6, setEndDurationTable6] = useState(null);
  const [responsible_table6, setResponsibleTable6] = useState("");
  const handleresponsibleTable6Change = (event) => {
    const name = event.target.value;
    if (responsible_table6.includes(name)) {
      setResponsibleTable6(
        responsible_table6.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable6([...responsible_table6, name]);
    }
  };

  const [table7Id, setTable7Id] = useState("7");
  const [topic_table7, setTable7Topic] = useState(null);
  const [start_duration_table7, setStartDurationTable7] = useState(null);
  const [end_duration_table7, setEndDurationTable7] = useState(null);
  const [responsible_table7, setResponsibleTable7] = useState("");
  const handleresponsibleTable7Change = (event) => {
    const name = event.target.value;
    if (responsible_table7.includes(name)) {
      setResponsibleTable7(
        responsible_table7.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable7([...responsible_table7, name]);
    }
  };

  const [table8Id, setTable8Id] = useState("8");
  const [topic_table8, setTable8Topic] = useState(null);
  const [start_duration_table8, setStartDurationTable8] = useState(null);
  const [end_duration_table8, setEndDurationTable8] = useState(null);
  const [responsible_table8, setResponsibleTable8] = useState("");
  const handleresponsibleTable8Change = (event) => {
    const name = event.target.value;
    if (responsible_table8.includes(name)) {
      setResponsibleTable8(
        responsible_table8.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable8([...responsible_table8, name]);
    }
  };

  const [table9Id, setTable9Id] = useState("9");
  const [topic_table9, setTable9Topic] = useState(null);
  const [start_duration_table9, setStartDurationTable9] = useState(null);
  const [end_duration_table9, setEndDurationTable9] = useState(null);
  const [responsible_table9, setResponsibleTable9] = useState("");
  const handleresponsibleTable9Change = (event) => {
    const name = event.target.value;
    if (responsible_table9.includes(name)) {
      setResponsibleTable9(
        responsible_table9.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable9([...responsible_table9, name]);
    }
  };

  const [table10Id, setTable10Id] = useState("10");
  const [topic_table10, setTable10Topic] = useState(null);
  const [start_duration_table10, setStartDurationTable10] = useState(null);
  const [end_duration_table10, setEndDurationTable10] = useState(null);
  const [responsible_table10, setResponsibleTable10] = useState("");
  const handleresponsibleTable10Change = (event) => {
    const name = event.target.value;
    if (responsible_table10.includes(name)) {
      setResponsibleTable10(
        responsible_table10.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable10([...responsible_table10, name]);
    }
  };

  const [table11Id, setTable11Id] = useState("11");
  const [topic_table11, setTable11Topic] = useState(null);
  const [start_duration_table11, setStartDurationTable11] = useState(null);
  const [end_duration_table11, setEndDurationTable11] = useState(null);
  const [responsible_table11, setResponsibleTable11] = useState("");
  const handleresponsibleTable11Change = (event) => {
    const name = event.target.value;
    if (responsible_table11.includes(name)) {
      setResponsibleTable11(
        responsible_table11.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable11([...responsible_table11, name]);
    }
  };

  const [table12Id, setTable12Id] = useState("12");
  const [topic_table12, setTable12Topic] = useState(null);
  const [start_duration_table12, setStartDurationTable12] = useState(null);
  const [end_duration_table12, setEndDurationTable12] = useState(null);
  const [responsible_table12, setResponsibleTable12] = useState("");
  const handleresponsibleTable12Change = (event) => {
    const name = event.target.value;
    if (responsible_table12.includes(name)) {
      setResponsibleTable12(
        responsible_table12.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable12([...responsible_table12, name]);
    }
  };

  const [table13Id, setTable13Id] = useState("13");
  const [topic_table13, setTable13Topic] = useState(null);
  const [start_duration_table13, setStartDurationTable13] = useState(null);
  const [end_duration_table13, setEndDurationTable13] = useState(null);
  const [responsible_table13, setResponsibleTable13] = useState("");
  const handleresponsibleTable13Change = (event) => {
    const name = event.target.value;
    if (responsible_table13.includes(name)) {
      setResponsibleTable13(
        responsible_table13.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable13([...responsible_table13, name]);
    }
  };

  const [table14Id, setTable14Id] = useState("14");
  const [topic_table14, setTable14Topic] = useState(null);
  const [start_duration_table14, setStartDurationTable14] = useState(null);
  const [end_duration_table14, setEndDurationTable14] = useState(null);
  const [responsible_table14, setResponsibleTable14] = useState("");
  const handleresponsibleTable14Change = (event) => {
    const name = event.target.value;
    if (responsible_table14.includes(name)) {
      setResponsibleTable14(
        responsible_table14.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable14([...responsible_table14, name]);
    }
  };

  const [table15Id, setTable15Id] = useState("15");
  const [topic_table15, setTable15Topic] = useState(null);
  const [start_duration_table15, setStartDurationTable15] = useState(null);
  const [end_duration_table15, setEndDurationTable15] = useState(null);
  const [responsible_table15, setResponsibleTable15] = useState("");
  const handleresponsibleTable15Change = (event) => {
    const name = event.target.value;
    if (responsible_table15.includes(name)) {
      setResponsibleTable15(
        responsible_table15.filter((person) => person !== name)
      );
    } else {
      setResponsibleTable15([...responsible_table15, name]);
    }
  };
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch, setYearlyCountSketch] = useState("");

  const [originalData, setOriginalData] = useState({});
  const [editData, setEditData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const getProjectData = () => {
    Axios.get(
      `http://localhost:3001/student/project/timestep/getidproject/${id_project}`
    ).then((response) => {
      setOriginalData(response.data[0]);
      setEditData(response.data[0]);
      setCodeclub(response.data[0].codeclub);
      setYearlyCountSketch(response.data[0].responsible_agency);
      setTable1Topic(response.data[0].topic_table1);
      setTable2Topic(response.data[0].topic_table2);
      setTable3Topic(response.data[0].topic_table3);
      setTable4Topic(response.data[0].topic_table4);
      setTable5Topic(response.data[0].topic_table5);
      setTable6Topic(response.data[0].topic_table6);
      setTable7Topic(response.data[0].topic_table7);
      setTable8Topic(response.data[0].topic_table8);
      setTable9Topic(response.data[0].topic_table9);
      setTable10Topic(response.data[0].topic_table10);
      setTable11Topic(response.data[0].topic_table11);
      setTable12Topic(response.data[0].topic_table12);
      setTable13Topic(response.data[0].topic_table13);
      setTable14Topic(response.data[0].topic_table14);
      setTable15Topic(response.data[0].topic_table15);

      setStartDurationTable1(response.data[0].start_duration_table1);
      setStartDurationTable2(response.data[0].start_duration_table2);
      setStartDurationTable3(response.data[0].start_duration_table3);
      setStartDurationTable4(response.data[0].start_duration_table4);
      setStartDurationTable5(response.data[0].start_duration_table5);
      setStartDurationTable6(response.data[0].start_duration_table6);
      setStartDurationTable7(response.data[0].start_duration_table7);
      setStartDurationTable8(response.data[0].start_duration_table8);
      setStartDurationTable9(response.data[0].start_duration_table9);
      setStartDurationTable10(response.data[0].start_duration_table10);
      setStartDurationTable11(response.data[0].start_duration_table11);
      setStartDurationTable12(response.data[0].start_duration_table12);
      setStartDurationTable13(response.data[0].start_duration_table13);
      setStartDurationTable14(response.data[0].start_duration_table14);
      setStartDurationTable15(response.data[0].start_duration_table15);

      setEndDurationTable1(response.data[0].end_duration_table1);
      setEndDurationTable2(response.data[0].end_duration_table2);
      setEndDurationTable3(response.data[0].end_duration_table3);
      setEndDurationTable4(response.data[0].end_duration_table4);
      setEndDurationTable5(response.data[0].end_duration_table5);
      setEndDurationTable6(response.data[0].end_duration_table6);
      setEndDurationTable7(response.data[0].end_duration_table7);
      setEndDurationTable8(response.data[0].end_duration_table8);
      setEndDurationTable9(response.data[0].end_duration_table9);
      setEndDurationTable10(response.data[0].end_duration_table10);
      setEndDurationTable11(response.data[0].end_duration_table11);
      setEndDurationTable12(response.data[0].end_duration_table12);
      setEndDurationTable13(response.data[0].end_duration_table13);
      setEndDurationTable14(response.data[0].end_duration_table14);
      setEndDurationTable15(response.data[0].end_duration_table15);
      setTopictableCount(response.data[0].TopictableCount);

      const namesArray1 = response.data[0].responsibleTable1str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable1(namesArray1);
      const namesArray2 = response.data[0].responsibleTable2str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable2(namesArray2);
      const namesArray3 = response.data[0].responsibleTable3str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable3(namesArray3);
      const namesArray4 = response.data[0].responsibleTable4str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable4(namesArray4);
      const namesArray5 = response.data[0].responsibleTable5str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable5(namesArray5);
      const namesArray6 = response.data[0].responsibleTable6str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable6(namesArray6);
      const namesArray7 = response.data[0].responsibleTable7str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable7(namesArray7);
      const namesArray8 = response.data[0].responsibleTable8str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable8(namesArray8);
      const namesArray9 = response.data[0].responsibleTable9str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable9(namesArray9);
      const namesArray10 = response.data[0].responsibleTable10str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable10(namesArray10);
      const namesArray11 = response.data[0].responsibleTable11str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable11(namesArray11);
      const namesArray12 = response.data[0].responsibleTable12str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable12(namesArray12);
      const namesArray13 = response.data[0].responsibleTable13str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable13(namesArray13);
      const namesArray14 = response.data[0].responsibleTable14str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable14(namesArray14);
      const namesArray15 = response.data[0].responsibleTable15str
        .split(",")
        .map((name) => name.trim());
      setResponsibleTable15(namesArray15);
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
    }
  };

  const formatThaiDate = (dateString) => {
    if (dateString != null) {
      const formattedDate = new Date(dateString);
      const thaiMonths = [
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
      ];
      const day = formattedDate.getDate();
      const month = thaiMonths[formattedDate.getMonth()];
      const year = (formattedDate.getFullYear() + 543) % 100; // Get last 2 digits of the year

      return `${day} ${month} ${year}`;
    }
    return null;
  };
  useEffect(() => {
    setThaiStartDurationTable1(formatThaiDate(start_duration_table1));
    setThaiStartDurationTable2(formatThaiDate(start_duration_table2));
    setThaiStartDurationTable3(formatThaiDate(start_duration_table3));
    setThaiStartDurationTable4(formatThaiDate(start_duration_table4));
    setThaiStartDurationTable5(formatThaiDate(start_duration_table5));
    setThaiStartDurationTable6(formatThaiDate(start_duration_table6));
    setThaiStartDurationTable7(formatThaiDate(start_duration_table7));
    setThaiStartDurationTable8(formatThaiDate(start_duration_table8));
    setThaiStartDurationTable9(formatThaiDate(start_duration_table9));
    setThaiStartDurationTable10(formatThaiDate(start_duration_table10));
    setThaiStartDurationTable11(formatThaiDate(start_duration_table11));
    setThaiStartDurationTable12(formatThaiDate(start_duration_table12));
    setThaiStartDurationTable13(formatThaiDate(start_duration_table13));
    setThaiStartDurationTable14(formatThaiDate(start_duration_table14));
    setThaiStartDurationTable15(formatThaiDate(start_duration_table15));

    setThaiEndDurationTable1(formatThaiDate(end_duration_table1));
    setThaiEndDurationTable2(formatThaiDate(end_duration_table2));
    setThaiEndDurationTable3(formatThaiDate(end_duration_table3));
    setThaiEndDurationTable4(formatThaiDate(end_duration_table4));
    setThaiEndDurationTable5(formatThaiDate(end_duration_table5));
    setThaiEndDurationTable6(formatThaiDate(end_duration_table6));
    setThaiEndDurationTable7(formatThaiDate(end_duration_table7));
    setThaiEndDurationTable8(formatThaiDate(end_duration_table8));
    setThaiEndDurationTable9(formatThaiDate(end_duration_table9));
    setThaiEndDurationTable10(formatThaiDate(end_duration_table10));
    setThaiEndDurationTable11(formatThaiDate(end_duration_table11));
    setThaiEndDurationTable12(formatThaiDate(end_duration_table12));
    setThaiEndDurationTable13(formatThaiDate(end_duration_table13));
    setThaiEndDurationTable14(formatThaiDate(end_duration_table14));
    setThaiEndDurationTable15(formatThaiDate(end_duration_table15));
  }, [
    start_duration_table1,
    end_duration_table1,
    start_duration_table2,
    end_duration_table2,
    start_duration_table3,
    end_duration_table3,
    start_duration_table4,
    end_duration_table4,
    start_duration_table5,
    end_duration_table5,
    start_duration_table6,
    end_duration_table6,
    start_duration_table7,
    end_duration_table7,
    start_duration_table8,
    end_duration_table8,
    start_duration_table9,
    end_duration_table9,
    start_duration_table10,
    end_duration_table10,
    start_duration_table11,
    end_duration_table11,
    start_duration_table12,
    end_duration_table12,
    start_duration_table13,
    end_duration_table13,
    start_duration_table14,
    end_duration_table14,
    start_duration_table15,
    end_duration_table15,
  ]);
  const getYearFromDate = (dateString) => {
    return dateString ? new Date(dateString).getFullYear() : null;
  };

  useEffect(() => {
    const year1 = new Date(start_duration_table1).getFullYear();
    const endDurationTables = [
      end_duration_table15,
      end_duration_table14,
      end_duration_table13,
      end_duration_table12,
      end_duration_table11,
      end_duration_table10,
      end_duration_table9,
      end_duration_table8,
      end_duration_table7,
      end_duration_table6,
      end_duration_table5,
      end_duration_table4,
      end_duration_table3,
      end_duration_table2,
      end_duration_table1,
    ];

    let year = 0;

    // Iterate over end_duration_tables starting from the last one
    for (const end_duration_table of endDurationTables) {
      if (end_duration_table !== null) {
        year = getYearFromDate(end_duration_table);
        break; // Exit loop if a non-null value is found
      }
    }

    if (year !== null) {
      const year1Thai = year1 + 543; // Convert to Thai year
      const yearThai = year + 543; // Convert to Thai year
      if (year1 == year) {
        setIs_inyear(true);
        setStart_inyear(year1Thai);
      } else {
        setIs_inyear(false);
        setStart_inyear(year1Thai);
        setEnd_inyear(yearThai);
      }
    } else {
      console.log("All end_duration_table values are null.");
    }
  }, [
    start_duration_table1,
    end_duration_table1,
    end_duration_table2,
    end_duration_table3,
    end_duration_table4,
    end_duration_table5,
    end_duration_table6,
    end_duration_table7,
    end_duration_table8,
    end_duration_table9,
    end_duration_table10,
    end_duration_table11,
    end_duration_table12,
    end_duration_table13,
    end_duration_table14,
    end_duration_table15,
  ]);

  const [is_inyear, setIs_inyear] = useState(false);
  const [start_inyear, setStart_inyear] = useState("");
  const [end_inyear, setEnd_inyear] = useState("");
  const [thaistart_duration_table1, setThaiStartDurationTable1] =
    useState(null);
  const [thaistart_duration_table2, setThaiStartDurationTable2] =
    useState(null);
  const [thaistart_duration_table3, setThaiStartDurationTable3] =
    useState(null);
  const [thaistart_duration_table4, setThaiStartDurationTable4] =
    useState(null);
  const [thaistart_duration_table5, setThaiStartDurationTable5] =
    useState(null);

  const [thaiend_duration_table1, setThaiEndDurationTable1] = useState(null);
  const [thaiend_duration_table2, setThaiEndDurationTable2] = useState(null);
  const [thaiend_duration_table3, setThaiEndDurationTable3] = useState(null);
  const [thaiend_duration_table4, setThaiEndDurationTable4] = useState(null);

  const [thaiend_duration_table5, setThaiEndDurationTable5] = useState(null);
  const [thaistart_duration_table6, setThaiStartDurationTable6] =
    useState(null);
  const [thaiend_duration_table6, setThaiEndDurationTable6] = useState(null);
  const [thaistart_duration_table7, setThaiStartDurationTable7] =
    useState(null);
  const [thaiend_duration_table7, setThaiEndDurationTable7] = useState(null);
  const [thaistart_duration_table8, setThaiStartDurationTable8] =
    useState(null);
  const [thaiend_duration_table8, setThaiEndDurationTable8] = useState(null);
  const [thaistart_duration_table9, setThaiStartDurationTable9] =
    useState(null);
  const [thaiend_duration_table9, setThaiEndDurationTable9] = useState(null);
  const [thaistart_duration_table10, setThaiStartDurationTable10] =
    useState(null);
  const [thaiend_duration_table10, setThaiEndDurationTable10] = useState(null);
  const [thaistart_duration_table11, setThaiStartDurationTable11] =
    useState(null);
  const [thaiend_duration_table11, setThaiEndDurationTable11] = useState(null);
  const [thaistart_duration_table12, setThaiStartDurationTable12] =
    useState(null);
  const [thaiend_duration_table12, setThaiEndDurationTable12] = useState(null);
  const [thaistart_duration_table13, setThaiStartDurationTable13] =
    useState(null);
  const [thaiend_duration_table13, setThaiEndDurationTable13] = useState(null);
  const [thaistart_duration_table14, setThaiStartDurationTable14] =
    useState(null);
  const [thaiend_duration_table14, setThaiEndDurationTable14] = useState(null);
  const [thaistart_duration_table15, setThaiStartDurationTable15] =
    useState(null);
  const [thaiend_duration_table15, setThaiEndDurationTable15] = useState(null);

  const [start_prepare, setStartPrepare] = useState("");
  const [end_prepare, setEndPrepare] = useState("");
  const [start_event, setStartEvent] = useState("");
  const [end_event, setEndEvent] = useState("");
  const [deadline, setDeadLine] = useState("");
  const [projectData, setProjectData] = useState("");

  const getMFromDate = (dateString) => {
    return dateString ? new Date(dateString).getMonth() + 1 : null; // Adding 1 because getMonth returns zero-based index
  };
  useEffect(() => {
    setStartM1(getMFromDate(start_duration_table1));
    setStartM2(getMFromDate(start_duration_table2));
    setStartM3(getMFromDate(start_duration_table3));
    setStartM4(getMFromDate(start_duration_table4));
    setStartM5(getMFromDate(start_duration_table5));
    setStartM6(getMFromDate(start_duration_table6));
    setStartM7(getMFromDate(start_duration_table7));
    setStartM8(getMFromDate(start_duration_table8));
    setStartM9(getMFromDate(start_duration_table9));
    setStartM10(getMFromDate(start_duration_table10));
    setStartM11(getMFromDate(start_duration_table11));
    setStartM12(getMFromDate(start_duration_table12));
    setStartM13(getMFromDate(start_duration_table13));
    setStartM14(getMFromDate(start_duration_table14));
    setStartM15(getMFromDate(start_duration_table15));

    setEndM1(getMFromDate(end_duration_table1));
    setEndM2(getMFromDate(end_duration_table2));
    setEndM3(getMFromDate(end_duration_table3));
    setEndM4(getMFromDate(end_duration_table4));
    setEndM5(getMFromDate(end_duration_table5));
    setEndM6(getMFromDate(end_duration_table6));
    setEndM7(getMFromDate(end_duration_table7));
    setEndM8(getMFromDate(end_duration_table8));
    setEndM9(getMFromDate(end_duration_table9));
    setEndM10(getMFromDate(end_duration_table10));
    setEndM11(getMFromDate(end_duration_table11));
    setEndM12(getMFromDate(end_duration_table12));
    setEndM13(getMFromDate(end_duration_table13));
    setEndM14(getMFromDate(end_duration_table14));
    setEndM15(getMFromDate(end_duration_table15));
  }, [
    start_duration_table1,
    start_duration_table2,
    start_duration_table3,
    start_duration_table4,
    start_duration_table5,
    start_duration_table6,
    start_duration_table7,
    start_duration_table8,
    start_duration_table9,
    start_duration_table10,
    start_duration_table11,
    start_duration_table12,
    start_duration_table13,
    start_duration_table14,
    start_duration_table15,
    end_duration_table1,
    end_duration_table2,
    end_duration_table3,
    end_duration_table4,
    end_duration_table5,
    end_duration_table6,
    end_duration_table7,
    end_duration_table8,
    end_duration_table9,
    end_duration_table10,
    end_duration_table11,
    end_duration_table12,
    end_duration_table13,
    end_duration_table14,
    end_duration_table15,
  ]);

  const [startM1, setStartM1] = useState(null);
  const [startM2, setStartM2] = useState(null);
  const [startM3, setStartM3] = useState(null);
  const [startM4, setStartM4] = useState(null);
  const [startM5, setStartM5] = useState(null);
  const [startM6, setStartM6] = useState(null);
  const [startM7, setStartM7] = useState(null);
  const [startM8, setStartM8] = useState(null);
  const [startM9, setStartM9] = useState(null);
  const [startM10, setStartM10] = useState(null);
  const [startM11, setStartM11] = useState(null);
  const [startM12, setStartM12] = useState(null);
  const [startM13, setStartM13] = useState(null);
  const [startM14, setStartM14] = useState(null);
  const [startM15, setStartM15] = useState(null);

  const [endM1, setEndM1] = useState(null);
  const [endM2, setEndM2] = useState(null);
  const [endM3, setEndM3] = useState(null);
  const [endM4, setEndM4] = useState(null);
  const [endM5, setEndM5] = useState(null);
  const [endM6, setEndM6] = useState(null);
  const [endM7, setEndM7] = useState(null);
  const [endM8, setEndM8] = useState(null);
  const [endM9, setEndM9] = useState(null);
  const [endM10, setEndM10] = useState(null);
  const [endM11, setEndM11] = useState(null);
  const [endM12, setEndM12] = useState(null);
  const [endM13, setEndM13] = useState(null);
  const [endM14, setEndM14] = useState(null);
  const [endM15, setEndM15] = useState(null);

  const [TopictableCount, setTopictableCount] = useState(1);
  const increasePrinciplesAndReasons = () => {
    if (TopictableCount < 15) {
      setTopictableCount(TopictableCount + 1);
    }
  };
  const decreasePrinciplesAndReasons = () => {
    if (TopictableCount > 1) {
      setTopictableCount(TopictableCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0

      switch (TopictableCount - 1) {
        case 0:
          setTable1Topic("");
          setStartDurationTable1(null);
          setEndDurationTable1(null);
          setResponsibleTable1("");
          break;
        case 1:
          setTable2Topic("");
          setStartDurationTable2(null);
          setEndDurationTable2(null);
          setResponsibleTable2("");
          break;
        case 2:
          setTable3Topic("");
          setStartDurationTable3(null);
          setEndDurationTable3(null);
          setResponsibleTable3("");
          break;
        case 3:
          setTable4Topic("");
          setStartDurationTable4(null);
          setEndDurationTable4(null);
          setResponsibleTable4("");
          break;
        case 4:
          setTable5Topic("");
          setStartDurationTable5(null);
          setEndDurationTable5(null);
          setResponsibleTable5("");
          break;
        case 5:
          setTable6Topic("");
          setStartDurationTable6(null);
          setEndDurationTable6(null);
          setResponsibleTable6("");
          break;
        case 6:
          setTable7Topic("");
          setStartDurationTable7(null);
          setEndDurationTable7(null);
          setResponsibleTable7("");
          break;
        case 7:
          setTable8Topic("");
          setStartDurationTable8(null);
          setEndDurationTable8(null);
          setResponsibleTable8("");
          break;
        case 8:
          setTable9Topic("");
          setStartDurationTable9(null);
          setEndDurationTable9(null);
          setResponsibleTable9("");
          break;
        case 9:
          setTable10Topic("");
          setStartDurationTable10(null);
          setEndDurationTable10(null);
          setResponsibleTable10("");
          break;
        case 10:
          setTable11Topic("");
          setStartDurationTable11(null);
          setEndDurationTable11(null);
          setResponsibleTable11("");
          break;
        case 11:
          setTable12Topic("");
          setStartDurationTable12(null);
          setEndDurationTable12(null);
          setResponsibleTable12("");
          break;
        case 12:
          setTable13Topic("");
          setStartDurationTable13(null);
          setEndDurationTable13(null);
          setResponsibleTable13("");
          break;
        case 13:
          setTable14Topic("");
          setStartDurationTable14(null);
          setEndDurationTable14(null);
          setResponsibleTable14("");
          break;
        case 14:
          setTable15Topic("");
          setStartDurationTable15(null);
          setEndDurationTable15(null);
          setResponsibleTable15("");
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  const getStartDuration = (index) => {
    switch (index) {
      case 0:
        return start_duration_table1;
      case 1:
        return start_duration_table2;
      case 2:
        return start_duration_table3;
      case 3:
        return start_duration_table4;
      case 4:
        return start_duration_table5;
      case 5:
        return start_duration_table6;
      case 6:
        return start_duration_table7;
      case 7:
        return start_duration_table8;
      case 8:
        return start_duration_table9;
      case 9:
        return start_duration_table10;
      case 10:
        return start_duration_table11;
      case 11:
        return start_duration_table12;
      case 12:
        return start_duration_table13;
      case 13:
        return start_duration_table14;
      case 14:
        return start_duration_table15;
      default:
        return null;
    }
  };

  const setStartDuration = (index, date) => {
    switch (index) {
      case 0:
        setStartDurationTable1(date);
        break;
      case 1:
        setStartDurationTable2(date);
        break;
      case 2:
        setStartDurationTable3(date);
        break;
      case 3:
        setStartDurationTable4(date);
        break;
      case 4:
        setStartDurationTable5(date);
        break;
      case 5:
        setStartDurationTable6(date);
        break;
      case 6:
        setStartDurationTable7(date);
        break;
      case 7:
        setStartDurationTable8(date);
        break;
      case 8:
        setStartDurationTable9(date);
        break;
      case 9:
        setStartDurationTable10(date);
        break;
      case 10:
        setStartDurationTable11(date);
        break;
      case 11:
        setStartDurationTable12(date);
        break;
      case 12:
        setStartDurationTable13(date);
        break;
      case 13:
        setStartDurationTable14(date);
        break;
      case 14:
        setStartDurationTable15(date);
        break;
      default:
        // Handle default case if necessary
        break;
    }
  };

  const getEndDuration = (index) => {
    switch (index) {
      case 0:
        return end_duration_table1;
      case 1:
        return end_duration_table2;
      case 2:
        return end_duration_table3;
      case 3:
        return end_duration_table4;
      case 4:
        return end_duration_table5;
      case 5:
        return end_duration_table6;
      case 6:
        return end_duration_table7;
      case 7:
        return end_duration_table8;
      case 8:
        return end_duration_table9;
      case 9:
        return end_duration_table10;
      case 10:
        return end_duration_table11;
      case 11:
        return end_duration_table12;
      case 12:
        return end_duration_table13;
      case 13:
        return end_duration_table14;
      case 14:
        return end_duration_table15;
      default:
        return null;
    }
  };

  const setEndDuration = (index, date) => {
    switch (index) {
      case 0:
        setEndDurationTable1(date);
        break;
      case 1:
        setEndDurationTable2(date);
        break;
      case 2:
        setEndDurationTable3(date);
        break;
      case 3:
        setEndDurationTable4(date);
        break;
      case 4:
        setEndDurationTable5(date);
        break;
      case 5:
        setEndDurationTable6(date);
        break;
      case 6:
        setEndDurationTable7(date);
        break;
      case 7:
        setEndDurationTable8(date);
        break;
      case 8:
        setEndDurationTable9(date);
        break;
      case 9:
        setEndDurationTable10(date);
        break;
      case 10:
        setEndDurationTable11(date);
        break;
      case 11:
        setEndDurationTable12(date);
        break;
      case 12:
        setEndDurationTable13(date);
        break;
      case 13:
        setEndDurationTable14(date);
        break;
      case 14:
        setEndDurationTable15(date);
        break;
      default:
        // Handle default case if necessary
        break;
    }
  };

  useEffect(() => {
    console.log(end_duration_table1);
    console.log(editData.end_duration_table1);
  }, [editData]);

  useEffect(() => {
    setEditData({
      ...editData,
      thaiend_duration_table1: thaiend_duration_table1,
      thaiend_duration_table2: thaiend_duration_table2,
      thaiend_duration_table3: thaiend_duration_table3,
      thaiend_duration_table4: thaiend_duration_table4,
      thaiend_duration_table5: thaiend_duration_table5,
      thaiend_duration_table6: thaiend_duration_table6,
      thaiend_duration_table7: thaiend_duration_table7,
      thaiend_duration_table8: thaiend_duration_table8,
      thaiend_duration_table9: thaiend_duration_table9,
      thaiend_duration_table10: thaiend_duration_table10,
      thaiend_duration_table11: thaiend_duration_table11,
      thaiend_duration_table12: thaiend_duration_table12,
      thaiend_duration_table13: thaiend_duration_table13,
      thaiend_duration_table14: thaiend_duration_table14,
      thaiend_duration_table15: thaiend_duration_table15,
    });
  }, [
    thaiend_duration_table1,
    thaiend_duration_table2,
    thaiend_duration_table3,
    thaiend_duration_table4,
    thaiend_duration_table5,
    thaiend_duration_table6,
    thaiend_duration_table7,
    thaiend_duration_table8,
    thaiend_duration_table9,
    thaiend_duration_table10,
    thaiend_duration_table11,
    thaiend_duration_table12,
    thaiend_duration_table13,
    thaiend_duration_table14,
    thaiend_duration_table15,
  ]);
  useEffect(() => {
    setEditData({
      ...editData,
      thaistart_duration_table1: thaistart_duration_table1,
      thaistart_duration_table2: thaistart_duration_table2,
      thaistart_duration_table3: thaistart_duration_table3,
      thaistart_duration_table4: thaistart_duration_table4,
      thaistart_duration_table5: thaistart_duration_table5,
      thaistart_duration_table6: thaistart_duration_table6,
      thaistart_duration_table7: thaistart_duration_table7,
      thaistart_duration_table8: thaistart_duration_table8,
      thaistart_duration_table9: thaistart_duration_table9,
      thaistart_duration_table10: thaistart_duration_table10,
      thaistart_duration_table11: thaistart_duration_table11,
      thaistart_duration_table12: thaistart_duration_table12,
      thaistart_duration_table13: thaistart_duration_table13,
      thaistart_duration_table14: thaistart_duration_table14,
      thaistart_duration_table15: thaistart_duration_table15,
    });
  }, [
    thaistart_duration_table1,
    thaistart_duration_table2,
    thaistart_duration_table3,
    thaistart_duration_table4,
    thaistart_duration_table5,
    thaistart_duration_table6,
    thaistart_duration_table7,
    thaistart_duration_table8,
    thaistart_duration_table9,
    thaistart_duration_table10,
    thaistart_duration_table11,
    thaistart_duration_table12,
    thaistart_duration_table13,
    thaistart_duration_table14,
    thaistart_duration_table15,
  ]);
  useEffect(() => {
    setEditData({
      ...editData,
      start_duration_table1: start_duration_table1,
      start_duration_table2: start_duration_table2,
      start_duration_table3: start_duration_table3,
      start_duration_table4: start_duration_table4,
      start_duration_table5: start_duration_table5,
      start_duration_table6: start_duration_table6,
      start_duration_table7: start_duration_table7,
      start_duration_table8: start_duration_table8,
      start_duration_table9: start_duration_table9,
      start_duration_table10: start_duration_table10,
      start_duration_table11: start_duration_table11,
      start_duration_table12: start_duration_table12,
      start_duration_table13: start_duration_table13,
      start_duration_table14: start_duration_table14,
      start_duration_table15: start_duration_table15,
    });
  }, [
    start_duration_table1,
    start_duration_table2,
    start_duration_table3,
    start_duration_table4,
    start_duration_table5,
    start_duration_table6,
    start_duration_table7,
    start_duration_table8,
    start_duration_table9,
    start_duration_table10,
    start_duration_table11,
    start_duration_table12,
    start_duration_table13,
    start_duration_table14,
    start_duration_table15,
  ]);
  useEffect(() => {
    setEditData({
      ...editData,
      end_duration_table1: end_duration_table1,
      end_duration_table2: end_duration_table2,
      end_duration_table3: end_duration_table3,
      end_duration_table4: end_duration_table4,
      end_duration_table5: end_duration_table5,
      end_duration_table6: end_duration_table6,
      end_duration_table7: end_duration_table7,
      end_duration_table8: end_duration_table8,
      end_duration_table9: end_duration_table9,
      end_duration_table10: end_duration_table10,
      end_duration_table11: end_duration_table11,
      end_duration_table12: end_duration_table12,
      end_duration_table13: end_duration_table13,
      end_duration_table14: end_duration_table14,
      end_duration_table15: end_duration_table15,
    });
  }, [
    end_duration_table1,
    end_duration_table2,
    end_duration_table3,
    end_duration_table4,
    end_duration_table5,
    end_duration_table6,
    end_duration_table7,
    end_duration_table8,
    end_duration_table9,
    end_duration_table10,
    end_duration_table11,
    end_duration_table12,
    end_duration_table13,
    end_duration_table14,
    end_duration_table15,
  ]);
  useEffect(() => {
    setEditData({
      ...editData,
      startM1: startM1,
      startM2: startM2,
      startM3: startM3,
      startM4: startM4,
      startM5: startM5,
      startM6: startM6,
      startM7: startM7,
      startM8: startM8,
      startM9: startM9,
      startM10: startM10,
      startM11: startM11,
      startM12: startM12,
      startM13: startM13,
      startM14: startM14,
      startM15: startM15,
    });
  }, [
    startM1,
    startM2,
    startM3,
    startM4,
    startM5,
    startM6,
    startM7,
    startM8,
    startM9,
    startM10,
    startM11,
    startM12,
    startM13,
    startM14,
    startM15,
  ]);
  useEffect(() => {
    setEditData({
      ...editData,
      endM1: endM1,
      endM2: endM2,
      endM3: endM3,
      endM4: endM4,
      endM5: endM5,
      endM6: endM6,
      endM7: endM7,
      endM8: endM8,
      endM9: endM9,
      endM10: endM10,
      endM11: endM11,
      endM12: endM12,
      endM13: endM13,
      endM14: endM14,
      endM15: endM15,
    });
  }, [
    endM1,
    endM2,
    endM3,
    endM4,
    endM5,
    endM6,
    endM7,
    endM8,
    endM9,
    endM10,
    endM11,
    endM12,
    endM13,
    endM14,
    endM15,
  ]);
  useEffect(() => {
    setEditData({
      ...editData,
      is_inyear: is_inyear,
      start_inyear: start_inyear,
      end_inyear: end_inyear,
      TopictableCount: TopictableCount,
    });
  }, [
    is_inyear,
    start_inyear,
    end_inyear,
    TopictableCount
  ]);

  const handleSaveClick = () => {
    setIsEditMode(false);
    const editpage = "ขั้นตอนและแผนดำเนินงาน"

    // Update the grand total state for executive

    if (window.confirm("Do you want to save changes?")) {
      Axios.put(
        `http://localhost:3001/student/project/timestep/edit/${id_project}`,
        editData
      )
        .then((response) => {
          // Handle success
          console.log("Data saved successfully:", response.data);
          window.location.reload();
        })
        .catch((error) => {
          // Handle error
          console.error("Error saving data:", error);
        });
        Axios.post(
          `http://localhost:3001/student/project/edit/history/${id_project}`,
          {codeclub,editpage,id_student}
        )
          .then((response) => {
            console.log("Data saved successfully:", response.data);
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error saving data:", error);
          });
    }
  };
  return (
    <>
      <Col md="9">
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
              ขั้นตอนและแผนดำเนินงาน
            </div>
          </CardHeader>

          <CardBody>
            <Table striped="columns">
              <tbody>
                {/* หัวข้อ index */}
                {Array.from({ length: TopictableCount }).map((_, index) => (
                  <tr style={{ backgroundColor: "white" }}>
                    <td
                      className={`head-side-td ${
                        index % 2 === 1 ? "even" : ""
                      }`}
                      style={{ verticalAlign: "top" }}
                    >
                      <div>{`ขั้นตอนที่ ${index + 1}`}</div>
                    </td>

                    <td className="back-side-td">
                      <Form.Label>รายละเอียดการดำเนินงาน : </Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder={`รายละเอียดขั้นตอนที่ ${index + 1}`}
                        className="font-form-control"
                        value={
                          isEditMode
                            ? editData[`topic_table${index + 1}`]
                            : originalData[`topic_table${index + 1}`]
                        }
                        onChange={(event) => {
                          const newValue = event.target.value;
                          switch (index) {
                            case 0:
                              setEditData({
                                ...editData,
                                topic_table1: newValue,
                              });
                              break;
                            case 1:
                              setEditData({
                                ...editData,
                                topic_table2: newValue,
                              });
                              break;
                            case 2:
                              setEditData({
                                ...editData,
                                topic_table3: newValue,
                              });
                              break;
                            case 3:
                              setEditData({
                                ...editData,
                                topic_table4: newValue,
                              });
                              break;
                            case 4:
                              setEditData({
                                ...editData,
                                topic_table5: newValue,
                              });
                              break;
                            case 5:
                              setEditData({
                                ...editData,
                                topic_table6: newValue,
                              });
                              break;
                            case 6:
                              setEditData({
                                ...editData,
                                topic_table7: newValue,
                              });
                              break;
                            case 7:
                              setEditData({
                                ...editData,
                                topic_table8: newValue,
                              });
                              break;
                            case 8:
                              setEditData({
                                ...editData,
                                topic_table9: newValue,
                              });
                              break;
                            case 9:
                              setEditData({
                                ...editData,
                                topic_table10: newValue,
                              });
                              break;
                            case 10:
                              setEditData({
                                ...editData,
                                topic_table11: newValue,
                              });
                              break;
                            case 11:
                              setEditData({
                                ...editData,
                                topic_table12: newValue,
                              });
                              break;
                            case 12:
                              setEditData({
                                ...editData,
                                topic_table13: newValue,
                              });
                              break;
                            case 13:
                              setEditData({
                                ...editData,
                                topic_table14: newValue,
                              });
                              break;
                            case 14:
                              setEditData({
                                ...editData,
                                topic_table15: newValue,
                              });
                              break;
                            default:
                              // Handle default case if necessary
                              break;
                          }
                        }}
                        readOnly={!isEditMode}
                      />
                      <div
                        style={{
                          marginTop: "2%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Form.Label>ระยะเวลา : </Form.Label>
                        <div>
                          <DatePicker
                            selected={
                              isEditMode
                                ? editData[`start_duration_table${index + 1}`]
                                : getStartDuration(index)
                            }
                            onChange={(date) => {
                              setStartDuration(index, date); // Update the start duration state
                              // Update the editData state after setting start duration
                              setEditData({
                                ...editData,
                                [`start_duration_table${index + 1}`]: date, // Ensure date is a valid date object
                              });
                            }}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="เลือกวันเริ่มต้น"
                            className="form-control margin-form-control"
                            popperPlacement="top-start"
                            isClearable
                            selectsStart
                            startDate={
                              isEditMode
                                ? editData[`start_duration_table${index + 1}`]
                                : getStartDuration(index)
                            }
                            endDate={
                              isEditMode
                                ? editData[`start_duration_table${index + 1}`]
                                : getEndDuration(index)
                            }
                            readOnly={!isEditMode}
                          />
                        </div>
                        <span style={{ marginLeft: "1%", marginRight: "1%" }}>
                          <div>-</div>
                        </span>
                        <div>
                          <DatePicker
                            selected={
                              isEditMode
                                ? editData[`end_duration_table${index + 1}`]
                                : getEndDuration(index)
                            }
                            onChange={(date) => {
                              setEndDuration(index, date); // Update the start duration state
                              // Update the editData state after setting start duration
                              setEditData({
                                ...editData,
                                [`end_duration_table${index + 1}`]: date, // Ensure date is a valid date object
                              });
                            }}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="เลือกวันสิ้นสุด"
                            className="form-control"
                            popperPlacement="top-start"
                            isClearable
                            selectsEnd
                            startDate={
                              isEditMode
                                ? editData[`start_duration_table${index + 1}`]
                                : getStartDuration(index)
                            }
                            endDate={
                              isEditMode
                                ? editData[`start_duration_table${index + 1}`]
                                : getEndDuration(index)
                            }
                            readOnly={!isEditMode}
                          />
                        </div>
                      </div>

                      <br></br>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isEditMode && (
                <>
                  {TopictableCount < 15 && (
                    <Button
                      variant="success"
                      className="ml-5 mb-3 btn-budget-increase border-success"
                      onClick={increasePrinciplesAndReasons}
                    >
                      <div style={{ fontSize: "14px" }}>เพิ่มขั้นตอน</div>
                    </Button>
                  )}
                  {TopictableCount > 1 && (
                    <Button
                      variant="danger"
                      className="ml-5 mb-3 btn-budget-decrease border-danger"
                      onClick={decreasePrinciplesAndReasons}
                    >
                      <div style={{ fontSize: "14px" }}>ลดขั้นตอน</div>
                    </Button>
                  )}
                </>
              )}
            </div>
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
export default SD_timestep;
