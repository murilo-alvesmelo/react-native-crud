import React from "react";
import { Avatar, ListItem } from "@rneui/themed";
import { FlatList, Text, View } from "react-native";

import users from "../data/users";

export default props => {

    function getUserItem({item: users}){
        return (
                <ListItem 
                    bottomDivider 
                    onPress={() => props.navigation.navigate('UserForm', users)}
                    >
                    <Avatar source={{uri: users.avatarUrl}}/>
                    <ListItem.Content>
                        <ListItem.Title>{users.name}</ListItem.Title>
                        <ListItem.Subtitle>{users.email}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={users => users.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}