import React from 'react'
import { useState } from 'react';

function DummyApi() {
    const [data, setdata] = useState("");
    const [response, setresponse] = useState("");

    const api = "https://jsonplaceholder.typicode.com/users";
    const server_url = "http://localhost:3000";

    const fetchData = async () => {
        try {
            const response = await fetch(api);
            const jsonData = await response.json();
            setdata(jsonData);
            // setdata(JSON.stringify(jsonData));
            // console.log("normal response :", response)
            // console.log("This is json data : ", jsonData)
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    async function sendDataToBackend() {
        try {
            const response = await fetch(`${server_url}/data`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.status == 202) {
                console.log("Data is sended successfully");
                setresponse(response)
            }
        } catch (error) {
            console.error("Error fetching Data : ", error)
        }
    }
    return (
        <div>
            <h1>Dummy api to server</h1>

            <button onClick={() => fetchData()}>Click here to fetch data</button>
            <div>
                {/* {data ? "Data is here" : "Failed to fetch data"} */}

                {data &&
                    <div>
                        <p>Data is here</p>
                        <p>
                            {JSON.stringify(data)}
                        </p>
                        <button onClick={() => sendDataToBackend()}>send data to backend </button>
                        <div>
                            {response ? "Data is sent to backend successfully" : "Failed to send data to backend"}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default DummyApi