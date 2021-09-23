import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Search } from './components/Search'
import { Carousel } from './components/Carousel'

const Page = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#fff',
      }}
    >

      <Search />

      <Carousel/>


    </ScrollView>
  )
}

export default Page;