import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class Cities extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Name</th>
                        <th>Temp</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.friends && this.props.friends.map(friend => {
                        return <tr>
                            {/* <td>{friend._id}</td> */}
                            <td>{friend.name}</td>
                            <td>{friend.temp}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}

export default Cities;