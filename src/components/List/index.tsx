import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IFeed} from '../../../App';

interface IList {
  data: IFeed;
}

export default function List({data}: IList) {
  const [feed, setFeed] = useState(data);

  function getLikes(likers: number) {
    if (feed.likers <= 0) {
      return;
    }
    return (
      <Text style={S.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  function like() {
    if (feed.likeada) {
      setFeed(prevState => ({...prevState, likers: prevState.likers - 1}));
    } else {
      setFeed(prevState => ({...prevState, likers: prevState.likers + 1}));
    }
    setFeed(prevState => ({...prevState, likeada: !prevState.likeada}));
  }

  function verifyLikeada(likeada: boolean) {
    return likeada
      ? require('../../img/likeada.png')
      : require('../../img/like.png');
  }

  return (
    <View style={S.containerFeed}>
      <View style={S.containerProfile}>
        <Image source={{uri: feed.imgperfil}} style={S.photoProfile} />
        <Text style={S.textProfile}>{feed.nome}</Text>
      </View>
      <Image
        style={S.imgFeed}
        source={{uri: feed.imgPublicacao}}
        resizeMode="cover"
      />
      <View style={S.containerLikeSend}>
        <TouchableOpacity onPress={like}>
          <Image source={verifyLikeada(feed.likeada)} style={S.icons} />
        </TouchableOpacity>
        <TouchableOpacity style={S.btnIcon}>
          <Image source={require('../../img/send.png')} style={S.icons} />
        </TouchableOpacity>
      </View>

      {getLikes(feed.likers)}
      <View style={S.containerInfo}>
        <Text style={S.name}>{feed.nome}</Text>
        <Text style={S.description}>{feed.descricao}</Text>
      </View>
    </View>
  );
}

const S = StyleSheet.create({
  containerFeed: {},
  textProfile: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',
  },
  containerProfile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  photoProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imgFeed: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  containerLikeSend: {
    flexDirection: 'row',
    padding: 5,
  },
  icons: {
    width: 33,
    height: 33,
  },
  btnIcon: {
    paddingLeft: 5,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
  description: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000',
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
});
