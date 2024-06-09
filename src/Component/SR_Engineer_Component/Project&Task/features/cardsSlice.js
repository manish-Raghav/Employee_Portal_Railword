import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  const headings = [
    "App Development#",
    "Web Development#",
    "Mobile Application Development#",
    "UI/UX Design#",
    "Software Engineering#",
    "Data Science#",
    "Machine Learning#",
    "Cloud Computing#",
    "Cybersecurity#",
    "Digital Marketing#"
  ];
const manager =[
  "Arun",
  "Aman",
  "Naman",
  "lokendra",
  "Harsh",
  "Manish",
  "Sohil",
  "Sourabh",
  "Arvind",
  "Ashish",
  "Aveenesh"
]
  return data.map((item, index) => ({
    photo: `https://via.placeholder.com/150?text=Image+${index + 1}`,
    title: `Card Title ${index + 1}`,
    heading: headings[index % headings.length], // Use unique headings
    text: item.body,
    projectManager: manager[index % manager.length], // Use unique manager
    employees: `${index + 2} employees involved`,
    technologies: ['Figma', 'Basic Design', 'Presenting the Design Flow'],
  }));
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cardsSlice.reducer;