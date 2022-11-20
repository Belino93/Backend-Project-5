const jsonwebtoken = require("jsonwebtoken");


const authBearerMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    try {
      if (strategy.toLowerCase() !== "bearer") {
  
        throw new Error("Invalid strategy");
      }
      const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
      req.auth = payload
      next();

    } catch (error) {
      res.status(401).json({ message: "You are not authenticated" });
      return;
    }
  
  };

module.exports = { authBearerMiddleware };