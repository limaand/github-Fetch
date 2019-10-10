import React, { Component } from 'react'

export default class Search extends Component {
  state = { text:''} ;


   onChange = (e) => this.setState({[e.target.name]:e.target.value});
   onSubmit(e){
       e.preventDefault();
       console.log(this.state.text);
       this.props.searchUsers(this.state.text);
       this.setState({text:''});
   }  
   
   
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit.bind(this)} >
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type='submit' value="Search" className="btn btn-dark btn-block" />

                </form>
            </div>
        )
    }
}

