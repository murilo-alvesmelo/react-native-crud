import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Button } from '@rneui/base';
import { Avatar, Icon, ListItem } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";

import users from "../data/users";
import UsersContext from "../context/UsersContext";

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDelete(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,

                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({item: user}){
        return (
                <ListItem 
                    Component={TouchableScale}
                    friction={90}
                    tension={100}
                    activeScale={0.5}
                    bottomDivider 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    >
                    
                    <Avatar source={{uri: user.avatarUrl}}/>
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Button
                        onPress={() => props.navigation.navigate('UserForm', user)}
                        type="clear"
                        icon={<Icon name='edit' size={25} color='orange' />}
                    />
                    <Button
                        onPress={() => confirmUserDelete(user)}
                        type="clear"
                        icon={<Icon name='delete' size={25} color='red' />}
                    />
                </ListItem>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={users => users.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}