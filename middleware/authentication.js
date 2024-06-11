const CustomError = require("../errors");

const { isTokenValid } = require("../utils");

const authticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;
  if (!token) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
};

const unauthorizedUser = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthoziedError(
        "Unauthorized to access this route!"
      );
    }
    next();
  };
};

module.exports = {
  authticateUser,
  unauthorizedUser,
};