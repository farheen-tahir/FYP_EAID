import React from 'react'
import "./donations.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";

const Donations = () => {
    return (
        <div className='home'>
        <Sidebar />
        <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
            <div className="listTitle">Latest Donations</div>
            <Table />
        </div>
        </div>
        </div>
    )
}

export default Donations