import app from './app';

app.get('/', (req, res) => res.json({ status: 'online' }));

app.listen(3333, () =>
  console.log(`Server running at http://localhost:${process.env.PORT}`),
);
