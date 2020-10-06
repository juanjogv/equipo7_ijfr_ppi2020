import React from 'react';
import Table from '../components/Table.js';
import Navbar from '../components/NavBar2.js';

class Ranking extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Table/>
            </div>
        );
    }
}

export default Ranking;