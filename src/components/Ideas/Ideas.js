import React, {Component} from "react";
import {AppContext} from "../../App";
import Idea from "./Idea/Idea";
import ButtonBar from "./ButtonBar/ButtonBar";
import BottomBar from "./BottomBar/BottomBar";
import OnBoarding from "./OnBoarding/OnBoarding";
import NewIdea from "./NewIdea/NewIdea";
import axios from "axios";
import {ideasStore} from "../../firebaseApi";

class Ideas extends Component {
  constructor(props) {
    super(props);
    this.nextIdea = this.nextIdea.bind(this);
    this.prevIdea = this.prevIdea.bind(this);
    this.randomIdea = this.randomIdea.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.newIdea = this.newIdea.bind(this);
    this.state = {
      counter: 1,
      ideaArrayPosition: 0,
      newIdea: false,
      numIdeas: null,
      ideas: [],
      account: props.account ? props.account.username : {}
    };
  }

  componentWillMount() {
    let localCounter = parseInt(localStorage.getItem("counter"));
    if (localCounter) {
      this.setState({counter: localCounter});
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem("counter", this.state.counter);
  }

  componentDidMount() {
    this.retrieveIdeaFirestoreHandler();
    this.randomIdea();
    //this.retrieveIdeaHandler().then(this.randomIdea())
  }

  retrieveIdeaFirestoreHandler = () => {
    ideasStore.get()
      .then(responses => {
          responses.forEach(idea => {
            console.log(idea.id, '=>', idea.data());
          });
          this.setState({
            ideas: responses.docs.map(doc => {
              const rec = doc.data();
              rec.id = doc.id;
              return rec;
            }),
            numIdeas: responses.docs.length,
            ideaArrayPosition: 0
          });
          console.log('ideas',)
        }
      )
      .catch(error => (console.log('[retrieveIdeaFirestoreHandler] failed to retrieve ideas', error)))
  };

  /**
   * Retrievs the list of ideas from the server.
   * @returns {Promise<AxiosResponse<any> | never>}
   */
  retrieveIdeaHandler = () => {
    // retrieves the list of ideas from server asynchronous and returnes a AxiosPromise
    return axios.get("https://my-json-server.typicode.com/jberends/jotdown-react/ideas")
      .then(response => {
        this.setState({
          ideas: response.data,
          numIdeas: response.data.length,
          ideaArrayPosition: 0
        })
      })
      .catch(error => (console.log('[retrieveIdeaHandler] failed to retrieve ideas', error)))
  };

  nextIdea() {
    const {ideaArrayPosition, numIdeas} = this.state;
    if (ideaArrayPosition === numIdeas - 1) {
      this.setState(prevState => ({
        ideaArrayPosition: 0,
        counter: prevState.counter + 1,
        newIdea: false
      }));
    } else {
      this.setState(prevState => ({
        ideaArrayPosition: prevState.ideaArrayPosition + 1,
        counter: prevState.counter + 1,
        newIdea: false
      }));
    }
  }

  prevIdea() {
    const {ideaArrayPosition, numIdeas} = this.state;
    if (ideaArrayPosition === 0) {
      this.setState(prevState => ({
        ideaArrayPosition: numIdeas - 1,
        counter: prevState.counter + 1,
        newIdea: false
      }));
    } else {
      this.setState(prevState => ({
        ideaArrayPosition: prevState.ideaArrayPosition - 1,
        counter: prevState.counter + 1,
        newIdea: false
      }));
    }
  }

  randomIdea() {
    const {numIdeas} = this.state;
    let randomIdea= this.state.ideaArrayPosition;
    while (randomIdea === this.state.ideaArrayPosition) {
      randomIdea = Math.floor(Math.random() * Math.floor(numIdeas - 1));
    }
    this.setState(prevState => ({
      ideaArrayPosition: randomIdea,
      counter: prevState.counter + 1,
      newIdea: false
    }));
  }

  newIdea() {
    // displays the new idea component, instead of idea.
    this.setState({newIdea: true});
  }

  resetCounter() {
    this.setState({counter: 1});
    localStorage.setItem("counter", 1);
  }

  render() {
    const showIdea = this.state.newIdea ? (
      <NewIdea postIdeaHandler={this.postIdeaHandler}/>
    ) : (
      <Idea key={this.state.ideaArrayPosition} idea={this.state.ideas[this.state.ideaArrayPosition]}/>
    );
    const showOnBoarding = (
      <AppContext.Consumer>
        {({registerAccount}) => <OnBoarding registerHandler={registerAccount}/>}
      </AppContext.Consumer>
    );

    return (
      <AppContext.Consumer>
        {({account}) => {
          return (
            <>
              {account && account.username ? showIdea : showOnBoarding}
              <ButtonBar
                nextIdea={this.nextIdea}
                prevIdea={this.prevIdea}
                newIdea={this.newIdea}
                randomIdea={this.randomIdea}
              />
              <BottomBar counter={this.state.counter} resetCounter={this.resetCounter}/>
            </>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Ideas;
