import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ScoreCard from '../components/ScoreCard';
import { RouteProp, useRoute } from '@react-navigation/native';

type HomeScreenRouteProp = RouteProp<{ 
  Home: { name: string; rollNumber: string } 
}, 'Home'>;

const HomeScreen = () => {
  const route = useRoute<HomeScreenRouteProp>();
  const { name, rollNumber } = route.params;

  const scores = [
    { subject: 'Java', mark: 87 },
    { subject: 'React', mark: 92 },
    { subject: 'Flutter', mark: 38 },
    { subject: 'Python', mark: 60 },
  ];

  const totalSubjects = scores.length;
  const totalMarks = scores.reduce((sum, item) => sum + item.mark, 0);
  const averageMark = (totalMarks / totalSubjects).toFixed(2);

  return (
    <View style={styles.container}>
      
      <View style={styles.profileBox}>
        <Text style={styles.welcome}>👋 Welcome</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.roll}>Roll No: {rollNumber}</Text>
      </View>

      
      <View style={styles.summaryBox}>
        <Text style={styles.summary}>📊 Subjects: {totalSubjects}</Text>
        <Text style={styles.summary}>📈 Average Mark: {averageMark}%</Text>
      </View>

      <Text style={styles.sectionTitle}>📚 Score Details</Text>
      <FlatList
        data={scores}
        keyExtractor={(item) => item.subject}
        renderItem={({ item }) => (
          <ScoreCard subject={item.subject} mark={item.mark} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0f8ff' },

  profileBox: {
    backgroundColor: '#e1f5fe',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  welcome: { fontSize: 16 },
  name: { fontSize: 20, fontWeight: 'bold', marginTop: 5 },
  roll: { fontSize: 14, color: '#333' },

  summaryBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#d0f0c0',
    padding: 12,
    borderRadius: 10,
  },
  summary: { fontSize: 16, fontWeight: '600' },

  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});

export default HomeScreen;
