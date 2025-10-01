import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Agenda from './Agenda/Agenda';
import Perfil from './Perfil';
import Produtos from './Produtos';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.topBar}>
          <Text style={styles.config}>Configuração</Text>
          <Text style={styles.profile}>Perfil: ADM</Text>
        </View>
        
        <View style={styles.navBar}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.navScrollContent}
          >
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navText}>Histórico</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navText}>Listas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navText}>Promoções</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navText}>Avaliações</Text>
            </TouchableOpacity>
          </ScrollView>
          
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Bem-vindo */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Bem-vindo de volta, Rafael!</Text>
        </View>

        {/* Perfil */}
        <View style={styles.card}>
          <Perfil nome="Rafael" idade="28" perfil="Administrador" />
        </View>

        {/* Produtos */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Produtos</Text>
          <Produtos nome="Combo: Corte+Barba" preco={55.00} emEstoque={true} />
          <Produtos nome="Minoxidil" preco={35.00} emEstoque={false} />
        </View>

        {/* Agenda */}
        <View style={styles.card}>
          <Agenda />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E3D5CA', // Cor de fundo marrom clara
  },
  header: {
    backgroundColor: '#4a2c2a', // Marrom escuro
    borderBottomWidth: 1,
    borderBottomColor: '#3a1c1a',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#5a3c3a', // Marrom médio
  },
  config: {
    fontSize: 14,
    color: '#E3D5CA', // Marrom claro
    fontWeight: '500',
  },
  profile: {
    fontSize: 14,
    color: '#E3D5CA',
    fontWeight: '500',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  navScrollContent: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  navItem: {
    marginRight: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  navText: {
    fontSize: 14,
    color: '#E3D5CA',
    fontWeight: '500',
  },
  logoutButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#8B4513', // Marrom saddle
    borderRadius: 6,
    marginLeft: 10,
  },
  logoutText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  welcomeSection: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a2c2a', // Marrom escuro
    textAlign: 'left',
    fontFamily: 'serif',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a2c2a',
    marginBottom: 15,
    fontFamily: 'serif',
  },
});

export default HomeScreen;