import React from "react";
import { Table } from "react-bootstrap";

class UsersTable extends React.Component {
    render() {
        const righe = this.props.users.map((utente) => {
            return (
                <tr key={utente.id}>
                    <td>{utente.id}</td>
                    <td>{utente.name}</td>
                    <td>{utente.email}</td>
                    <td>{utente.website}</td>
                </tr>
            );
        });
        return (
            <div>
                <h1>Lista utenti</h1>
                <Table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Sito web</th>
                        </tr>
                    </thead>
                    <tbody>
                        {righe}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default UsersTable;