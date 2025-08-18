import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Effect = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <View style={styles.container}>
            <Text style={
                styles.txt
            }>Effect Screen</Text>

            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    setCount(prev => prev + 1);
                }}>
                <Text style={styles.txt}>Count: {count}</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Effect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    txt: {
        fontSize: 20,
    },
    btn: {
        backgroundColor: '#C4C4C4',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    }
})