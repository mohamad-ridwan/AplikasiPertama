import React, { Component } from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import child from './child-817373_1280.jpg'

const App = () => {
  return <StylingReactNativeComponent />
}

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      {/* FIX SIZE */}
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#aaa',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20
        }}
      />
      <View>
        <Image
          source={child}
          style={{
            width: 188,
            height: 107
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40
  }
})

const SampleComponent = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: '#2980b9' }} />
      <Text>Hello world</Text>
      <Ridwan />
      <Text>Find the Good Life.</Text>
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
      <BoxGreen />
      <Profile />
    </View>
  )
}

const Ridwan = () => {
  return <Text>Ridwan</Text>
}

const Photo = () => {
  return <Image
    source={{ uri: 'https://wahyudi.ezbix.com/store/_next/image?url=http%3A%2F%2Fwahyudi.ezbix.com%2Fassets%2Fimages%2F1715361571-L6QZAVed2VjV3n6BauYR_tn&w=1920&q=75' }}
    style={{
      width: 100,
      height: 100
    }}
  />
}

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: 'https://wahyudi.ezbix.com/store/_next/image?url=http%3A%2F%2Fwahyudi.ezbix.com%2Fassets%2Fimages%2F1715361571-L6QZAVed2VjV3n6BauYR_tn&w=1920&q=75' }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50
          }}
        />
        <Text style={{ color: 'blue', fontSize: 24 }}>Ini Hp</Text>
      </View>
    )
  }
}

export default App