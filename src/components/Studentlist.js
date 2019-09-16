import React, {Component} from 'react';
import StudentListItem from './StudentListItem';

export default class Studentlist extends Component {
    constructor(props){
        super(props);
    }

    
    render() {
        let studentItems =
        this.props.studentli.map((s,n)=>
            <StudentListItem studentItem = {s} 
            key ={s.id}
            onShow = { this.props.showStudent}/>
        );
         return(
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Cgpa</th>
                      {/* <th>Actions</th> */}
                  </tr>
              </thead>
              <tbody>
                  {studentItems}
                  </tbody>
          </table>
         );
    }
}