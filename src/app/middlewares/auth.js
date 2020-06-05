import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret); // O promisify transforma a callback em uma função assicrona, os parentes chamam essa função retornada passando os parametros que estão dentro deles

    req.userId = decoded.id;
    // eslint-disable-next-line no-console
    console.log(decoded);

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid Token' });
  }
};
