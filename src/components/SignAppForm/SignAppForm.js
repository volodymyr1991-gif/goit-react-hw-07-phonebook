import React, { Component } from "react";

export default class SignAppForm extends Component {
  state = {
    email: "",
    password:"",
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e =>{
      this.setState({password: e.target.value})
  }

  handleChange = e =>{
      const {name,value} = e.target;
      this.setState({
          [name]:value,
      })
  }

  hundleSubmit = (e) => {
    e.preventDefault();
  };

  render() {

    const {email,password}=this.state

    return (
      <form onSubmit={this.hundleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={this.handleChange} name='email'/>
        </label>

        <label>
          Pasword
          <input type="password" value={password} onChange={this.handleChange} name='password'/>
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
