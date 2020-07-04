const { extractRequest } = require("./requestExtractor.js");
const { validateRequest } = require("./requestValidator.js");
const { buildResponse } = require("./responseBuilder.js");
const { transformRequest } = require("./transformer.js");

module.exports = {
  extractRequest,
  validateRequest,
  buildResponse,
  transformRequest,
};
