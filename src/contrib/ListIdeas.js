import React, {Component} from 'react';
import firestore from "./firestore";

class ListIdeas extends Component {
  constructor() {
    super();
    this.state = {
      ideasList: []
    }
  }

  componentDidMount() {
    this.getIdeas()
  }


  getIdeas = () => {
    const db = firestore.firestore();
    db.collection('ideas').get()
      .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
          });
          this.setState({
            ideaList: snapshot
          })
        }
      )
  };

  renderedIdeasList = () => {
    return this.state.ideasList
  };

  render() {
    return (
      <div>
        {/*<pre>{this.state.ideaList}</pre>*/}
      </div>
    );
  }
}

export default ListIdeas;
