const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Simulate DB user for this example
const mockUser = {
  id: 1,
  username: 'john',
  passwordHash: bcrypt.hashSync('password123', 10),
};

// Login controller
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username !== mockUser.username) {
    return res.status(401).json({ message: 'Invalid username' });
  }

  const isMatch = bcrypt.compareSync(password, mockUser.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ id: mockUser.id, username: mockUser.username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
};

// Protected route controller
exports.getProtectedData = (req, res) => {
  res.json({ message: 'You have accessed protected data!', user: req.user });
};
