import { StyleSheet} from "react-native";
const styles=StyleSheet.create({
    formContext:{
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor:"lightblue",
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        marginTop:30,



    },
    form:{
        width:"100%",
        height:"100%",
        marginTop:30,
        padding:10,
    
    },
    formLabel:{
        color:"red",
        fontSize: 24,
        fontfamily:"time",
        fontWeight:"bold",
        paddingLeft: 20,
    },
    input:{
        width:"90%",
        backgroundColor:"#e0e5e5",
        borderRadius:5,
        margin:12,
        paddingLeft: 10,
        height: 40,

    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        paddingTop: 14,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor:"#ff8210",
    },
    textbuttoncalculator:{
       fontSize: 20,
       color:"#fff",
       fontWeight:"bold",
       textAlign:"center",
       width:"100%",
    },



})
export default styles