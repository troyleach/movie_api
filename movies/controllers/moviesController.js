exports.list = (req, res) => {
  // get the movies
  const data = [
    { name: 'the movie one' },
    { name: 'the movie two' },
    { name: 'the movie three' },
    { name: 'the movie four' },
    { name: 'the movie five' }
  ];
  res.status(200).send(data);
}