import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { rowdata: [] };
      
    }
    refreash() {
      return(
        this.state.rowdata.map( (value) => <Text>{value.RELAX_RSTRNT_NM}</Text>)
      )
    }
    search(tagList){
      const dataAPI = 'http://211.237.50.150:7080/openapi/2532cb13adf711228d1059388c96ca0020080e57dc386ebd4e2280d494aaba48/json/Grid_20200713000000000605_1/1/30?';
      
      tagList.forEach(function(tag){
        { dataAPI + '' +tag + '&' }
      });

      alert(dataAPI);

      axios.get(dataAPI)
      .then( response => { this.setState({ rowdata: response.data.Grid_20200713000000000605_1.row})})
    }
    render() {
      let tagList = ["RELAX_SI_NM=경기도","RELAX_SIDO_NM=안양시"];
      return (
        <View style={styles.container}>
          <View>
            {
              this.refreash()
            }
          </View>
          <View>
            {
              <Button title='검색' onPress={this.search(tagList)}></Button>
            }
          </View>
          <View>
          </View>
        </View>
      );
    }
}

export default App;

const styles = StyleSheet.create({

  container : {
    flex : 1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center',
  },
  scrollContainer : {
    flex : 1,
    backgroundColor : '#000',
  },
});


// import React, {Component} from 'react';
// import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
// import Searching from './Searching';

// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { rowdata: [] };
//     }
//     refreash() {
//       return(
//         this.state.rowdata.map( (value) => <Text>{value.RELAX_RSTRNT_NM}</Text>)
//       )
//     }
//     render() {
//       let tags = ["RELAX_SI_NM=경기도","RELAX_SIDO_NM=군포시"];
//       return (
//         <View style={styles.container}>
//           <View>
//             {
//               this.refreash()
//             }
//           </View>
//           <View>
//             {
//               Searching.search(this,tags)
//             }
//           </View>
//           <View>
//           </View>
//         </View>
//       );
//     }
// }

// export default App;

// const styles = StyleSheet.create({

//   container : {
//     flex : 1,
//     backgroundColor : '#fff',
//     alignItems : 'center',
//     justifyContent : 'center',
//   },
//   scrollContainer : {
//     flex : 1,
//     backgroundColor : '#000',
//   },
// });