exports.login = (req, res) => {
  try {
    //... Code to log the user in
    res.status(201).send({ accessToken: 'accessToken' })
  } catch (error) {
    // Logging
    res.status(500).send({ errors: error })
  }
}