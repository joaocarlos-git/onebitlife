import React from "react";
import { View, ScrollVeiw, Text, Image} from 'react-native'


export default function Start(){
    return(
        <View>
            <ScrollVeiw showVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={require("../../assets/icons/logo3.png")}
                        />
                        <Text>
                            Vamos transformar sua vida{"/n"} em jogo , buscando sempre {"/n"} o melhor nivel.
                        </Text>

                </View>

            </ScrollVeiw>

        </View>

    )
}