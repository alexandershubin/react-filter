import React from 'react';
import {Preloader} from "./Preloader";
import '../img/logo.png';
import {Header} from "./Header";
import {Intro} from "./Intro";
import {Configuration} from "./Configuration";
import {Footer} from "./Footer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false
    };

    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(value) {
    this.setState({loading: Boolean(value)});
  }

  render() {
    return (
      <div>
        {this.state.loading && <Preloader/>}
        <Header/>
        <Intro/>
        <Configuration setLoading={(value) => this.setLoading(value)}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
