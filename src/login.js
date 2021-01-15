import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            useremail: '',
            userpassword: ''
        }
    }

    onChangeUserEmail(e) {
        this.setState({
            useremail: e.target.value
        });
    }

    onChangeUserPassword(e) {
        this.setState({
            userpassword: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
        axios.post('http://localhost/php-rest-api/login.php?email='+this.state.useremail+'&password='+this.state.userpassword)
          .then(res => {
            const message = res.data.message;
            alert(message);

            if(message === 'Login success') {
                window.location = '/home';
            }
          });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <div class="form-group">
                    <input type="text" placeholder="email" value={this.state.useremail} onChange={this.onChangeUserEmail}/>
                </div> 
                <div class="form-group">
                    <input type="text" placeholder="password" value={this.state.userpassword} onChange={this.onChangeUserPassword}/>
                </div>
                    <button type="submit" class="btn btn-success">Login</button>
                </form>
            </div>
        )
    }
}
