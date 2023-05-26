// Importação das dependências necessárias para o componente
import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import ResultMedia from "./ResultMedia";
import styles from "./style";



// Definição do componente "Form" como padrão para exportação
export default function Formulario(){

// Criação de estados iniciais utilizando o useState
    const[nota1,setNota1]=useState(null) // estado para armazenar a altura
    const[nota2, setNota2]=useState(null)
    const[nota3, setNota3]=useState(null)
    const[nota4, setNota4]=useState(null) // estado para armazenar o peso
    const[messageMedia, setMessageMedia]=useState("Aguardando Valores...") //estado para armazenar a mensagem de resultado do cálculo
    const[media, setMedia]=useState(null) // estado para armazenar o valor do IMC calculado
    const[textButton, setTextButton]=useState("Calcular") // estado para armazenar o texto do botão



    // Função responsável por realizar o cálculo do IMC
    function MediaCalculator(){
        return setMedia(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)/4).toFixed(2)
    }



// Função responsável por validar se os valores de peso e altura foram preenchidos antes de realizar o cálculo
function validationMedia(){
    if(nota1, nota2, nota3, nota4 !=null){
        MediaCalculator()
        setNota1(null)
        setNota2(null)
        setNota3(null)
        setNota4(null)
        setMessageMedia("Sua Média é igual a:")
        setTextButton("Calcular")
        return
    }
        setMedia(null)
        setTextButton("Calcular")
        setMessageMedia("PREENCHA SUAS NOTAS PARA CALCULAR")
}
    
    // Retorno do componente "Form" que inclui o formulário e o componente personalizado "ResultImc"
    return(

        <View>
            <View style={styles.formContext}>
                <Text>Nota 1</Text>
                 <TextInput onChangeText={setNota1}value={nota1}placeholder="De 0 a 10" keyboardType="numeric"/>


                <Text>Nota 2</Text>
                <TextInput onChangeText={setNota2} value={nota2}placeholder="De 0 a 10" keyboardType= "numeric"/>

                <Text>Nota 3</Text>
                <TextInput onChangeText={setNota3} value={nota3}placeholder="De 0 a 10"keyboardType= "numeric"/>

                <Text>Nota 4</Text>
                <TextInput onChangeText={setNota4} value={nota4}placeholder="De 0 a 10"keyboardType= "numeric"/>

                    <TouchableOpacity onPress={() => {validationMedia()}}>
                <Text>{textButton}</Text>
                 </TouchableOpacity>
                
<ResultMedia messageResultMedia={messageMedia} ResultMedia={media}/> 
            </View>
            
        </View>
    );
}