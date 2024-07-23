import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import Participant from '@/components/Partcipant';

export default function HomeScreen() {

  const participants = ['Filipe', 'Maria', 'João', 'Pedro', 'Ana', 'Paulo', 'Isabela', 'Mariana', 'Joana', 'Guilherme'];

  const handleParticipantAdd = () => {
    console.log('adicionando participante');
  }

  const handleParticipantRemove = (name: string) => {
    console.log(`removendo participante ${name}`);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Outubro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Digite o nome do participante"
        placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        renderItem={({ item }) => <Participant name={item} onRemove={() => handleParticipantRemove(item)}/>}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={styles.emptyList}>Nenhum participante cadastrado !</Text>}
      />
    </View>
  );
}