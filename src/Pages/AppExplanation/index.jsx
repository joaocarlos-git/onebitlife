import React from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native-gesture-handler";
import DefaultButton from "../../components/common/DefaultButton";

export default function AppExplanation(){
    function handleSetShowHome(){
        console.log("Botão clicado");
    }

return(
    <View style={StyleSheet.container}>
        <ScrollView>
            <View style={{alignItems: "center"}}>
               <Text style={StyleSheet.title}>
                    Antes, deixa {"\n"} eu te explicar...
                </Text> 
                <Text style={StyleSheet.descriptionCta}>
                    Pronto(a) para subir de nível na vida?
                </Text>
                <Text style={StyleSheet.description}>
                    Na próxima tela você vai poder escolher{"\n"} seus 4 hábitos de forma individual.
                </Text>
                <DefaultButton
                buttonText={"Continuar"}
                handlePress={handleSetShowHome}
                width={250}
                height={50}
                />
            </View>
        </ScrollView>
    </View>
);

}

const styles = StyleSheet.create({
 container: {
    flex:1,
    backgoundColor: "rgba(21,21,21,0.98)"
 },
title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 40,
},
descriptionCta:{
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBotton: 10
},
});