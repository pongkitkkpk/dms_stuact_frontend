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
import Swal from 'sweetalert2';

function CSD_timestep({ id_projects, switchToCSDBudget }) {
  const [projectList, setProjectList] = useState([]);
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch, setYearlyCountSketch] = useState("");

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

  const formatThaiDate = (dateString) => {
    if (dateString != null) {
      const formattedDate = new Date(dateString);
      const thaiMonths = [
        "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
        "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
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


  }, [start_duration_table1,
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
    const endDurationTables = [end_duration_table15, end_duration_table14, end_duration_table13, end_duration_table12, end_duration_table11, end_duration_table10, end_duration_table9, end_duration_table8, end_duration_table7, end_duration_table6, end_duration_table5, end_duration_table4, end_duration_table3, end_duration_table2, end_duration_table1];

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
        setIs_inyear(true)
        setStart_inyear(year1Thai);

      } else {

        setIs_inyear(false)
        setStart_inyear(year1Thai);
        setEnd_inyear(yearThai);

      }
    } else {
      console.log("All end_duration_table values are null.");
    }
  }, [start_duration_table1,
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
  const [thaistart_duration_table1, setThaiStartDurationTable1] = useState(null);
  const [thaistart_duration_table2, setThaiStartDurationTable2] = useState(null);
  const [thaistart_duration_table3, setThaiStartDurationTable3] = useState(null);
  const [thaistart_duration_table4, setThaiStartDurationTable4] = useState(null);
  const [thaistart_duration_table5, setThaiStartDurationTable5] = useState(null);

  const [thaiend_duration_table1, setThaiEndDurationTable1] = useState(null);
  const [thaiend_duration_table2, setThaiEndDurationTable2] = useState(null);
  const [thaiend_duration_table3, setThaiEndDurationTable3] = useState(null);
  const [thaiend_duration_table4, setThaiEndDurationTable4] = useState(null);

  const [thaiend_duration_table5, setThaiEndDurationTable5] = useState(null);
  const [thaistart_duration_table6, setThaiStartDurationTable6] = useState(null);
  const [thaiend_duration_table6, setThaiEndDurationTable6] = useState(null);
  const [thaistart_duration_table7, setThaiStartDurationTable7] = useState(null);
  const [thaiend_duration_table7, setThaiEndDurationTable7] = useState(null);
  const [thaistart_duration_table8, setThaiStartDurationTable8] = useState(null);
  const [thaiend_duration_table8, setThaiEndDurationTable8] = useState(null);
  const [thaistart_duration_table9, setThaiStartDurationTable9] = useState(null);
  const [thaiend_duration_table9, setThaiEndDurationTable9] = useState(null);
  const [thaistart_duration_table10, setThaiStartDurationTable10] = useState(null);
  const [thaiend_duration_table10, setThaiEndDurationTable10] = useState(null);
  const [thaistart_duration_table11, setThaiStartDurationTable11] = useState(null);
  const [thaiend_duration_table11, setThaiEndDurationTable11] = useState(null);
  const [thaistart_duration_table12, setThaiStartDurationTable12] = useState(null);
  const [thaiend_duration_table12, setThaiEndDurationTable12] = useState(null);
  const [thaistart_duration_table13, setThaiStartDurationTable13] = useState(null);
  const [thaiend_duration_table13, setThaiEndDurationTable13] = useState(null);
  const [thaistart_duration_table14, setThaiStartDurationTable14] = useState(null);
  const [thaiend_duration_table14, setThaiEndDurationTable14] = useState(null);
  const [thaistart_duration_table15, setThaiStartDurationTable15] = useState(null);
  const [thaiend_duration_table15, setThaiEndDurationTable15] = useState(null);


  const [personNames, setPersonNames] = useState([]);
  const [person1, setPerson1] = useState([]);
  const [person2, setPerson2] = useState([]);
  const [person3, setPerson3] = useState([]);

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
  const createProject = () => {
    let responsibleTable1str = "";
    if (responsible_table1 != "") {
      responsibleTable1str = responsible_table1.join(",");
      responsibleTable1str = responsibleTable1str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    let responsibleTable2str = "";
    if (responsible_table2 != "") {
      responsibleTable2str = responsible_table2.join(",");
      responsibleTable2str = responsibleTable2str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }
    setResponsibleTable2(responsibleTable2str)
    let responsibleTable3str = "";
    if (responsible_table3 != "") {
      responsibleTable3str = responsible_table3.join(",");
      responsibleTable3str = responsibleTable3str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }
    let responsibleTable4str = "";
    if (responsible_table4 != "") {
      responsibleTable4str = responsible_table4.join(",");
      responsibleTable4str = responsibleTable4str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }
    let responsibleTable5str = "";
    if (responsible_table5 !== "") {
      responsibleTable5str = responsible_table5.join(",");
      responsibleTable5str = responsibleTable5str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }
    let responsibleTable6str = "";
    if (responsible_table6 !== "") {
      responsibleTable6str = responsible_table6.join(",");
      responsibleTable6str = responsibleTable6str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    let responsibleTable7str = "";
    if (responsible_table7 !== "") {
      responsibleTable7str = responsible_table7.join(",");
      responsibleTable7str = responsibleTable7str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    let responsibleTable8str = "";
    if (responsible_table8 !== "") {
      responsibleTable8str = responsible_table8.join(",");
      responsibleTable8str = responsibleTable8str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    let responsibleTable9str = "";
    if (responsible_table9 !== "") {
      responsibleTable9str = responsible_table9.join(",");
      responsibleTable9str = responsibleTable9str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    let responsibleTable10str = "";
    if (responsible_table10 !== "") {
      responsibleTable10str = responsible_table10.join(",");
      responsibleTable10str = responsibleTable10str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }
    let responsibleTable11str = "";
    if (responsible_table11 !== "") {
      responsibleTable11str = responsible_table11.join(",");
      responsibleTable11str = responsibleTable11str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    let responsibleTable12str = "";
    if (responsible_table12 !== "") {
      responsibleTable12str = responsible_table12.join(",");
      responsibleTable12str = responsibleTable12str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    let responsibleTable13str = "";
    if (responsible_table13 !== "") {
      responsibleTable13str = responsible_table13.join(",");
      responsibleTable13str = responsibleTable13str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    let responsibleTable14str = "";
    if (responsible_table14 !== "") {
      responsibleTable14str = responsible_table14.join(",");
      responsibleTable14str = responsibleTable14str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    let responsibleTable15str = "";
    if (responsible_table15 !== "") {
      responsibleTable15str = responsible_table15.join(",");
      responsibleTable15str = responsibleTable15str
        .split(",")
        .map((item) => item.trim().split(" ")[0])
        .join(", ");
    }

    Axios.put(
      `http://localhost:3001/student/project/p_timestep/create/${id_projects}`,
      {
        codeclub,
        yearly_countsketch,
        topic_table1,
        start_duration_table1,
        end_duration_table1,
        responsibleTable1str,
        topic_table2,
        start_duration_table2,
        end_duration_table2,
        responsibleTable2str,
        topic_table3,
        start_duration_table3,
        end_duration_table3,
        responsibleTable3str,
        topic_table4,
        start_duration_table4,
        end_duration_table4,
        responsibleTable4str,
        topic_table5,
        start_duration_table5,
        end_duration_table5,
        responsibleTable5str,
        topic_table6,
        start_duration_table6,
        end_duration_table6,
        responsibleTable6str,
        topic_table7,
        start_duration_table7,
        end_duration_table7,
        responsibleTable7str,
        topic_table8,
        start_duration_table8,
        end_duration_table8,
        responsibleTable8str,
        topic_table9,
        start_duration_table9,
        end_duration_table9,
        responsibleTable9str,
        topic_table10,
        start_duration_table10,
        end_duration_table10,
        responsibleTable10str,
        topic_table11,
        start_duration_table11,
        end_duration_table11,
        responsibleTable11str,
        topic_table12,
        start_duration_table12,
        end_duration_table12,
        responsibleTable12str,
        topic_table13,
        start_duration_table13,
        end_duration_table13,
        responsibleTable13str,
        topic_table14,
        start_duration_table14,
        end_duration_table14,
        responsibleTable14str,
        topic_table15,
        start_duration_table15,
        end_duration_table15,
        responsibleTable15str,
        thaistart_duration_table1,
        thaiend_duration_table1,
        thaistart_duration_table2,
        thaiend_duration_table2,
        thaistart_duration_table3,
        thaiend_duration_table3,
        thaistart_duration_table4,
        thaiend_duration_table4,
        thaistart_duration_table5,
        thaiend_duration_table5,
        thaistart_duration_table6,
        thaiend_duration_table6,
        thaistart_duration_table7,
        thaiend_duration_table7,
        thaistart_duration_table8,
        thaiend_duration_table8,
        thaistart_duration_table9,
        thaiend_duration_table9,
        thaistart_duration_table10,
        thaiend_duration_table10,
        thaistart_duration_table11,
        thaiend_duration_table11,
        thaistart_duration_table12,
        thaiend_duration_table12,
        thaistart_duration_table13,
        thaiend_duration_table13,
        thaistart_duration_table14,
        thaiend_duration_table14,
        thaistart_duration_table15,
        thaiend_duration_table15,
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
        is_inyear,
        start_inyear,
        end_inyear,
        TopictableCount
      }
    )
      .then((response) => {
        console.log(response.data);
        // Handle success, if needed
      })
      .catch((error) => {
        console.error("There was an error!", error);
        // Handle error, if needed
      });
    Swal.fire({
      title: "บันทึกโครงการหน้า  ขั้นตอนและแผนดำเนินงาน",
      text: "",
      icon: "success",
    })
    setTimeout(() => {
      switchToCSDBudget();
    }, 500); // Adjust the delay if needed

  };
  const getProjectData = () => {
    Axios.get(
      `http://localhost:3001/student/project/getidproject/${id_projects}`
    ).then((response) => {
      setProjectData(response.data);

      setPerson1(response.data[0].person1_name);
      setPerson2(response.data[0].person2_name);
      setPerson3(response.data[0].person3_name);

      const startPrepare = new Date(response.data[0].start_prepare);
      const endPrepare = new Date(response.data[0].end_prepare);
      const startEvent = new Date(response.data[0].start_event);
      const endEvent = new Date(response.data[0].end_event);
      const deadline = new Date(response.data[0].deadline);

      // Adding one day to each date
      startPrepare.setDate(startPrepare.getDate());
      endPrepare.setDate(endPrepare.getDate());
      startEvent.setDate(startEvent.getDate());
      endEvent.setDate(endEvent.getDate());
      deadline.setDate(deadline.getDate());

      // Logging modified dates
      setStartPrepare(startPrepare);
      setEndPrepare(endPrepare);
      setStartEvent(startEvent);
      setEndEvent(endEvent);
      setDeadLine(deadline);
    });
  };

  const [start_prepare, setStartPrepare] = useState("");
  const [end_prepare, setEndPrepare] = useState("");
  const [start_event, setStartEvent] = useState("");
  const [end_event, setEndEvent] = useState("");
  const [deadline, setDeadLine] = useState("");
  const [projectData, setProjectData] = useState("");
  const [pPersonData, setPPersonData] = useState([]);

  const getpPersonData = () => {
    Axios.get("http://localhost:3001/student/project/p_person").then(
      (response) => {
        setPPersonData(response.data);
      }
    );
  };

  useEffect(() => {
    getpPersonData();
  }, []);

  useEffect(() => {
    const idinperson = pPersonData.filter(
      (person) => person.id_projects === id_projects
    );
    console.log("id" + id_projects);

    // Assuming idinperson is an array and you want to get data from the first element
    if (idinperson.length > 0) {
      const { codeclub, yearly_countsketch } = idinperson[0];
      setCodeclub(codeclub);
      setYearlyCountSketch(yearly_countsketch);
    }
  }, [id_projects, pPersonData]);



  useEffect(() => {
    console.log("person1" + person1);
    console.log("person2" + person2);
    console.log("person3" + person3);
    // 'person1', 'person2', 'person3' will have the updated values here
    const names = [
      person1 !== "" ? person1 : null,
      person2 !== "" ? person2 : null,
      person3 !== "" ? person3 : null,
    ].filter((name) => name !== null);

    setPersonNames(names);
  }, [person1, person2, person3]);

  useEffect(() => {
    getProjectData();
  }, []);

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

  return (
    <>
      <Col md="9">
        <Card>
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
                    <td className={`head-side-td ${index % 2 === 1 ? 'even' : ''}`} style={{ verticalAlign: "top" }}>
                      <div>{`ขั้นตอนที่ ${index + 1}`}</div>
                    </td>
                    <td className="back-side-td">
                      <Form.Label>รายละเอียดการดำเนินงาน : </Form.Label>
                      <Form.Control
                        className="font-form-control"
                        onChange={(event) => {
                          switch (index) {
                            case 0:
                              setTable1Topic(event.target.value);
                              break;
                            case 1:
                              setTable2Topic(event.target.value);
                              break;
                            case 2:
                              setTable3Topic(event.target.value);
                              break;
                            case 3:
                              setTable4Topic(event.target.value);
                              break;
                            case 4:
                              setTable5Topic(event.target.value);
                              break;
                            case 5:
                              setTable6Topic(event.target.value);
                              break;
                            case 6:
                              setTable7Topic(event.target.value);
                              break;
                            case 7:
                              setTable8Topic(event.target.value);
                              break;
                            case 8:
                              setTable9Topic(event.target.value);
                              break;
                            case 9:
                              setTable10Topic(event.target.value);
                              break;
                            case 10:
                              setTable11Topic(event.target.value);
                              break;
                            case 11:
                              setTable12Topic(event.target.value);
                              break;
                            case 12:
                              setTable13Topic(event.target.value);
                              break;
                            case 13:
                              setTable14Topic(event.target.value);
                              break;
                            case 14:
                              setTable15Topic(event.target.value);
                              break;
                            default:
                              // Handle default case if necessary
                              break;
                          }
                        }}
                        value={(() => {
                          switch (index) {
                            case 0:
                              return topic_table1;
                            case 1:
                              return topic_table2;
                            case 2:
                              return topic_table3;
                            case 3:
                              return topic_table4;
                            case 4:
                              return topic_table5;
                            case 5:
                              return topic_table6;
                            case 6:
                              return topic_table7;
                            case 7:
                              return topic_table8;
                            case 8:
                              return topic_table9;
                            case 9:
                              return topic_table10;
                            case 10:
                              return topic_table11;
                            case 11:
                              return topic_table12;
                            case 12:
                              return topic_table13;
                            case 13:
                              return topic_table14;
                            case 14:
                              return topic_table15;
                            default:
                              return "";
                          }
                        })()}
                        size="sm"
                        type="text"
                        placeholder={`รายละเอียดขั้นตอนที่ ${index + 1}`}
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
                            selected={getStartDuration(index)}
                            onChange={(date) => setStartDuration(index, date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="เลือกวันเริ่มต้น"
                            className="form-control margin-form-control"
                            minDate={start_prepare}
                            maxDate={end_event}
                            popperPlacement="top-start"
                            isClearable
                            selectsStart
                            startDate={getStartDuration(index)}
                            endDate={getEndDuration(index)}
                          />
                        </div>
                        <span style={{ marginLeft: "1%", marginRight: "1%" }}>
                          <div>-</div>
                        </span>
                        <div>
                          <DatePicker
                            selected={getEndDuration(index)}
                            onChange={(date) => setEndDuration(index, date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="เลือกวันสิ้นสุด"
                            className="form-control"
                            minDate={getStartDuration(index)}
                            maxDate={end_event}
                            popperPlacement="top-start"
                            isClearable
                            selectsEnd
                            startDate={getStartDuration(index)}
                            endDate={getEndDuration(index)}
                          />
                        </div>
                      </div>

                      <br></br>
                      {index == 0 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table1.includes(name)}
                                  onChange={handleresponsibleTable1Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      {index == 1 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table2.includes(name)}
                                  onChange={handleresponsibleTable2Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}

                      {index == 2 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table3.includes(name)}
                                  onChange={handleresponsibleTable3Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}

                      {index == 3 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table4.includes(name)}
                                  onChange={handleresponsibleTable4Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      {index == 4 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table5.includes(name)}
                                  onChange={handleresponsibleTable5Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}

                      {index == 5 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table6.includes(name)}
                                  onChange={handleresponsibleTable6Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}

                      {index == 6 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table7.includes(name)}
                                  onChange={handleresponsibleTable7Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}

                      {index == 7 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table8.includes(name)}
                                  onChange={handleresponsibleTable8Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}

                      {index == 8 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table9.includes(name)}
                                  onChange={handleresponsibleTable9Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}

                      {index == 9 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table10.includes(name)}
                                  onChange={handleresponsibleTable10Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      {index == 10 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table11.includes(name)}
                                  onChange={handleresponsibleTable11Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      {index == 11 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table12.includes(name)}
                                  onChange={handleresponsibleTable12Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      {index == 12 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table13.includes(name)}
                                  onChange={handleresponsibleTable13Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      {index == 13 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table14.includes(name)}
                                  onChange={handleresponsibleTable14Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                      {index == 14 && (
                        <div style={{ display: "inline-block" }}>
                          <Form.Label style={{ marginRight: "10px" }}>
                            ผู้รับผิดชอบ :{" "}
                          </Form.Label>
                          {personNames.map((name, index) => (
                            <div
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <label>
                                <input
                                  type="checkbox"
                                  value={name}
                                  checked={responsible_table15.includes(name)}
                                  onChange={handleresponsibleTable15Change}
                                />
                                {` ` + name}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
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
            </div>
          </CardBody>

          <CardFooter
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px"
            }}
          >
            <Button
              type="submit"
              variant="warning"
              className="btn-dataupdate"
              style={{ fontSize: "14px" }}
              onClick={createProject}
            >
              บันทึกข้อมูล
            </Button>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
}
export default CSD_timestep;
