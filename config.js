exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  'mongodb://test-user:test-password@ds125016.mlab.com:25016/gitfit-data';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'thinkful';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
