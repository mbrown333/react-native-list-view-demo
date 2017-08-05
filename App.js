import React from 'react'
import { StyleSheet, Text, View, FlatList, SectionList, Alert } from 'react-native'

import BabyNameApi from './api/babyNameApi'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.babyNameApi = new BabyNameApi()
    this.state = {
      names: this.babyNameApi.getAllNames(),
      namesByYear: this.babyNameApi.getAllNamesByYears()
    }
  }

  // SECTION LIST RENDER METHOD
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.namesByYear}
          renderItem={({item}) => <Text style={styles.row}>{item.key}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
        />
      </View>
    )
  }

  // FLAT LIST RENDER METHOD
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <FlatList
  //         data={this.state.names}
  //         renderItem={({item}) =>
  //             <Text
  //               onPress={() => Alert.alert(item.key + ' pressed!')}
  //               onLongPress={() => Alert.alert(item.key + ' long pressed!')}
  //               style={styles.row}>
  //               {item.key}
  //             </Text>}
  //       />
  //     </View>
  //   )
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  row: {
    padding: 10,
    borderWidth: .5,
    borderColor: 'black',
    height: 50,
    fontSize: 18,
  },
  header: {
    padding: 12,
    backgroundColor: 'gray',
    fontSize: 36,
    fontWeight: 'bold',
    height: 60
  }
})
