import app from './app';

app.get('/', (req, res) => res.json({ status: 'online' }));

const port = process.env.PORT;

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`),
);
