import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface HeaderProps {
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    // Aqui você pode adicionar navegação para a tela de login
    console.log('Logout pressionado');
  };

  return (
    <View style={styles.header}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.config}>Configuração</Text>
        <Text style={styles.profile}>Perfil: ADM ?</Text>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <View style={styles.navList}>
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
        </View>
        
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}><Text style={styles.bold}>Sair</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f8f8',
  },
  config: {
    fontSize: 14,
    color: '#666',
  },
  profile: {
    fontSize: 14,
    color: '#666',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  navList: {
    flexDirection: 'row',
    flex: 1,
  },
  navItem: {
    marginRight: 20,
    paddingVertical: 8,
  },
  navText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logoutText: {
    fontSize: 16,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Header;