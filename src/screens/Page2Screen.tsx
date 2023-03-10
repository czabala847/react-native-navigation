import React, {useEffect, useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import {styles} from '../theme/appTheme';

import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const Page2Screen = ({navigation}: Props) => {
  const {signIn, authState} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: 'La página 2',
      headerBackTitle: 'Atrás',
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Página 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />
      {!authState.isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
