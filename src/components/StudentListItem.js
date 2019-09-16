import React, {Component} from 'react';

export default class StudentListItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const id = this.props.studentItem.id;
        return(
            <tr key={id}>
                {/* <td>{this.props.studentItem.id}</td>
                <td>{this.props.studentItem.name}</td>
                <td>{this.props.studentItem.cgpa}</td> */}
                <td>
                    <button onClick = {() => this.props.onShow(id)}>{id}</button>
                </td>
            </tr>
        )
    }
}