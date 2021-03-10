import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import {
  Button,
  ThemeProvider,
  Input,
  Image,
  Text,
} from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { db, auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoUrl:
            imageUrl ||
            "https://cdn0.iconfinder.com/data/icons/avatar-batch-1/512/profile_icon-11-512.png",
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text
        h3
        style={{
          marginBottom: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Create Account
      </Text>
      <view style={styles.inputContainer}>
        <Input
          placeholder="Name"
          autoFocus
          type="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
        <Input
          placeholder="Image URL"
          autoFocus
          type="imageUrl"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
        />
      </view>
      <Button raised onPress={register} title="Register"></Button>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  // inputContainer: {
  //   width: 300,
  // },
});
