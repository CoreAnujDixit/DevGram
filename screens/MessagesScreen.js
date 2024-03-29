import React from 'react';
import { FlatList, StyleSheet, } from 'react-native'
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';



const messages = [{
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require("../assets/anuj.png")
},
{
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require("../assets/anuj.png")
}
]
function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <ListItem

                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                />}
            />
        </Screen>
    );
}

export default MessagesScreen;

const styles = StyleSheet.create({

})