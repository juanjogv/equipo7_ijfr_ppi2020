import React from 'react';
import Navbar from '../components/NavBar2.js';
import Card from '../components/Card.js';
import '../styles/ranking.css';

class Ranking extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Card className="targeta" />
            </div>
        );
    }
}

export default Ranking;