import React from "react";
import { Text } from "react-native";


export default props => {
    return(
        <Text>Usuário: {props.route.params.name}</Text>
    )
}