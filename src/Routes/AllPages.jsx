import {NavigationContainer, navigationContainer, StackActions} from "@react-navigation/native";
import {createNativeStackNavigation } from '@react-navigation/native-stack';

import Start from "../Pages/Start";

const Stack = createNativeStackNavigation();

export default function AllPages(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                    }}
                    >

                    <Stack.Screen name="Start" component={Start} />
                    </Stack.Navigator>
        </NavigationContainer>
    );

}