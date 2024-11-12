// In server.js (backend)

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/ask-question', (req, res) => {
  const { question } = req.body;

  // Simulate AI response - replace this with actual AI integration
  const aiResponse = `Received question: ${question}. This is a sample response.`;

  res.json({ response: aiResponse });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
