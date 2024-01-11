import React from 'react'
import Card from './components/Card';
import { View } from 'react-native'
import WelcomeScreen from './screens/WelcomeScreen';
import ListingScreenDetails from './screens/ListingScreenDetails';
import ViewImageScreen from './screens/ViewImageScreen';
import MessagesScreen from './screens/MessagesScreen';





const App = () => {
  return (
    // <WelcomeScreen />
    <View>
      {/* <Card
        title="32GB RAM Computer with RGB Monitor"
        subTitle="$100"
        image={require("./assets/pc.jpg")}
      /> */}
      {/* <ListingScreenDetails /> */}
      {/* <ViewImageScreen /> */}

      <MessagesScreen />
    </View>

  )
}

export default App