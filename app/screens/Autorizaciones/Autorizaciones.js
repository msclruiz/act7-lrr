import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Autorizaciones() {
    const navigation = useNavigation();
        return (
        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>Autorizaciones</Text>

            <View style={styles.viewBtn}>
                <Button 
                    title="Agregar Autorizacion"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("autorizaciones-agregar")}
                />
            </View>

            <View style={styles.viewBtn}>
                <Button 
                    title="Borrar Autorizacion"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("autorizaciones-borrar")}
                />
            </View>
            <View style={styles.viewBtn}>
                <Button 
                    title="Detalle de Autorizacion"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("autorizaciones-detalle")}
                />
            </View>
            <View style={styles.viewBtn}>
                <Button 
                    title="Editar Autorizacion"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("autorizaciones-editar")}
                />
            </View>

</ScrollView>
);
    }


    const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    btnAddMaestro: {
      marginBottom: 5
    },
    btnStyle: {
      backgroundColor: "#00a680"
    },
    btnContainer: {
      width: "70%"
    },
    viewBtn: {
      flex: 1,
      alignItems: "center",
      marginBottom: 30
    }
  });
