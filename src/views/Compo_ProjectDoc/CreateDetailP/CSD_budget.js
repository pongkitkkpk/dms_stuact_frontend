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
    useEffect(() => {
        console.log("TA"+listTA)
        console.log("TPA"+listTPA)
        console.log("SA"+listSA)
    }, [listTA,listTPA,listSA]);

    return (
        <>
            <Col md="9">
                <Card>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>งบประมาณ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หมวดค่าตอบแทน</td>
                                <td className='back-side-td'>
                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th>รายการค่าใช้จ่าย</th>
                                                <th>จำนวน(คน)</th>
                                                <th></th>
                                                <th>จำนวน(ชั่วโมง)</th>
                                                <th></th>
                                                <th>ราคา(ต่อชั่วโมง)</th>
                                                <th>ราคาสุทธิ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: TypeACount }).map((_, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`รายการหมวดค่าตอบแทนที่ ${index + 1}`}
                                                            onChange={(event) => {
                                                                updateListA(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={` ช่องที่ ${index + 1}`}
                                                            onChange={(event) => {
                                                                updateListNA(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>3</td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={` ช่องที่ ${index + 1}`}
                                                            onChange={(event) => {
                                                                updateListTA(index, event.target.value);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>5</td>
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={` ช่องที่ ${index + 1}`}
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
                                            เพิ่มหลักการและเหตุผล
                                        </Button>
                                    )}
                                    {TypeACount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreaseTypeACount}>
                                            ลดหลักการและเหตุผล
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
            </Col>
        </>
    );
}

export default CSD_budget;
