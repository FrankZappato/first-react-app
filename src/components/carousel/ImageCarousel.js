import React, {useRef, useState} from 'react'
import {  
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native'
import styles from '../carousel/carouselStyle'

import Carousel from 'react-native-anchor-carousel/src/carousel'

import SimplePaginationDot from './SimplePaginationDot'

const {width: windowWidth} = Dimensions.get('window')

const data2 = [
    {
        uri: 'https://images.pexels.com/photos/9896251/pexels-photo-9896251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        uri: 'https://images.pexels.com/photos/8956156/pexels-photo-8956156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        uri: 'https://images.pexels.com/photos/9336641/pexels-photo-9336641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
]

const data = [
  {
    uri: 'https://i.imgur.com/GImvG4q.jpg',
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    uri: 'https://i.imgur.com/Pz2WYAc.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum ',
  },
  {
    uri: 'https://i.imgur.com/IGRuEAa.jpg',
    title: 'Lorem ipsum dolor',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    uri: 'https://i.imgur.com/fRGHItn.jpg',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
  },
  {
    uri: 'https://i.imgur.com/WmenvXr.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
  },
];

const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {uri, title, content} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <ImageBackground source={{uri: uri}} style={styles.imageBackground}>          
        </ImageBackground>        
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data2}
        renderItem={renderItem}
        itemWidth={0.7 * windowWidth}
        inActiveOpacity={0.3}
        containerWidth={windowWidth}        
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <SimplePaginationDot currentIndex={currentIndex} length={data2.length} />
    </View>
  );
}