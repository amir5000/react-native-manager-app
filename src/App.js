import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCmLAUJ10AR7VSQT6gRKpRTt_3Pjz6WP10",
      authDomain: "manager-64de4.firebaseapp.com",
      databaseURL: "https://manager-64de4.firebaseio.com",
      storageBucket: "manager-64de4.appspot.com",
      messagingSenderId: "239110067634"
    };
    firebase.initializeApp(config);

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
