import React from "react";
import { View, Text, Image, } from "react-native";

import styles from './styles';


export default function QuotationsItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo }>
                    <Image style={styles.logoBitcoin} 
                    source={require('../../../img/bitcoinyellowpng.png')} />
                    <Text style={styles.dayQuotation}>06/03/2023</Text>
                </View>
            </View>

            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 345.2009</Text>
            </View>
        </View>
    )
};