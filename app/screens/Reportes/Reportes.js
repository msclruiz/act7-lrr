import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Reportes() {
    const navigation = useNavigation();
        return (
        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>Reportes</Text>

            <View style={styles.viewBtn}>
                <Button 
                    title="Agregar Reporte"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("reportes-agregar")}
                />
            </View>

            <View style={styles.viewBtn}>
                <Button 
                    title="Borrar Reporte"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("reportes-borrar")}
                />
            </View>
            <View style={styles.viewBtn}>
                <Button 
                    title="Detalle de Reporte"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("reportes-detalle")}
                />
            </View>
            <View style={styles.viewBtn}>
                <Button 
                    title="Editar Reporte"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("reportes-editar")}
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