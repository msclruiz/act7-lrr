import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Autorizaciones from "../screens/Autorizaciones/Autorizaciones";
import AutorizacionesAgregar from "../screens/Autorizaciones/AutorizacionesAgregar";
import AutorizacionesBorrar from "../screens/Autorizaciones/AutorizacionesBorrar";
import AutorizacionesDetalle from "../screens/Autorizaciones/AutorizacionesDetalle";
import AutorizacionesEditar from "../screens/Autorizaciones/AutorizacionesEditar";


const Stack = createStackNavigator();

export default function AutoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="autorizaciones"
                component={Autorizaciones}
                options={{title: "SOLICITUD DE AUTORIZACION"}}
            />
             <Stack.Screen
                name="autorizaciones-agregar"
                component={AutorizacionesAgregar}
                options={{title: "AGREGAR AUTORIZACION"}}
            />
              <Stack.Screen
                name="autorizaciones-borrar"
                component={AutorizacionesBorrar}
                options={{title: "BORRAR AUTORIZACION"}}
            />
              <Stack.Screen
                name="autorizaciones-editar"
                component={AutorizacionesDetalle}
                options={{title: "EDITAR AUTORIZACION"}}
            />
              <Stack.Screen
                name="autorizaciones-detalle"
                component={AutorizacionesEditar}
                options={{title: "DETALLE DE AUTORIZACION"}}
            />
        </Stack.Navigator>
    );
}
