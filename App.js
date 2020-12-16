import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Linha from './componentes/Linha';
import {Header} from 'react-native-elements';
import Api from './data/Api';

const App = () => {
  const [Search, setFilmes] = useState([]);

  useEffect(() => {
    carregaFilmes();
  }, []);

  async function carregaFilmes(){
    setFilmes([]);
    const response = await Api.get('/db');
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
        data={Search}
        keyExtractor={(imdbID)=> imdbID.key.toString()}
        renderItem={ ({imdbID}) => 
          <View>
            <Linha Title={imdbID.title} 
            Year={imdbID.Year} 
            //imdbID={item.imdbID} 
            Type={imdbID.Type} 
            Poster={imdbID.Poster} />
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
