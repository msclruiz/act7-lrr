import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Credito from "../screens/Credito";

const Stack = createStackNavigator();

export default function CreditoStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="credito"
                component={Credito}
                options={{title: "CREDITO"}}
            />
        </Stack.Navigator>
    );

}