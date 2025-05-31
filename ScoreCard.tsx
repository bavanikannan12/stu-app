
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  subject: string;
  mark: number;
}

const ScoreCard = ({ subject, mark }: Props) => {
  const isFail = mark < 40;

  return (
    <View style={[styles.card, isFail && styles.failCard]}>
      <Text style={styles.subject}>{subject.toUpperCase()}</Text>
      <Text style={styles.mark}>Mark: {mark}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#43b051',
  },
  failCard: {
    backgroundColor: '#f70202',
  },
  subject: {
    color:"#fff",
    fontSize: 16,
    fontWeight: '600',
  },
  mark: {
     color:"#fff",
    fontSize: 14,
    marginTop: 5,
  },
});

export default ScoreCard;
