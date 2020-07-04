/**
 * Provide an unified interface to a set of interfaces in a subsystem. Facade
 * defines a higher-level interface that makes the subsystem easier to use.
 *
 * In JS world: It is a single point of access.
 */

const facade = require("./facade.js");
const { extractRequest } = require("./requestExtractor.js");
const { validateRequest } = require("./requestValidator.js");
const { transformRequest } = require("./transformer.js");
const { buildResponse } = require("./responseBuilder.js");

function service(request) {
  console.log("\nService without Facade");
  buildResponse(transformRequest(validateRequest(extractRequest(request))));
}

function serviceWithFacade(request) {
  console.log("\nService with Facade");
  facade.buildResponse(
    facade.transformRequest(
      facade.validateRequest(facade.extractRequest(request))
    )
  );
}

const request = "Java is just like JavaScript";

service(request);
serviceWithFacade(request);
