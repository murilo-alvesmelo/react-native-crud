import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import { Icon } from '@rneui/themed';
import { Button } from '@rneui/base';
import { UsersProvider } from './src/context/UsersContext';

const Stack = createNativeStackNavigator();

export default props =>{
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='UserList'
            screenOptions={screenOptions}
            >
          <Stack.Screen 
            name='UserList' 
            component={UserList}
            options={({ navigation }) =>{
              return {
                title: 'Lista de Usuários',
                headerRight:() =>(
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type='clear'
                    icon={<Icon name='add' size={25} color='#fff'/>}
                  />
                )
              }
            }}
          />
          <Stack.Screen 
            name='UserForm'
            component={UserForm}
            options={{
              title: 'Formulario de Usuários'
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}