import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Button, Text } from 'react-native';
import { Card } from 'react-native-elements';
import IAnime from '../models/IAnime';
import { RootStackParamList } from '../navigation';

interface AnimeProps {
  anime: IAnime;
}

const AnimePreview: FC<AnimeProps> = ({ anime }) => {
  // Accède à l'objet navigation qui est normalement passé en prop aux composants représentant des écrans
  // afin de pouvoir naviguer vers d'autres écrans.
  // Comme pour les props des écrans, on peut préciser la structure de l'objet navigation en expliquant
  // qu'elle doit dépendre des routes qu'on a définies dans RootStackParamList
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'AnimeDetails'>>();

  return (
    <Card>
      <Card.Title>{anime.attributes.canonicalTitle}</Card.Title>
      <Card.Divider />
      {
        anime.attributes.coverImage && <Card.Image source={{ uri: anime.attributes.coverImage.small }} />
      }
      <Card.Divider />
      <Text>
        {anime.attributes.description}
      </Text>
      <Button title="Details" onPress={() => navigation.navigate('AnimeDetails', { id: anime.id })} />
    </Card>
  );
}

export default AnimePreview;
