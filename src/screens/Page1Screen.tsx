import React from 'react';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import {Button, View, Text, TouchableOpacity} from 'react-native';

import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Página 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text
        style={{
          marginVertical: 10,
        }}>
        Enviar parametros por la navegación
      </Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pablo',
            })
          }>
          <Text style={styles.bigButtonText}>Pablo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Ana',
            })
          }>
          <Text style={styles.bigButtonText}>Ana</Text>
        </TouchableOpacity>
      </View>

      {/* <Button
        title="Persona"
        onPress={() => navigation.navigate('PersonScreen')}
      /> */}
    </View>
  );
};
