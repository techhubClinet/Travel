export function errorHandler(err, _req, res, _next) {
  console.error('[Server Error]', err.message || err);
  res.status(500).json({
    error: 'Failed to send email. Please try again or call 612-205-1459.',
  });
}
