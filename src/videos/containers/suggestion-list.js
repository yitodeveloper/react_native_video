import React, { Component } from 'react'
import {FlatList, Text} from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'

class SuggestionList extends Component{
    renderEmpty = () => <Empty text="No hay sugerencias :(" />
    itemSeparator = () => <Separator />

    render(){
        const list = [
            {
                key: "1",
                title: "Inside Out"
            },
            {
                key: "2",
                title: "StarWars 7: The force Awakens"
            },
            {
                key: "3",
                title: "Tangled"
            },
            {
                key: "4",
                title: "Titanic"
            },
            {
                key: "5",
                title: "Wishbone"
            }
        ]
        return(
            <Layout
                title="Recomendado para ti"
            >
                <FlatList
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={({item})=>(
                        <Text>{item.title}</Text>
                    )}
                />
            </Layout>
            
        )
    }
}

export default SuggestionList;