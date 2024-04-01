import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// react-bootstrap components
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
    Nav,
    Table
} from "react-bootstrap";
import Axios from 'axios';

function CSD_timestep({ id_projects, switchToCSDBudget }) {
    const [projectList, setProjectList] = useState([]);
    const [codeClub, setCodeClub] = useState('');
    const [yearlyCountSketch, setYearlyCountSketch] = useState('');


    const [table1Id, setTable1Id] = useState('1');
    const [table1Topic, setTable1Topic] = useState('');
    const [startDurationTable1, setStartDurationTable1] = useState('');
    const [endDurationTable1, setEndDurationTable1] = useState('');
    const [responsibleTable1, setResponsibleTable1] = useState([]);

    const handleresponsibleTable1Change = (event) => {
        const name = event.target.value;
        if (responsibleTable1.includes(name)) {
            setResponsibleTable1(responsibleTable1.filter(person => person !== name));
        } else {
            setResponsibleTable1([...responsibleTable1, name]);
        }
    };

    const [table2Id, setTable2Id] = useState('2');
    const [table2Topic, setTable2Topic] = useState('');
    const [startDurationTable2, setStartDurationTable2] = useState(null);
    const [endDurationTable2, setEndDurationTable2] = useState(null);
    const [responsibleTable2, setResponsibleTable2] = useState('');
    const handleresponsibleTable2Change = (event) => {
        const name = event.target.value;
        if (responsibleTable2.includes(name)) {
            setResponsibleTable2(responsibleTable2.filter(person => person !== name));
        } else {
            setResponsibleTable2([...responsibleTable2, name]);
        }
    };

    const [table3Id, setTable3Id] = useState('3');
    const [table3Topic, setTable3Topic] = useState('');
    const [startDurationTable3, setStartDurationTable3] = useState(null);
    const [endDurationTable3, setEndDurationTable3] = useState(null);
    const [responsibleTable3, setResponsibleTable3] = useState('');
    const handleresponsibleTable3Change = (event) => {
        const name = event.target.value;
        if (responsibleTable3.includes(name)) {
            setResponsibleTable3(responsibleTable3.filter(person => person !== name));
        } else {
            setResponsibleTable3([...responsibleTable3, name]);
        }
    };

    const [table4Id, setTable4Id] = useState('4');
    const [table4Topic, setTable4Topic] = useState('');
    const [startDurationTable4, setStartDurationTable4] = useState(null);
    const [endDurationTable4, setEndDurationTable4] = useState(null);
    const [responsibleTable4, setResponsibleTable4] = useState('');
    const handleresponsibleTable4Change = (event) => {
        const name = event.target.value;
        if (responsibleTable4.includes(name)) {
            setResponsibleTable4(responsibleTable4.filter(person => person !== name));
        } else {
            setResponsibleTable4([...responsibleTable4, name]);
        }
    };

    const [table5Id, setTable5Id] = useState('5');
    const [table5Topic, setTable5Topic] = useState('');
    const [startDurationTable5, setStartDurationTable5] = useState(null);
    const [endDurationTable5, setEndDurationTable5] = useState(null);
    const [responsibleTable5, setResponsibleTable5] = useState('');
    const handleresponsibleTable5Change = (event) => {
        const name = event.target.value;
        if (responsibleTable5.includes(name)) {
            setResponsibleTable5(responsibleTable5.filter(person => person !== name));
        } else {
            setResponsibleTable5([...responsibleTable5, name]);
        }
    };

    const [table6Id, setTable6Id] = useState('6');
    const [table6Topic, setTable6Topic] = useState('');
    const [startDurationTable6, setStartDurationTable6] = useState(null);
    const [endDurationTable6, setEndDurationTable6] = useState(null);
    const [responsibleTable6, setResponsibleTable6] = useState('');
    const handleresponsibleTable6Change = (event) => {
        const name = event.target.value;
        if (responsibleTable6.includes(name)) {
            setResponsibleTable6(responsibleTable6.filter(person => person !== name));
        } else {
            setResponsibleTable6([...responsibleTable6, name]);
        }
    };

    const [table7Id, setTable7Id] = useState('7');
    const [table7Topic, setTable7Topic] = useState('');
    const [startDurationTable7, setStartDurationTable7] = useState(null);
    const [endDurationTable7, setEndDurationTable7] = useState(null);
    const [responsibleTable7, setResponsibleTable7] = useState('');
    const handleresponsibleTable7Change = (event) => {
        const name = event.target.value;
        if (responsibleTable7.includes(name)) {
            setResponsibleTable7(responsibleTable7.filter(person => person !== name));
        } else {
            setResponsibleTable7([...responsibleTable7, name]);
        }
    };

    const [table8Id, setTable8Id] = useState('8');
    const [table8Topic, setTable8Topic] = useState('');
    const [startDurationTable8, setStartDurationTable8] = useState(null);
    const [endDurationTable8, setEndDurationTable8] = useState(null);
    const [responsibleTable8, setResponsibleTable8] = useState('');
    const handleresponsibleTable8Change = (event) => {
        const name = event.target.value;
        if (responsibleTable8.includes(name)) {
            setResponsibleTable8(responsibleTable8.filter(person => person !== name));
        } else {
            setResponsibleTable8([...responsibleTable8, name]);
        }
    };

    const [table9Id, setTable9Id] = useState('9');
    const [table9Topic, setTable9Topic] = useState('');
    const [startDurationTable9, setStartDurationTable9] = useState(null);
    const [endDurationTable9, setEndDurationTable9] = useState(null);
    const [responsibleTable9, setResponsibleTable9] = useState('');
    const handleresponsibleTable9Change = (event) => {
        const name = event.target.value;
        if (responsibleTable9.includes(name)) {
            setResponsibleTable9(responsibleTable9.filter(person => person !== name));
        } else {
            setResponsibleTable9([...responsibleTable9, name]);
        }
    };

    const [table10Id, setTable10Id] = useState('10');
    const [table10Topic, setTable10Topic] = useState('');
    const [startDurationTable10, setStartDurationTable10] = useState(null);
    const [endDurationTable10, setEndDurationTable10] = useState(null);
    const [responsibleTable10, setResponsibleTable10] = useState('');
    const handleresponsibleTable10Change = (event) => {
        const name = event.target.value;
        if (responsibleTable10.includes(name)) {
            setResponsibleTable10(responsibleTable10.filter(person => person !== name));
        } else {
            setResponsibleTable10([...responsibleTable10, name]);
        }
    };

    const [table11Id, setTable11Id] = useState('11');
    const [table11Topic, setTable11Topic] = useState('');
    const [startDurationTable11, setStartDurationTable11] = useState(null);
    const [endDurationTable11, setEndDurationTable11] = useState(null);
    const [responsibleTable11, setResponsibleTable11] = useState('');
    const handleresponsibleTable11Change = (event) => {
        const name = event.target.value;
        if (responsibleTable11.includes(name)) {
            setResponsibleTable11(responsibleTable11.filter(person => person !== name));
        } else {
            setResponsibleTable11([...responsibleTable11, name]);
        }
    };

    const [table12Id, setTable12Id] = useState('12');
    const [table12Topic, setTable12Topic] = useState('');
    const [startDurationTable12, setStartDurationTable12] = useState(null);
    const [endDurationTable12, setEndDurationTable12] = useState(null);
    const [responsibleTable12, setResponsibleTable12] = useState('');
    const handleresponsibleTable12Change = (event) => {
        const name = event.target.value;
        if (responsibleTable12.includes(name)) {
            setResponsibleTable12(responsibleTable12.filter(person => person !== name));
        } else {
            setResponsibleTable12([...responsibleTable12, name]);
        }
    };

    const [table13Id, setTable13Id] = useState('13');
    const [table13Topic, setTable13Topic] = useState('');
    const [startDurationTable13, setStartDurationTable13] = useState(null);
    const [endDurationTable13, setEndDurationTable13] = useState(null);
    const [responsibleTable13, setResponsibleTable13] = useState('');
    const handleresponsibleTable13Change = (event) => {
        const name = event.target.value;
        if (responsibleTable13.includes(name)) {
            setResponsibleTable13(responsibleTable13.filter(person => person !== name));
        } else {
            setResponsibleTable13([...responsibleTable13, name]);
        }
    };

    const [table14Id, setTable14Id] = useState('14');
    const [table14Topic, setTable14Topic] = useState('');
    const [startDurationTable14, setStartDurationTable14] = useState(null);
    const [endDurationTable14, setEndDurationTable14] = useState(null);
    const [responsibleTable14, setResponsibleTable14] = useState('');
    const handleresponsibleTable14Change = (event) => {
        const name = event.target.value;
        if (responsibleTable14.includes(name)) {
            setResponsibleTable14(responsibleTable14.filter(person => person !== name));
        } else {
            setResponsibleTable14([...responsibleTable14, name]);
        }
    };

    const [table15Id, setTable15Id] = useState('15');
    const [table15Topic, setTable15Topic] = useState('');
    const [startDurationTable15, setStartDurationTable15] = useState(null);
    const [endDurationTable15, setEndDurationTable15] = useState(null);
    const [responsibleTable15, setResponsibleTable15] = useState('');
    const handleresponsibleTable15Change = (event) => {
        const name = event.target.value;
        if (responsibleTable15.includes(name)) {
            setResponsibleTable15(responsibleTable15.filter(person => person !== name));
        } else {
            setResponsibleTable15([...responsibleTable15, name]);
        }
    };

    const [start_prepare, setStartPrepare] = useState('');
    const [end_prepare, setEndPrepare] = useState('');
    const [start_event, setStartEvent] = useState('');
    const [end_event, setEndEvent] = useState('');
    const [deadline, setDeadLine] = useState('');
    const [projectData, setProjectData] = useState('');

    const [personNames, setPersonNames] = useState([]);
    const [person1, setPerson1] = useState([]);
    const [person2, setPerson2] = useState([]);
    const [person3, setPerson3] = useState([]);



    const getProjectData = () => {
        Axios.get(`http://localhost:3001/student/project/getidproject/${id_projects}`).then((response) => {
            setProjectData(response.data);

            setPerson1(response.data[0].person1_name)
            setPerson2(response.data[0].person2_name)
            setPerson3(response.data[0].person3_name)

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
            setStartPrepare(startPrepare)
            setEndPrepare(endPrepare)
            setStartEvent(startEvent)
            setEndEvent(endEvent)
            setDeadLine(deadline)
        });
    }

    const createProject = () => {
        let responsibleTable1str = '';
        if (responsibleTable1 != '') {
            responsibleTable1str = responsibleTable1.join(",");
            responsibleTable1str = responsibleTable1str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }
        let responsibleTable2str = '';
        if (responsibleTable2 != '') {
            responsibleTable2str = responsibleTable2.join(",");
            responsibleTable2str = responsibleTable2str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }
        let responsibleTable3str = '';
        if (responsibleTable3 != '') {
            responsibleTable3str = responsibleTable3.join(",");
            responsibleTable3str = responsibleTable3str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }
        let responsibleTable4str = '';
        if (responsibleTable4 != '') {
            responsibleTable4str = responsibleTable4.join(",");
            responsibleTable4str = responsibleTable4str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }
        let responsibleTable5str = '';
        if (responsibleTable5 !== '') {
            responsibleTable5str = responsibleTable5.join(",");
            responsibleTable5str = responsibleTable5str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }
        let responsibleTable6str = '';
        if (responsibleTable6 !== '') {
            responsibleTable6str = responsibleTable6.join(",");
            responsibleTable6str = responsibleTable6str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }

        let responsibleTable7str = '';
        if (responsibleTable7 !== '') {
            responsibleTable7str = responsibleTable7.join(",");
            responsibleTable7str = responsibleTable7str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }

        let responsibleTable8str = '';
        if (responsibleTable8 !== '') {
            responsibleTable8str = responsibleTable8.join(",");
            responsibleTable8str = responsibleTable8str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }

        let responsibleTable9str = '';
        if (responsibleTable9 !== '') {
            responsibleTable9str = responsibleTable9.join(",");
            responsibleTable9str = responsibleTable9str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }

        let responsibleTable10str = '';
        if (responsibleTable10 !== '') {
            responsibleTable10str = responsibleTable10.join(",");
            responsibleTable10str = responsibleTable10str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }
        let responsibleTable11str = '';
        if (responsibleTable11 !== '') {
            responsibleTable11str = responsibleTable11.join(",");
            responsibleTable11str = responsibleTable11str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }

        let responsibleTable12str = '';
        if (responsibleTable12 !== '') {
            responsibleTable12str = responsibleTable12.join(",");
            responsibleTable12str = responsibleTable12str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }

        let responsibleTable13str = '';
        if (responsibleTable13 !== '') {
            responsibleTable13str = responsibleTable13.join(",");
            responsibleTable13str = responsibleTable13str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }

        let responsibleTable14str = '';
        if (responsibleTable14 !== '') {
            responsibleTable14str = responsibleTable14.join(",");
            responsibleTable14str = responsibleTable14str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }

        let responsibleTable15str = '';
        if (responsibleTable15 !== '') {
            responsibleTable15str = responsibleTable15.join(",");
            responsibleTable15str = responsibleTable15str.split(",").map(item => item.trim().split(" ")[0]).join(", ");
        }



        Axios.post(`http://localhost:3001/student/project/p_timestep/create/${id_projects}`, {
            id_projects,
            table1Topic,
            startDurationTable1,
            endDurationTable1,
            responsibleTable1str,
            table2Topic,
            startDurationTable2,
            endDurationTable2,
            responsibleTable2str,
            table3Topic,
            startDurationTable3,
            endDurationTable3,
            responsibleTable3str,
            table4Topic,
            startDurationTable4,
            endDurationTable4,
            responsibleTable4str,
            table5Topic,
            startDurationTable5,
            endDurationTable5,
            responsibleTable5str,
            table6Topic,
            startDurationTable6,
            endDurationTable6,
            responsibleTable6str,
            table7Topic,
            startDurationTable7,
            endDurationTable7,
            responsibleTable7str,
            table8Topic,
            startDurationTable8,
            endDurationTable8,
            responsibleTable8str,
            table9Topic,
            startDurationTable9,
            endDurationTable9,
            responsibleTable9str,
            table10Topic,
            startDurationTable10,
            endDurationTable10,
            responsibleTable10str,
            table11Topic,
            startDurationTable11,
            endDurationTable11,
            responsibleTable11str,
            table12Topic,
            startDurationTable12,
            endDurationTable12,
            responsibleTable12str,
            table13Topic,
            startDurationTable13,
            endDurationTable13,
            responsibleTable13str,
            table14Topic,
            startDurationTable14,
            endDurationTable14,
            responsibleTable14str,
            table15Topic,
            startDurationTable15,
            endDurationTable15,
            responsibleTable15str


        }).then(response => {
            console.log(response.data);
            // Handle success, if needed
        })
            .catch(error => {
                console.error('There was an error!', error);
                // Handle error, if needed
            });
        // switchToCSDBudget();


    }
    useEffect(() => {
        console.log("person1" + person1)
        console.log("person2" + person2)
        console.log("person3" + person3)
        // 'person1', 'person2', 'person3' will have the updated values here
        const names = [
            person1 !== '' ? person1 : null,
            person2 !== '' ? person2 : null,
            person3 !== '' ? person3 : null,
        ].filter(name => name !== null);

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
                    setTable1Topic('');
                    setStartDurationTable1(null);
                    setEndDurationTable1(null);
                    setResponsibleTable1('');
                    break;
                case 1:
                    setTable2Topic('');
                    setStartDurationTable2(null);
                    setEndDurationTable2(null);
                    setResponsibleTable2('');
                    break;
                case 2:
                    setTable3Topic('');
                    setStartDurationTable3(null);
                    setEndDurationTable3(null);
                    setResponsibleTable3('');
                    break;
                case 3:
                    setTable4Topic('');
                    setStartDurationTable4(null);
                    setEndDurationTable4(null);
                    setResponsibleTable4('');
                    break;
                case 4:
                    setTable5Topic('');
                    setStartDurationTable5(null);
                    setEndDurationTable5(null);
                    setResponsibleTable5('');
                    break;
                case 5:
                    setTable6Topic('');
                    setStartDurationTable6(null);
                    setEndDurationTable6(null);
                    setResponsibleTable6('');
                    break;
                case 6:
                    setTable7Topic('');
                    setStartDurationTable7(null);
                    setEndDurationTable7(null);
                    setResponsibleTable7('');
                    break;
                case 7:
                    setTable8Topic('');
                    setStartDurationTable8(null);
                    setEndDurationTable8(null);
                    setResponsibleTable8('');
                    break;
                case 8:
                    setTable9Topic('');
                    setStartDurationTable9(null);
                    setEndDurationTable9(null);
                    setResponsibleTable9('');
                    break;
                case 9:
                    setTable10Topic('');
                    setStartDurationTable10(null);
                    setEndDurationTable10(null);
                    setResponsibleTable10('');
                    break;
                case 10:
                    setTable11Topic('');
                    setStartDurationTable11(null);
                    setEndDurationTable11(null);
                    setResponsibleTable11('');
                    break;
                case 11:
                    setTable12Topic('');
                    setStartDurationTable12(null);
                    setEndDurationTable12(null);
                    setResponsibleTable12('');
                    break;
                case 12:
                    setTable13Topic('');
                    setStartDurationTable13(null);
                    setEndDurationTable13(null);
                    setResponsibleTable13('');
                    break;
                case 13:
                    setTable14Topic('');
                    setStartDurationTable14(null);
                    setEndDurationTable14(null);
                    setResponsibleTable14('');
                    break;
                case 14:
                    setTable15Topic('');
                    setStartDurationTable15(null);
                    setEndDurationTable15(null);
                    setResponsibleTable15('');
                    break;
                default:
                // Handle other cases if needed
            }

        }
    };

    const getStartDuration = (index) => {
        switch (index) {
            case 0:
                return startDurationTable1;
            case 1:
                return startDurationTable2;
            case 2:
                return startDurationTable3;
            case 3:
                return startDurationTable4;
            case 4:
                return startDurationTable5;
            case 5:
                return startDurationTable6;
            case 6:
                return startDurationTable7;
            case 7:
                return startDurationTable8;
            case 8:
                return startDurationTable9;
            case 9:
                return startDurationTable10;
            case 10:
                return startDurationTable11;
            case 11:
                return startDurationTable12;
            case 12:
                return startDurationTable13;
            case 13:
                return startDurationTable14;
            case 14:
                return startDurationTable15;
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
                return endDurationTable1;
            case 1:
                return endDurationTable2;
            case 2:
                return endDurationTable3;
            case 3:
                return endDurationTable4;
            case 4:
                return endDurationTable5;
            case 5:
                return endDurationTable6;
            case 6:
                return endDurationTable7;
            case 7:
                return endDurationTable8;
            case 8:
                return endDurationTable9;
            case 9:
                return endDurationTable10;
            case 10:
                return endDurationTable11;
            case 11:
                return endDurationTable12;
            case 12:
                return endDurationTable13;
            case 13:
                return endDurationTable14;
            case 14:
                return endDurationTable15;
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
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>ขั้นตอนการและแผนการดำเนินโครงการ</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* หัวข้อ index */}
                            {Array.from({ length: TopictableCount }).map((_, index) => (
                                <tr style={{ backgroundColor: "white" }}>
                                    <td className='head-side-td'>
                                        <div>
                                            {`หัวข้อที่ ${index + 1}`}
                                        </div>
                                    </td>
                                    <td className='back-side-td'>
                                        <Form.Label>การดำเนินงาน : </Form.Label>
                                        <Form.Control
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
                                            value={
                                                (() => {
                                                    switch (index) {
                                                        case 0:
                                                            return table1Topic;
                                                        case 1:
                                                            return table2Topic;
                                                        case 2:
                                                            return table3Topic;
                                                        case 3:
                                                            return table4Topic;
                                                        case 4:
                                                            return table5Topic;
                                                        case 5:
                                                            return table6Topic;
                                                        case 6:
                                                            return table7Topic;
                                                        case 7:
                                                            return table8Topic;
                                                        case 8:
                                                            return table9Topic;
                                                        case 9:
                                                            return table10Topic;
                                                        case 10:
                                                            return table11Topic;
                                                        case 11:
                                                            return table12Topic;
                                                        case 12:
                                                            return table13Topic;
                                                        case 13:
                                                            return table14Topic;
                                                        case 14:
                                                            return table15Topic;
                                                        default:
                                                            return '';
                                                    }
                                                })()
                                            }
                                            size="sm"
                                            type="text"
                                            placeholder={`การดำเนินงาน ${index + 1}`}
                                        />
                                        <div style={{ marginTop: '2%', display: 'flex', alignItems: 'center' }}>
                                            <Form.Label>ระยะเวลา : </Form.Label>
                                            <div>
                                                <DatePicker
                                                    selected={getStartDuration(index)}
                                                    onChange={(date) => setStartDuration(index, date)}
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="เลือกวันเริ่มต้น"
                                                    className="form-control"
                                                    minDate={start_prepare}
                                                    maxDate={end_event}
                                                    popperPlacement="top-start"
                                                    isClearable
                                                    selectsStart
                                                    startDate={getStartDuration(index)}
                                                    endDate={getEndDuration(index)}
                                                />
                                            </div>
                                            <span style={{ marginLeft: '1%', marginRight: '1%' }}>-</span>
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
                                        {index == 0 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable1.includes(name)}
                                                                onChange={handleresponsibleTable1Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {index == 1 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable2.includes(name)}
                                                                onChange={handleresponsibleTable2Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }

                                        {index == 2 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable3.includes(name)}
                                                                onChange={handleresponsibleTable3Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }

                                        {index == 3 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable4.includes(name)}
                                                                onChange={handleresponsibleTable4Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {index == 4 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable5.includes(name)}
                                                                onChange={handleresponsibleTable5Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }

                                        {index == 5 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable6.includes(name)}
                                                                onChange={handleresponsibleTable6Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }

                                        {index == 6 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable7.includes(name)}
                                                                onChange={handleresponsibleTable7Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }

                                        {index == 7 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable8.includes(name)}
                                                                onChange={handleresponsibleTable8Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }

                                        {index == 8 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable9.includes(name)}
                                                                onChange={handleresponsibleTable9Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }

                                        {index == 9 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable10.includes(name)}
                                                                onChange={handleresponsibleTable10Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {index == 10 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable11.includes(name)}
                                                                onChange={handleresponsibleTable11Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {index == 11 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable12.includes(name)}
                                                                onChange={handleresponsibleTable12Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {index == 12 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable13.includes(name)}
                                                                onChange={handleresponsibleTable13Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {index == 13 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable14.includes(name)}
                                                                onChange={handleresponsibleTable14Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {index == 14 &&
                                            <div style={{ display: 'inline-block' }}>
                                                <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                                {personNames.map((name, index) => (
                                                    <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={name}
                                                                checked={responsibleTable15.includes(name)}
                                                                onChange={handleresponsibleTable15Change}
                                                            />
                                                            {` ` + name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                    </td>
                                </tr>
                            ))}


                            {TopictableCount < 15 && (
                                <Button variant="primary" className="ml-5 mb-3" onClick={increasePrinciplesAndReasons}>
                                    เพิ่มหัวข้อ
                                </Button>
                            )}
                            {TopictableCount > 1 && (
                                <Button variant="danger" className="ml-5 mb-3" onClick={decreasePrinciplesAndReasons}>
                                    ลดหัวข้อ
                                </Button>
                            )}






                        </tbody>
                    </Table>
                    <div>

                        <Button onClick={createProject} type="submit" variant="info">อัพขึ้นสู่ระบบ</Button>
                    </div>
                </Card>
            </Col>
        </>

    );
}
export default CSD_timestep

