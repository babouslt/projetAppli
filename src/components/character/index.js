import {View, Text, StyleSheet} from 'react-native';

const Character = props => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.nameText}>{props.french_name}</Text>
      <Text style={styles.bountyText}>Bounty : {props.bounty}</Text>
      <Text style={styles.ageText}>Age : {props.age}</Text>
      <Text style={styles.crewText}>Crew : {props.crew}</Text>
      <Text style={styles.statusText}>Status : {props.status}</Text>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 8,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  bountyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  ageText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  crewText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
