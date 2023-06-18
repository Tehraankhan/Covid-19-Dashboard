import React, { useEffect, useState } from 'react'
import Card from './Card'
import './C.css';
function Dashboard() {
    const [data, setdata] = useState([]);
    const [data1, setdata1] = useState([]);
    const getdata = async () => {

        const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const actualdata = await res.json();
        console.log(actualdata.data);
        console.log(actualdata.data.regional);
        console.log(actualdata.data.summary);
        setdata1(actualdata.data.summary);
        setdata(actualdata.data.regional);

    }


    useEffect(() => {

        getdata();

    }, []

    );
    return (

        <>
            <h1 className='Title'>Covid-19 Dashboard</h1>

            <div className='Container'>


                <ul>
                    <li>
                        <Card title="Total cases" value={data1.total} />
                    </li>
                    <li>
                        <Card title="Confirmed" value={data1.confirmedCasesIndian} />
                    </li>
                    <li>
                        <Card title="Recoverd" value={data1.discharged} />
                    </li>
                </ul>
            </div>
            <div className='Container2'>



                <ul style={{ padding: "0px 200px" }}>

                    <li>
                        <Card title="Death" value={data1.deaths} />
                    </li>
                    <li>
                        <Card title="Active" value={data1.confirmedCasesIndian - data1.discharged - data1.deaths} />
                    </li>


                </ul>
            </div>




            <div className="outer-wrapper">
                <div className="table-wrapper">

                    <table>
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Active</th>
                                <th>Death</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currentelement, index) => {

                                    return (
                                        <tr key={index}>
                                            <td>{currentelement.loc}</td>
                                            <td >{currentelement.confirmedCasesIndian}</td>
                                            <td >{currentelement.confirmedCasesIndian - currentelement.discharged - currentelement.deaths}</td>
                                            <td >{currentelement.deaths}</td>
                                        </tr>


                                    );

                                }
                                )
                            }





                        </tbody>
                    </table>
                </div>
            </div>










        </>


    );



}

export default Dashboard;