'use client';

import { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';
import { useUser } from '@clerk/nextjs';

export default function FlashcardsPage() {
  const [flashcardSets, setFlashcardSets] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchFlashcards = async () => {
      if (!user) return;

      try {
        const querySnapshot = await getDocs(collection(db, 'users', user.id, 'flashcardSets'));
        const sets = [];
        querySnapshot.forEach((doc) => {
          sets.push({ id: doc.id, ...doc.data() });
        });
        setFlashcardSets(sets);
      } catch (error) {
        console.error('Error fetching flashcard sets:', error);
      }
    };

    fetchFlashcards();
  }, [user]);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Saved Flashcards
        </Typography>
        {flashcardSets.length > 0 ? (
          <Grid container spacing={2}>
            {flashcardSets.map((set) => (
              <Grid item xs={12} sm={6} md={4} key={set.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{set.name}</Typography>
                    <Typography>Number of Flashcards: {set.flashcards.length}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>No flashcards found. Please generate and save flashcards first.</Typography>
        )}
      </Box>
    </Container>
  );
}
