import MainLayout from '@/components/mainLayout';
import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';



const List = () => {
  const [loader, setLoader] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "List" },
    { id: 2, name: "List" },
    { id: 3, name: "List" },
    { id: 4, name: "List" },
    { id: 5, name: "List" },
    { id: 6, name: "List" },
    { id: 7, name: "List" },
    { id: 8, name: "List" },
    { id: 9, name: "List" },
    { id: 10, name: "List" },
    { id: 11, name: "List" },
    { id: 12, name: "List" },
  ])
  const refreshcontrol = () => {
    setLoader(true);
    setTimeout(() => {
      setItems((prev) => ([...prev, { id: items?.length + 1, name: "List" }]))
      setLoader(false);

    }, 2000);

  }
   const sections = [
        {category: "Fruits", data: ["Apple", "Mango", "Banana", "Grapes", "Oranges"]},
        {category: "Vegatables", data: ["Apple", "Mango", "Banana", "Tomato"]},
        {category: "Dry Fruits", data: ["Apple", "Mango", "Banana"]},
        {category: "Drinks", data: ["Apple", "Mango", "Banana"]},
        {category: "Fast Food", data: ["Apple", "Mango", "Banana"]},
    ]


  return (
    <MainLayout>

      {/*Scroll View List*/}
      {/* <ScrollView
     contentContainerStyle={style.contentContainer}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={loader} onRefresh={refreshcontrol} />}
            >
      {
        items.map((item,key)=>(
          <View style={style.itemContainer} key={key}>
            <Text style={style.itemText}>{`${item.name} -- ${item.id}`}</Text>
          </View>
        ))
      }
     </ScrollView> */}



      {/*Flat List*/}
      {/* <View>
        <FlatList
          data={items}

          keyExtractor={(item) => `${item.id}${item.name}`}

          renderItem={({ item }) => (
            <View style={style.itemContainer} >
              <Text style={style.itemText}>
                {`${item.name} -- ${item.id}`}
              </Text>
            </View>
          )}
          ListHeaderComponent={<Text>Flat List</Text>}
          ListFooterComponent={<Text>Completed</Text>}
          onEndReached={refreshcontrol}
        />
      </View> */}


      {/*Selection List*/}
        <View>
            <SectionList 
              // just collect the data
                sections={sections}
              // identify the unique ID
                keyExtractor={(item, index)=> item+index}
              // help to render the list
                renderItem={({item})=>(
                    <View style={style.item}>
                        <Text>{item}</Text>
                    </View>
                )}  
              // mention the Category of any items
                renderSectionHeader={({ section:{category} }) =>(
                        <View style={style.header}>
                            <Text style={style.headerText}> {category} </Text>
                        </View>
                )}
              // stuck the header
                stickySectionHeadersEnabled={true}
            />
        </View>
    </MainLayout>
  )
}

export default List;

const style = StyleSheet.create({
  itemContainer: {
    backgroundColor: "lightblue",
    padding: 20,
    margin: 10
  },
  contentContainer: {
    padding: 10,
  },
  itemText: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
  },
    item:{
        padding:16,
        backgroundColor:"#c4c4c4",
        borderBottomWidth:1,
        borderColor:"#ddd"
    },
    header:{
        backgroundColor:"grey",
        padding:10
    },
    headerText:{
        fontSize:18,
        fontWeight:"bold"
    }
})