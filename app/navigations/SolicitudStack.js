import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Solicitud from "../screens/Solicitud/Solicitud";
import SolicitudAgregar from "../screens/Solicitud/SolicitudAgregar";
import SolicitudBorrar from "../screens/Solicitud/SolicitudBorrar";
import SolicitudDetalle from "../screens/Solicitud/SolicitudDetalle";
import SolicitudEditar from "../screens/Solicitud/SolicitudEditar";


const Stack = createStackNavigator();

export default function SolicitudStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="solicitud"
                component={Solicitud}
                options={{title: "SOLICITUD DE PROVISION"}}
            />
             <Stack.Screen
                name="solicitud-agregar"
                component={SolicitudAgregar}
                options={{title: "AGREGAR SOLICITUD"}}
            />
              <Stack.Screen
                name="solicitud-borrar"
                component={SolicitudBorrar}
                options={{title: "BORRAR SOLICITUD"}}
            />
              <Stack.Screen
                name="solicitud-editar"
                component={SolicitudEditar}
                options={{title: "EDITAR SOLICITUD"}}
            />
              <Stack.Screen
                name="solicitud-detalle"
                component={SolicitudDetalle}
                options={{title: "DETALLE DE SOLICITUD"}}
            />
        </Stack.Navigator>
    );
}
