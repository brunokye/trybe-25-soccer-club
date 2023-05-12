import { ErrorRequestHandler } from 'express';
import HttpException from './HttpException';

const handleError: ErrorRequestHandler = (err, _req, res, _next) => {
  const { status, message } = err as HttpException;
  res.status(status).json({ message });
};

export default handleError;
