import MainLayout from '@/components/mainLayout';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface IQuote {
    id: number;
    quote: string;
    author: string;
}
const RamdonQuote = () => {
    const [quote, setquote] = useState<IQuote>({
        id: 0,
        quote: "",
        author: ""
    });
    const [loader, setLoader] = useState<boolean>(false);
    const [toggle, setToggle] = useState<boolean>(true);

    useEffect(() => {
        RamdonQuote();
    }, [toggle])


    const RamdonQuote = async () => {
        setLoader(true);
        try {
            const res = await fetch("https://dummyjson.com/quotes/random");
            const response = await res.json();
            setquote(response);
            setLoader(false);
            console.log("Response --> ", response);
        } catch (error) {
            console.log("Error --> ", error);
            setLoader(false);
        }
    }

    return (
        <MainLayout>
            <View style={styles.container}>

                {/* This is a static quote, you can replace it with a dynamic one from an API */}
                <View style={styles.quote}>
                    {
                        loader ? <View>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View> : 
                        <View>
                            <Text style={styles.text}>{quote.quote}</Text>
                            <Text style={styles.name}>- {quote.author}</Text>
                        </View>
                    }

                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{setToggle(!toggle)}}>
                        <Text style={styles.btnText}> Generate the Quote</Text>
                    </TouchableOpacity>

                    {/* This button is used to generate a new quote by using  the Ramdon Quote */}
                    {/* <TouchableOpacity style={styles.button} onPress={RamdonQuote}>
                        <Text style={styles.btnText}> Generate the Quote</Text>
                    </TouchableOpacity> */}
                </View>
            </View>

        </MainLayout>

    )
}

export default RamdonQuote

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    quote: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 20
    },
    name: {
        textAlign: "right",
        color: "#000"
    },
    text: {
        color: "#000",
        fontSize: 24
    },
    button: {

        borderWidth: 1,
        padding: 10,
        backgroundColor: "#000",
        borderRadius: 30
    },
    btnText: {
        textAlign: "center",
        fontSize: 18,
        color: "#fff"
    }
}
);