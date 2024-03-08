import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const url = "https://letter.milim.jp/login";
  return <WebView style={styles.container} source={{ uri: url }} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
