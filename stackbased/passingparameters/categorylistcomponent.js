import {StyleSheet, StatusBar,Alert ,View, FlatList, Text,SafeAreaView} from 'react-native';

const Categories = [
    {
        CategoryId:'Cat-001',
        CategoryName: 'Electronics'
    },
    {
        CategoryId:'Cat-002',
        CategoryName: 'Electrical'
    },
    {
        CategoryId:'Cat-003',
        CategoryName: 'Food'
    },
    {
        CategoryId:'Cat-004',
        CategoryName: 'Fasjion'
    },
];
const Item = ({category, selectedData}) => (
    <View style={styles.item}>
      <Text style={styles.title}
       onPress={()=> selectedData(JSON.stringify(category.CategoryId))}
      >{category.CategoryId}</Text>
      <Text style={styles.title}>{category.CategoryName}</Text>
    </View>
  );

const CategoryListComponent=({navigation})=>{
  const displayBox=(data)=>{
   //Alert.alert(`Received Data ${(data)}`);
     navigation.navigate('ProductList', {category:data},
       );
  };
    return (
        <SafeAreaView>
           <FlatList
            numColumns='2'
            data={Categories}
            renderItem={({item}) => <Item category={item} 
            selectedData={displayBox}
              />}
            keyExtractor={item => item.CategoryId}
      />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  

export default CategoryListComponent;