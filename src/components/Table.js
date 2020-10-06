import React from 'react';
import { Table } from 'react-bootstrap';
import '../styles/Table.css';
import ranking from '../sample/ranking.json';

class Tables extends React.Component {
    state = {
        ranking: ranking
    }

    render() {
        return (
            <div className="contenedort">
                <Table striped bordered hover variant="dark" className="tablat">
                    <thead>
                        <tr>
                            <th>Puesto</th>
                            <th>Puntos</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.ranking.map(ranking =>
                            <tr>
                                <td>{ranking.puesto}</td>
                                <td>{ranking.puntaje}</td>
                                <td>{ranking.nombre}</td>
                            </tr>


                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Tables;