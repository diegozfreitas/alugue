import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Search } from './components/Search'
import { Carousel } from './components/Carousel'
import { CloseToYou } from './components/CloseToYou'
import { TipDay } from './components/TipDay'

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

      <CloseToYou/>

      <TipDay/>
    </ScrollView>
  )
}

export default Page;