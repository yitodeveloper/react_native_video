import React, {Component} from 'react'
import { Text } from 'react-native'
import {connect} from 'react-redux'

import Home from './screens/containers/home'
import Header from './sections/components/header'
import SuggestionList from './videos/containers/suggestion-list'
import CategoryList from './videos/containers/category-list'
import Api from '../utils/api'

import Movie from './screens/containers/movie'


class AppLayout extends Component{
    async componentDidMount(){
    
        const categoryList = await Api.getMovies()
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload: {
            categoryList
          }
        })
        const suggestionList =  await Api.getSuggestion(432)
        this.props.dispatch({
          type: 'SET_SUGGESTION_LIST',
          payload: {
            suggestionList
          }
        })
      }
    render() {
        if(this.props.selectedMovie){
            return  <Movie/>
        }

        return (
            <Home>
                <Header />
                <Text>Buscador</Text>
                <CategoryList/>
                <SuggestionList/>
            </Home>
        )
    }
}

function mapStateToProps(state){
    return{
        selectedMovie: state.selectedMovie,
    }
}
export default connect(mapStateToProps)(AppLayout);
