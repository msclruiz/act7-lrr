import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Solicitud from "../screens/Solicitud";

const Stack = createStackNavigator();

export default function SolicitudStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="solicitud"
                component={Solicitud}
                options={{title: "SOLICITUD DE PROVISION"}}
            />
        </Stack.Navigator>
    );
}
