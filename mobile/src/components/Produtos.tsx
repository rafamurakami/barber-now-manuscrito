import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ProdutosProps {
  nome: string;
  preco: number;
  emEstoque: boolean;
}

const Produtos: React.FC<ProdutosProps> = ({ nome, preco, emEstoque }) => {
  const statusColor = emEstoque ? '#2E8B57' : '#DC143C'; // Verde para disponível, vermelho para indisponível
  
  return (
    <View style={styles.container}>
      <Text style={styles.produtoTexto}>
        {nome} - R${preco.toFixed(2)}, 
        <Text style={[styles.statusText, { color: statusColor }]}>
          {emEstoque ? " Disponível" : " Indisponível"}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#4a2c2a',
  },
  produtoTexto: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    fontWeight: '500',
  },
  statusText: {
    fontWeight: 'bold',
  },
});

export default Produtos;