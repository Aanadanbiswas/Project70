import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {Header} from 'react-native-elements'

class ReadStory extends React.Components{
    render(){
        return(
            <View>
                <Header backgroundColor = {"8D21CA"}
                centerComponent = {{text: 'Story hub', style: {color: "#000000", fontSize: 25}}} />
                <TextInput style = {Styles.TitleBox}
                placeholder = "Title of the book" />
                <TextInput style = {Styles.AuthorBox}
                placeholder = "Author of the story" />
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    TitleBox: {
        borderWidth: 1.5,
        width: 100,
        height: 10
    },
    AuthorBox: {
        borderWidth: 1.5,
        width: 100,
        height: 10
    }
})

export default ReadStory