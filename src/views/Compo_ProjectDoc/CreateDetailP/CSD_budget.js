import React, { useState,useEffect } from 'react';
import { Button, Card, Form, Col, Table } from "react-bootstrap";

function CSD_budget() {
    const [listA, setListA] = useState(Array.from({ length: 15 }, () => ''));
    const [listNA, setListNA] = useState(Array.from({ length: 15 }, () => ''));
    const [listTA, setListTA] = useState(Array.from({ length: 15 }, () => ''));
    const [listTPA, setListTPA] = useState(Array.from({ length: 15 }, () => ''));
    const [listSA, setListSA] = useState(Array.from({ length: 15 }, () => ''));

    const [TypeACount, setTypeACount] = useState(1);

    const increaseTypeACount = () => {
        if (TypeACount < 15) {
            setTypeACount(TypeACount + 1);
        }
    };

    const decreaseTypeACount = () => {
        if (TypeACount > 1) {
            setTypeACount(TypeACount - 1);
            updateListA(TypeACount-1, '');
            updateListNA(TypeACount-1, '');
            updateListTA(TypeACount-1, '');
            updateListTPA(TypeACount-1, '');
            updateListSA(TypeACount-1, '');
        }
    };

    const updateListA = (index, value) => {
        setListA(prevListA => {
            const newListA = [...prevListA];
            newListA[index] = value;
            return newListA;
        });
    };

    const updateListNA = (index, value) => {
        setListNA(prevListNA => {
            const newListNA = [...prevListNA];
            newListNA[index] = value;
            updateListSA(index, value, listTA[index], listTPA[index]);
            return newListNA;
        });
    };

    const updateListTA = (index, value) => {
        setListTA(prevListTA => {
            const newListTA = [...prevListTA];
            newListTA[index] = value;
            updateListSA(index, listNA[index], value, listTPA[index]);
            return newListTA;
        });
    };

    const updateListTPA = (index, value) => {
        setListTPA(prevListTPA => {
            const newListTPA = [...prevListTPA];
            newListTPA[index] = value;
            updateListSA(index, listNA[index], listTA[index], value);
            return newListTPA;
        });
    };

    const updateListSA = (index, numPeople, numHours, pricePerHour) => {
        const totalPrice = parseInt(numPeople) * parseInt(numHours) * parseInt(pricePerHour);
        setListSA(prevListSA => {
            const newListSA = [...prevListSA];
            newListSA[index] = isNaN(totalPrice) ? '' : totalPrice;
            return newListSA;
        });
    };

    const [listBT, setListBT] = useState(Array.from({ length: 20 }, () => ''));
    const [listNBT, setListNBT] = useState(Array.from({ length: 20 }, () => ''));
    const [listNNBT, setListNNBT] = useState(Array.from({ length: 20 }, () => ''));
    const [listTBT, setListTBT] = useState(Array.from({ length: 20 }, () => ''));
    const [listTNBT, setListTNBT] = useState(Array.from({ length: 20 }, () => ''));
    const [listTPBT, setListTPBT] = useState(Array.from({ length: 20 }, () => ''));
    const [listSBT, setListSBT] = useState(Array.from({ length: 20 }, () => ''));

    const [TypeBTCount, setTypeBTCount] = useState(1);

    const increaseTypeBTCount = () => {
        if (TypeBTCount < 20) {
            setTypeBTCount(TypeBTCount + 1);
        }
    };

    const decreaseTypeBTCount = () => {
        if (TypeBTCount > 1) {
            setTypeBTCount(TypeBTCount - 1);
            updateListBT(TypeBTCount-1, '');
            updateListNBT(TypeBTCount-1, '');
            updateListNNBT(TypeBTCount-1, '');
            updateListTBT(TypeBTCount-1, '');
            updateListTNBT(TypeBTCount-1, '');
            updateListTPBT(TypeBTCount-1, '');
            updateListSBT(TypeBTCount-1, '');
        }
    };

    const updateListBT = (index, value) => {
        setListBT(prevListBT => {
            const newListBT = [...prevListBT];
            newListBT[index] = value;
            return newListBT;
        });
    };

    const updateListNBT = (index, value) => {
        setListNBT(prevListNBT => {
            const newListNBT = [...prevListNBT];
            newListNBT[index] = value;
            updateListSBT(index, value, listTBT[index], listTPBT[index]);
            return newListNBT;
        });
    };

    const updateListNNBT = (index, value) => {
        setListNNBT(prevListNNBT => {
            const newListNNBT = [...prevListNNBT];
            newListNNBT[index] = value;
            return newListNNBT;
        });
    };

    const updateListTBT = (index, value) => {
        setListTBT(prevListTBT => {
            const newListTBT = [...prevListTBT];
            newListTBT[index] = value;
            updateListSBT(index, listNBT[index], value, listTPBT[index]);
            return newListTBT;
        });
    };

    const updateListTNBT = (index, value) => {
        setListTNBT(prevListTNBT => {
            const newListTNBT = [...prevListTNBT];
            newListTNBT[index] = value;
            return newListTNBT;
        });
    };

    const updateListTPBT = (index, value) => {
        setListTPBT(prevListTPBT => {
            const newListTPBT = [...prevListTPBT];
            newListTPBT[index] = value;
            updateListSBT(index, listNBT[index], listTBT[index], value);
            return newListTPBT;
        });
    };

    const updateListSBT = (index, numPeople, numHours, pricePerHour) => {
        const totalPrice = parseInt(numPeople) * parseInt(numHours) * parseInt(pricePerHour);
        setListSBT(prevListSBT => {
            const newListSBT = [...prevListSBT];
            newListSBT[index] = isNaN(totalPrice) ? '' : totalPrice;
            return newListSBT;
        });
    };
    useEffect(() => {
        console.log("TBT"+listTA)
        console.log("TPBT"+listTPA)
        console.log("SBT"+listSA)
    }, [listTA,listTPA,listSA]);

    return (
        <>
            <div style={{width: "79%", marginLeft: "1%"}}>
                <Card>
                    <Table striped>
                        <thead>
                            <tr>
                                <th style={{fontSize: "16px", color: "black"}}>งบประมาณของโครงการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td' style={{color: "white", fontWeight: "bold"}}>
                                    <div>หมวดค่าตอบแทน</div></td>
                                <td className='back-side-td'>
                                    <Table striped="columns">
                                        <thead style={{backgroundColor: "rgba(255, 139, 19, 0)"}}>
                                            <tr style={{backgroundColor: "rgba(255, 139, 19, 1)"}}>
                                                <th style={{width: "30%", color: "white", fontWeight: "bold"}}>รายการค่าใช้จ่าย</th>
                                                <th style={{width: "10%", color: "white", fontWeight: "bold"}}>จำนวน(คน)</th>
                                                <th style={{width: "2%"}}></th>
                                                <th style={{width: "11%", color: "white", fontWeight: "bold"}}>จำนวน(ชั่วโมง)</th>
                                                <th style={{width: "5%"}}></th>
                                                <th style={{width: "19%", color: "white", fontWeight: "bold"}}>ราคา(ต่อชั่วโมง)(บาท)</th>
                                                <th style={{width: "20%", color: "white", fontWeight: "bold"}}>ราคาสุทธิ(บาท)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: TypeACount }).map((_, index) => (
                                                <tr key={index} style={{ backgroundColor: "white" }}>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`รายการที่ ${index + 1}`}
                                                            onChange={(event) => {
                                                                updateListA(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`จำนวน`}
                                                            onChange={(event) => {
                                                                updateListNA(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div>คน</div></td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`จำนวน`}
                                                            onChange={(event) => {
                                                                updateListTA(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div>ชั่วโมง</div></td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`ราคารายการที่ ${index + 1}`}
                                                            onChange={(event) => {
                                                                updateListTPA(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            value={listSA[index]}
                                                            disabled
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    {TypeACount < 15 && (
                                        <Button variant="primary" className="ml-5 mb-3" onClick={increaseTypeACount}>
                                            <div>เพิ่มรายการค่าตอบแทน</div>
                                        </Button>
                                    )}
                                    {TypeACount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreaseTypeACount}>
                                            <div>ลดรายการค่าตอบแทน</div>
                                        </Button>
                                    )}
                                </td>
                            </tr>

                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td' style={{color: "white", fontWeight: "bold"}}>
                                    <div>หมวดค่าใช้สอย</div>
                                    <div>(มีจำนวนเวลา)</div></td>
                                
                                <td className='back-side-td'>
                                    <Table striped="columns">
                                        <thead style={{backgroundColor: "rgba(255, 139, 19, 0)"}}>
                                            <tr style={{backgroundColor: "rgba(255, 139, 19, 1)"}}>
                                                <th style={{width: "30%", color: "white", fontWeight: "bold"}}>รายการค่าใช้จ่าย</th>
                                                <th style={{width: "11%", color: "white", fontWeight: "bold"}}>จำนวน(หน่วย)</th>
                                                <th style={{width: "10%", color: "white", fontWeight: "bold"}}>หน่วยนับ</th>
                                                <th style={{width: "10%", color: "white", fontWeight: "bold"}}>จำนวน(เวลา)</th>
                                                <th style={{width: "10%", color: "white", fontWeight: "bold"}}>หน่วยนับ</th>
                                                <th style={{width: "16%", color: "white", fontWeight: "bold"}}>ราคา(ต่อหน่วย)(บาท)</th>
                                                <th style={{width: "25%", color: "white", fontWeight: "bold"}}>ราคาสุทธิ(บาท)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: TypeBTCount }).map((_, index) => (
                                                <tr key={index} style={{ backgroundColor: "white" }}>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`รายการที่ ${index + 1}`}
                                                            onChange={(event) => {
                                                                updateListBT(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`จำนวน`}
                                                            onChange={(event) => {
                                                                updateListNBT(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`หน่วย`}
                                                            onChange={(event) => {
                                                                updateListNNBT(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`จำนวน`}
                                                            onChange={(event) => {
                                                                updateListTBT(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`หน่วย`}
                                                            onChange={(event) => {
                                                                updateListTNBT(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`ราคารายการที่ ${index + 1}`}
                                                            onChange={(event) => {
                                                                updateListTPBT(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            value={listSBT[index]}
                                                            disabled
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    {TypeBTCount < 15 && (
                                        <Button variant="primary" className="ml-5 mb-3" onClick={increaseTypeBTCount}>
                                            <div>เพิ่มรายการค่าใช้สอย</div>
                                        </Button>
                                    )}
                                    {TypeBTCount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreaseTypeBTCount}>
                                            <div>ลดรายการค่าใช้สอย</div>
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div>
                        <Button type="submit" variant="info">อัพขึ้นสู่ระบบ</Button>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default CSD_budget;
