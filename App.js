import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Api from './utils/api'
import Player from './src/player/containers/player'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'
import Loading from './src/sections/components/loading'

export default class App extends Component {
  state = {
    // suggestionList: [],
    // categoryList: [],
  }
  async componentDidMount(){
    
    const categoryList = await Api.getMovies()
    // console.log(categories)
    // console.log(movies)
    // this.setState({
    //   suggestionList: movies,
    //   categoryList: categories,
    // })
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList =  await Api.getSuggestion(432)
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading/>}
          persistor={persistor}
        >
          <Home>
              <Header />
              <Player />          
              <Text>Buscador</Text>
              <CategoryList/>
              <SuggestionList/>
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}

