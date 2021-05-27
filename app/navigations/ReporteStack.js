import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Reportes from "../screens/Reportes";

const Stack = createStackNavigator();

export default function ReporteStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="reportes"
                component={Reportes}
                options={{title: "REPORTES"}}
            />
        </Stack.Navigator>
    );
}
