import React from 'react';
import Navbar from '../components/NavBar2.js';
import Card from '../components/Card.js';
import '../styles/ranking.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Ranking extends React.Component {

    componentDidMount() {
        if (!cookies.get('email_usuario')) {
            window.alert('Necesita iniciar sesion para usar esta función')
            window.location.href = "../login"
        }
    }

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