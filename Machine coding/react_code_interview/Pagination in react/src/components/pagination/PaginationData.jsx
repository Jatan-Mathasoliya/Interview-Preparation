import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

function PaginationData() {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [currentPage, setcurrentPage] = useState(1)
    const recordPerPage = 5;


    useEffect(() => {
        axios.get('data.json')
            .then((res) => {
                setdata(res.data);
                setloading(false);
                // console.log(res.data);
            })
            .catch(() => {
                alert('Error while retriving data.')
            })

    }, [])

    const endIndex = currentPage * recordPerPage;
    const startIndex = endIndex - recordPerPage;

    const currentPageData = data.slice(startIndex, endIndex);
    console.log("Currentdata: ", currentPageData)

    const totalPages = Math.ceil(data.length / recordPerPage);
    // console.log("total : ", totalPages)

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>City</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id} </td>
                            <td>{item.first_name} </td>
                            <td>{item.last_name} </td>
                            <td>{item.city} </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination pages={totalPages} currentPage={currentPage} setcurrentPage={setcurrentPage} />
        </div>
    )
}

export default PaginationData