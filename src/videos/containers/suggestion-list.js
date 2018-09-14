import React, { Component } from 'react'
import {FlatList, Text} from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'

class SuggestionList extends Component{
    renderEmpty = () => <Empty text="No hay sugerencias :(" />
    itemSeparator = () => <Separator />
    renderItem = ({item}) => (
        <Suggestion {...item} />
    )
    keyExtractor = (item) => (
        item.id.toString()
    )

    render(){
        // const list = [
        //     {
        //         key: "1",
        //         title: "Inside Out"
        //     },
        //     {
        //         key: "2",
        //         title: "StarWars 7: The force Awakens"
        //     },
        //     {
        //         key: "3",
        //         title: "Tangled"
        //     },
        //     {
        //         key: "4",
        //         title: "Titanic"
        //     },
        //     {
        //         key: "5",
        //         title: "Wishbone"
        //     }
        // ]
        return(
            <Layout
                title="Recomendado para ti"
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
            
        )
    }
}

export default SuggestionList;