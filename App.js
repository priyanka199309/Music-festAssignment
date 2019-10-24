import React, {
  useState,
  useEffect
} from 'react';
import { FlatList,StyleSheet, Text, View} from 'react-native';


 export default class App extends React.Component {
  
    state = {
      data: []
  }
 async componentDidMount () {
      const res = await fetch('https://thawing-hollows-21222.herokuapp.com/artists');
   const json = await res.json();
   this.setState({
     isLoaded: true,
     items: json.artists,
   });
    };

    render() {
  var { isLoaded, items } = this.state;
  if(!isLoaded){
    return (<Text>Loading...</Text>);
  }
  else{
  return (
    <View style={styles.container}>
      <FlatList 
      items={this.state.items}
      keyExtractor={(x,i) => i}
      renderItem={({ item }) =>
        <Text>
          {'${item.id} || ${item.name}'}
        </Text>}
        />
    </View>
  );
}
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
