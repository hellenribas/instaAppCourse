import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import List from './src/components/List';

export interface IFeed {
  id: string;
  nome: string;
  descricao: string;
  imgperfil: string;
  imgPublicacao: string;
  likeada: boolean;
  likers: number;
}

function App(): JSX.Element {
  const [feed, setFeed] = useState<IFeed[]>([
    {
      id: '1',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: false,
      likers: 0,
    },
    {
      id: '2',
      nome: 'Matheus',
      descricao: 'Isso sim é ser raiz!!!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },
    {
      id: '3',
      nome: 'Jose Augusto',
      descricao: 'Bora trabalhar Haha',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 3,
    },
    {
      id: '4',
      nome: 'Gustavo Henrique',
      descricao: 'Isso sim que é TI!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: false,
      likers: 1,
    },
    {
      id: '5',
      nome: 'Guilherme',
      descricao: 'Boa tarde galera do insta...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likers: 32,
    },
  ]);
  return (
    <View style={S.container}>
      <View style={S.header}>
        <TouchableOpacity>
          <Image source={require('./src/img/logo.png')} style={S.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./src/img/send.png')} style={S.send} />
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={feed}
        renderItem={({item}) => <List data={item} />}
      />
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {},
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send: {
    height: 23,
    width: 23,
  },
});

export default App;
