module.exports = (err, _req, res, _next) => {
  if(err === 500) return res.status(err).send('Something went wrong!');
  
  const { status, message } = err;
  res.status(status).json({ message });
}