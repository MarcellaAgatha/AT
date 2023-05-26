import React from "react";
import {View, Text} from 'react-native';
import styles from "./style";

export default function Title(){ 
    return(
        <View>
             <Text style={styles.boxTitulo}>Calcular Media</Text>
        </View>
    )
}