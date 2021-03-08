import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, ThemeProvider, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 30,alignItems:"center" ,justifyContent:"center"}}>
        Create A Signal Accont
      </Text>
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
        value={name}
        onChangeText={(text) => setImageUrl(text)}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
