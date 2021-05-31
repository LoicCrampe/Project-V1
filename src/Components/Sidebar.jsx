import React from 'react'
import Table from 'react-bootstrap/Table'

function SideBar() {
    return <div className="SideBar col-2 cursor-pointer">
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Channels Favoris :</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Channel 1</td>
                </tr>
                <tr>
                    <td>Channel 2</td>
                </tr>
                <tr>
                    <td>Channel 3</td>
                </tr>
                <tr>
                    <td>Channel 4</td>
                </tr>
                <tr>
                    <td>Channel 5</td>
                </tr>
                <tr>
                    <td>Channel 6</td>
                </tr>
                <tr>
                    <td>Channel 7</td>
                </tr>
            </tbody>
        </Table>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Channels :</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Channel 1</td>
                </tr>
                <tr>
                    <td>Channel 2</td>
                </tr>
                <tr>
                    <td>Channel 3</td>
                </tr>
                <tr>
                    <td>Channel 4</td>
                </tr>
                <tr>
                    <td>Channel 5</td>
                </tr>
                <tr>
                    <td>Channel 6</td>
                </tr>
                <tr>
                    <td>Channel 7</td>
                </tr>
            </tbody>
        </Table>
    </div>
}

export default SideBar;