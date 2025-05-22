const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;// Get the authorization header from the request
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];// Extract the token from the header

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);// Verify the token
    req.user = decoded;// Attach the decoded user to the request object
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
module.exports = authMiddleware;