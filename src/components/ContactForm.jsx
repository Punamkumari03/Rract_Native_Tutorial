import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = form;

    if (!name || !email || !subject || !message) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    // Here you can add API call or email sending logic
    Alert.alert('Success', 'Your message has been sent!');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Contact Us</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={form.name}
          onChangeText={(text) => handleChange('name', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => handleChange('email', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Subject"
          value={form.subject}
          onChangeText={(text) => handleChange('subject', text)}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Message"
          multiline
          numberOfLines={4}
          value={form.message}
          onChangeText={(text) => handleChange('message', text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
