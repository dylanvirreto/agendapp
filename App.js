import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView 
        style={styles.webview}
        originWhitelist={['*']}
        source={require('./MiAgenda.html')} 
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A213A',
    paddingTop: Constants.statusBarHeight,
  },
  webview: {
    flex: 1,
  },
});
