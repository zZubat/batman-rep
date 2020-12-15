import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Linha from './components/Linha';
import {Header} from 'react-native-elements';
import api from './data/Api';

const App = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    carregaFilmes();
  }, []);

  async function carregaFilmes(){
    setFilmes([]);
    const response = await api.get('/db');
    setFilmes(response['data'].dados);
}

  return( 

    <View style={styles.container}>
      <Header
          backgroundColor= '#000'
          centerComponent={{ icon: 'menu', color: '#fff' }}
          rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <FlatList
        data={filmes}
        keyExtractor={(item)=> item.key.toString()}
        renderItem={ ({item}) => 
          <View>
            <Linha Title={item.title} 
            Year={item.Year} 
            imdbID={item.imdbID} 
            Type={item.Type} 
            Poster={item.Poster} />
          </View>
      }
      />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'arial',
  },
});


export default App;
