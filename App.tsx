import React from 'react';
import { SafeAreaView } from 'react-native';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen/> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
  );
};
