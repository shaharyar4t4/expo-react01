import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface Iuser {
    name: string,
    semster: string,
}
const Detial = () => {
    // const [name, setName] = useState<string>("");
    // const [semster, setSemster] = useState<string>("");

    //multiple userstates 
    const [user, setUser] = useState<Iuser>(
        {
            name: "",
            semster: ""
        }
    )
    const [submit, setSubmit] = useState(false);
    const handlesubmit = () => {
        setSubmit(true)
    }
    const onchangeInput= (key:string, text: string) => {

    //...prev is use to fetch previous object value like those value is store on the array 
         setSubmit(false)
         setUser((prev)=> ({...prev, [key]: text}))
    }
    return (
        <View style={style.container}>
            <Text>Full name:</Text>
            <TextInput
                style={style.inputfield}
                placeholder='Full name'
                value={user.name}
            onChangeText={(text) => onchangeInput("name", text)}
            />

            <Text>Semster no</Text>
            <TextInput
                style={style.inputfield}
                placeholder='Semseter'
                value={user.semster}
                onChangeText={(text) => onchangeInput("semster", text)}
            />

            <Button title='Submit' onPress={handlesubmit} />{
                submit &&
                <View>
                    <Text>Your Name: {user.name}</Text>
                    <Text>Your Semester: {user.semster}</Text>
                </View>
            }

        </View>
    )
}

export default Detial

const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
    },
    inputfield: {
        marginBottom: 10,
        marginTop: 10,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,

    }

});