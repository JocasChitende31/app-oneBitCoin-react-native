import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters:{
         width: '90%',
         flexDirection: 'row',
         paddingVertical: 15,
         justifyContent: 'space-evenly'
    },
    buttonQuery:{
        width: 50,
        height: 30,
        backgroundColor: '#f6ae32',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonQuery:{
        color: '#000000',
        fontSize: 14,
        fontWeight: '300'
    }
});

export default styles;