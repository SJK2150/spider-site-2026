import jwt from 'jsonwebtoken';
import pino from 'pino';
const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});

const jwt_verify = (req: any, res: any, next: any) => {
  try {
    const auth_header = req.header('Authorization');
    if (!auth_header) return res.status(401).json({ message: 'No token' });
    const token = auth_header.substring(7);
    jwt.verify(
      token,
      process.env.JWT_SECRET || 'key',
      async (err: any, decoded: any) => {
        req.jwt_payload = decoded;
        if (err) {
          logger.error(`${err}`);
          return res
            .status(403)
            .json({ message: 'Invalid token or token expired' });
        }
        req.user = true;
        return next();
      }
    );
    return null;
  } catch (err) {
    logger.error(`${err}`);
    return res.status(500).json({ message: 'Server error. Try again later' });
  }
};

export { jwt_verify };
