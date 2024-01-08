import React from 'react'
import { View } from 'react-native'

import MainView from './MainView'
import { categories } from '../../../test/fixture'

export default () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    }}>
    <MainView categories={categories} order={categories[0].data} gotoDiscounts={() => null}/>
  </View>
)
