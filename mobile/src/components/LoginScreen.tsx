import React, { useState } from 'react';
import {
    Alert,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      // Alerta simples para preencher campos
      if (Platform.OS === 'web') {
        alert('Por favor, preencha todos os campos');
      } else {
        Alert.alert('Atenção', 'Por favor, preencha todos os campos');
      }
      return;
    }

    console.log('Email:', email);
    console.log('Senha:', password);
    
    // Navegar para a tela Home após login
    navigation.navigate('Home');
  };

  const handleCadastro = () => {
    console.log('Navegar para cadastro');
  };

  const handleUsuarios = () => {
    console.log('Navegar para usuários cadastrados');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.loginCard}>
          <Text style={styles.cardTitle}>Portal Barber Now</Text>
          <Text style={styles.cardSubtitle}>Seu estilo começa aqui</Text>
          
          {/* Campo de Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>EMAIL</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Campo de Senha */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>SENHA</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Senha"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Botão Cadastro */}
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={handleCadastro}
          >
            <Text style={styles.linkText}>Criar uma conta</Text>
          </TouchableOpacity>

          {/* Botão Entrar */}
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>

          {/* Botão Usuários Cadastrados */}
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={handleUsuarios}
          >
            <Text style={styles.linkText}>Usuários cadastrados</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// ... (os styles permanecem os mesmos)
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E3D5CA',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  loginCard: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    alignItems: 'stretch',
    gap: 15,
    maxWidth: 400,
    width: '90%',
    minHeight: 400,
  },
  cardTitle: {
    textAlign: 'center',
    color: '#4a2c2a',
    marginBottom: 5,
    fontFamily: 'serif',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    textAlign: 'center',
    color: '#6d5d5b',
    marginTop: 0,
    marginBottom: 30,
    fontFamily: 'serif',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    color: '#6d5d5b',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'sans-serif',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  loginButton: {
    backgroundColor: '#4a2c2a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    padding: 10,
    alignItems: 'center',
  },
  linkText: {
    color: '#007bff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;