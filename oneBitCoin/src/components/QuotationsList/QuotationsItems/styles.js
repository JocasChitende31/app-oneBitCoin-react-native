import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent:{
        width: '90%',
        height: 'auto',
        // backgroundColor: '#ffffff',
        // marginLeft: '3%',
        marginBottom: 15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    contextLeft:{
        width: '38%',
        height: '100%',
        alignItems: 'flex-start'
    },
    logoBitcoin:{
        width: 40,
        height: 40,
        marginLeft: 1,
    },
    dayQuotation:{
        fontSize: 16,
        paddingLeft: 10,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    boxLogo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    contextRight:{
        width: '60%',
        alignItems: "flex-end"
    },
    price:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500'
    },
   
});

export default styles;