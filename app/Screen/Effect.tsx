import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Effect = () => {
    const [count, setCount] = useState<number>(0);
    const [countTwo, setCountTwo] = useState<number>(0);

    // //this effect will run every time the component renders
    // useEffect(() => {
    //     console.log('Effect updated');
    // });

    // // This effect will run only once when the component mounts
    useEffect(() => {
        console.log('Effect Mounted');

        // This function will run when the component unmounts
        // or before the next effect runs

        // in short ye function cleanup hota hai means koi screen ap chala jayao 
        return () => {
            console.log('Effect Unmounted');

        }
    }, []);
    // this effect will run when the count state changes
    // useEffect(() => {

    //     console.log('Effect updated');
    // }, [count]);


    console.log('component rendered');
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

            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    setCountTwo(prev => prev + 1);
                }}>
                <Text style={styles.txt}>Count: {countTwo}</Text>
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