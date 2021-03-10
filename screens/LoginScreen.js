import React, { useEffect } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import { Button, ThemeProvider, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { set } from "react-native-reanimated";
import { db, auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIN = () => {};
  const Register = () => {};
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg",
        }}
        style={{ resizeMode: "cover", width: "100%", height: "100%" }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autoFocus
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} onPress={SignIN} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={Register}
        type="outline"
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: { width: 300, marginTop: 10 },
  button: { margin: 15, width: 200 },
});
