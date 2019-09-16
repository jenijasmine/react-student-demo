import React, { Component} from 'react';
import Studentlist from './components/Studentlist';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {id:101, name:'Jenifa',cgpa:8.8},
                {id:102, name:'abc',cgpa:7.2},
                {id:103,name:'xyz',cgpa:6.4},
                {id:104,name:'pqr',cgpa:6.7},
                {id:105,name:'def',cgpa:8.6}
            ]
        };
    }
    showStudent = id => {
      
    }

    render() {
        return(
          <div>
              <h3>Students List</h3>
              <Studentlist studentli={this.state.students}
              showStudent = {this.showStudent}/>
          </div>
        );
    }
}