import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Agenda = () => {
  const diasDaSemana = [
    { dia: 'Dom', data: '01/07' },
    { dia: 'Seg', data: '02/07' },
    { dia: 'Ter', data: '03/07' },
    { dia: 'Qua', data: '04/07' },
    { dia: 'Qui', data: '05/07' },
    { dia: 'Sex', data: '06/07' },
    { dia: 'Sáb', data: '07/07' },
  ];

  const agendamentos = [
    { horario: 'X - Fechado' },
    { horario: '7:50 – Pablo (Barba)' },
    { horario: '11:00 – Guilherme (Barba)' },
    { horario: '17:00 – Tony (Corte+Barba)' },
    { horario: '18:00 – Yuri (Barba)' },
    { horario: '19:00 – Juan (Corte+Barba)' },
    { horario: '20:00 – João (Barba)' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AGENDA BARBER NOW</Text>
      <Text style={styles.subtitle}>Visualização mensal</Text>

      {/* Dias da semana */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.diasContainer}>
          {diasDaSemana.map((item, index) => (
            <View key={index} style={styles.diaItem}>
              <Text style={styles.diaTexto}>{item.dia}</Text>
              <Text style={styles.dataTexto}>{item.data}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Divisor */}
      <View style={styles.divider} />

      {/* Horários */}
      <View style={styles.horariosSection}>
        <Text style={styles.horarioLabel}>Horário</Text>
        <View style={styles.agendamentosList}>
          {agendamentos.map((agendamento, index) => (
            <View key={index} style={styles.agendamentoItem}>
              <Text style={[
                styles.agendamentoTexto,
                agendamento.horario.includes('Fechado') && styles.fechadoTexto
              ]}>
                {agendamento.horario}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#fff',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a2c2a',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: 16,
    color: '#6d5d5b',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'serif',
  },
  diasContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  diaItem: {
    alignItems: 'center',
    marginRight: 15,
    minWidth: 60,
    padding: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 6,
  },
  diaTexto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4a2c2a',
    marginBottom: 4,
  },
  dataTexto: {
    fontSize: 12,
    color: '#6d5d5b',
  },
  divider: {
    height: 1,
    backgroundColor: '#E3D5CA',
    marginVertical: 15,
  },
  horariosSection: {
    flexDirection: 'row',
  },
  horarioLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a2c2a',
    width: 80,
    marginRight: 15,
    fontFamily: 'serif',
  },
  agendamentosList: {
    flex: 1,
  },
  agendamentoItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  agendamentoTexto: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'sans-serif',
  },
  fechadoTexto: {
    color: '#DC143C',
    fontWeight: 'bold',
  },
});

export default Agenda;