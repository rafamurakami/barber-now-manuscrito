import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PerfilProps {
  nome: string;
  idade: string;
  perfil: string;
}

const Perfil: React.FC<PerfilProps> = ({ nome, idade, perfil }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.perfilText}>
        {nome}, {idade} anos, {perfil}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  perfilText: {
    fontSize: 18,
    color: '#5a3c3a', // Marrom médio
    textAlign: 'left',
    fontFamily: 'sans-serif',
    fontWeight: '500',
  },
});

export default Perfil;