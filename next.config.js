module.exports = {
  swcMinify: true,
  compiler: {
    react: {
      throwIfNamespace: false, // This disables the JSX namespace check
    },
  },
};
