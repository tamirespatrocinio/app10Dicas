import React from 'react';
import {
  SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  StatusBar, 
  ImageBackground
} from 'react-native';

const photo = require('./assets/desktop.jpg');

const DATA = [
  {
    id: '1',
    title: 'Crie sua rotina própria.',
  },
  {
    id: '2',
    title: 'Anote o que puder.',
  },
  {
    id: '3',
    title: 'Cuidado com as interrupções.',
  },
  {
    id: '4',
    title: 'Realize pequenas tarefas na hora.',
  },
  {
    id: '5',
    title: 'Pratique o método pomodoro.',
  },
  {
    id: '6',
    title: 'Cuidado com as interrupções.',
  },
  {
    id: '7',
    title: 'Não utilize redes sociais.',
  },
  {
    id: '8',
    title: 'Organize seu espaço físico.',
  },
  {
    id: '9',
    title: 'Se exercite.',
  },
  {
    id: '10',
    title: 'Cuide do seu lazer.',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.titleList}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}> 
      <ImageBackground style = {styles.imgWallpaper} source={photo} blurRadius={0.4}>
        <Text style = {styles.title}>10 dicas para ser mais produtivo</Text>     
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     </ImageBackground>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#E9CECC',
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:8,
    color: '#282721'
  },
  titleList: {
    fontSize: 18,
  },
  title:{
    marginTop:20,
    textAlign:'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#282721',
    textTransform:'uppercase',
    lineHeight: 34,
    textShadowColor:"#E9CECC",
    textShadowOffset:{width: 3, height: 2},
    textShadowRadius:5
  },
  imgWallpaper:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    resizeMode:'cover',
    opacity: 1
  },
});

export default App;