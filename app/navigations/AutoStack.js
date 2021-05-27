import React from "react";
import { createBottomTabNavigator, createStackNavigator } from "@react-navigation/stack"
import Autorizaciones from "../screens/Autorizaciones";

const Stack = createStackNavigator();

export default function AutoStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="autorizaciones"
                component={Autorizaciones}
                options={{title: "AUTORIZACION"}}
            />
        </Stack.Navigator>
    );
}