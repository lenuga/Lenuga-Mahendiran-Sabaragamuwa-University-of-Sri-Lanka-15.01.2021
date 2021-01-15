import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
            name: '',
            username: '',
            email: '',
            password:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost/php-rest-api/user.php?email='+this.state.email+'&password='+this.state.password)
          .then(response => {
            this.setState({ 
                id: response.data.id,
                name: response.data.name,
                username: response.data.username,
                email: response.data.email
             })
          })
          .catch((error) => {
            console.log(error);
          })
      }

    render() {
        return (
            <div>
                <div className="form group">
                <h1>Id: <span>{this.state.id}</span></h1>
                <h1>Name: <span>{this.state.name}</span></h1>
                <h1>Username: <span>{this.state.username}</span></h1>
                <h1>Email: <span>{this.state.email}</span></h1>
                </div>
            </div>
        )
    }
}