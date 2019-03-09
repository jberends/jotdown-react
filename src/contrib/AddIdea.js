import React, {Component} from 'react';
import firestore from "./firestore"

class AddIdea extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  addIdea = e => {
    console.log('[addidea]', e);
    e.preventDefault();
    const db = firestore.firestore();
    db.collection('ideas')
      .add({
        title: this.state.title,
        description: this.state.description
      });
    this.setState({
      title: "",
      description: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.addIdea}>
        <input
          type="text"
          name="title"
          placeholder="Title of the idea"
          onChange={this.handleInput}
          value={this.state.title}
        />
        <br/>
        <input
          type="text"
          name="description"
          placeholder="Description of the idea"
          onChange={this.handleInput}
          value={this.state.description}
        />
        <br/>
        <button type="Submit">Submit</button>
      </form>
    );
  }
}

export default AddIdea;
