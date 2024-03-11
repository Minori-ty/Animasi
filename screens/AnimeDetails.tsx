import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { IAnime } from '../models';
import { RootStackParamList } from '../navigation';

// Avec react-navigation, les composants qui représentent des écrans reçoivent automatiquement deux props:
// - navigation: qui contient un ensemble de fonctions permettant de changer d'écran
// - route: qui contient des informations sur la route actuelle, et notamment les paramètres passés par l'écran précédent
// Ce code permet de typer ces deux props, afin de pouvoir bénéficier de l'apport de TypeScript
// (notamment, s'assurer que le code du composant est compatible avec les paramètres attendus par la route),
// et dit en substance: le prop navigation dépend de la structure des routes déclarée dans RootStackParamList,
// ainsi que du nom de route auquel est lié le compoasnt.
// NOTE: ce code n'est absolument pas indispensable au bon fonctionnement de l'application et peut être omis.
// Il permet simplement d'améliorer l'expérience de développement et de réduire l'erreur humaine.
type AnimeDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'AnimeDetails'>;
type AnimeDetailsRouteProp = RouteProp<RootStackParamList, 'AnimeDetails'>;

interface AnimeDetailsProps {
  navigation: AnimeDetailsNavigationProp;
  route: AnimeDetailsRouteProp;
}

// Cette interface décrit la structure attendue de la réponse à la requête AJAX
interface AnimeDetailsApiResponse{
  data:IAnime;
}

const AnimeDetails: FC<AnimeDetailsProps> = ({ route }) => {
  // Trouve l'ID de l'animé demandé dans les paramètres de la route
  const { id } = route.params;
  // Retient l'état actuel de l'animé d'une exécution du composant à l'autre
  const [anime,setAnime] = useState<IAnime>();

  // Associe un comportement à la création du composant
  useEffect(
    () => {
      // Envoie une requête AJAX pour récupérer l'animé demandé
      fetch(`https://kitsu.io/api/edge/anime/${id}`)
      // Dès que la requête a répondu, transforme son contenu en objets JavaScript
      .then( response => response.json() )
      // Dès que la transformation est terminée, range le résultat dans la liste des animés
      .then( (json: AnimeDetailsApiResponse) => setAnime(json.data));
    },
    // Liste des dépendances
    [id]
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>{anime?.attributes.canonicalTitle}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default AnimeDetails;
