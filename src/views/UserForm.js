import React, { useContext, useState } from "react";
import { Button, Text } from "react-native";
import { TextInput, View, StyleSheet } from "react-native";
import UsersContext from "../context/UsersContext";


export default ({ route, navigation }) => {

    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

    return(
        <View style={style.form}>
            <Text style={style.text}>Nome:</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder='Informe o Nome'
                value={user.name}
            />
            <Text style={style.text}>Email:</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder='Informe o Email'
                value={user.email}
            />
            <Text style={style.text}>URL do Avatar:</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder='Informe a URL do Avatar'
                value={user.avatarUrl}
            />

            <Button 
                title="Salvar"
                onPress={() =>{
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}


const style = StyleSheet.create({
    form: {
        padding: 10,
    },
    text: {
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    }
})