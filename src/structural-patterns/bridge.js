/**
 * Decouple an abstraction from its implementation so that the two can vary
 * independently.
 *
 * In JS world: There is no bridge here, but abstraction and implementation can
 * live independently. So we can use composite and visitor to mimic it. Plus,
 * we can use mock parental implementations if new one doesn`t exist yet.
 */

const { defMulti, defMethod } = require("../utils/multiple-dispatch.js");

const jobHierarchy = [
  "programmer-job",
  [
    ["java-job", ["senior-java-job"]],
    ["clojure-job", ["senior-clojure-job"]],
  ],
];

function findParentJobName(jobName, subtree) {
  if (isJobNameExistInNode(jobName, subtree)) {
    return subtree[0];
  }

  for (const node of subtree) {
    if (isJobNameExistInNode(jobName, node)) {
      return node[0];
    }
  }

  for (const node of subtree) {
    if (Array.isArray(node)) {
      return findParentJobName(jobName, node);
    }
  }
}

function isJobNameExistInNode(jobName, node) {
  return Array.isArray(node) && node.flat(1).includes(jobName);
}

function regularJob(...methodArguments) {
  const [jobName] = methodArguments;

  return [jobName === jobHierarchy[0], methodArguments];
}

function clojureJob(...methodArguments) {
  const [jobName] = methodArguments;

  return [jobName === jobHierarchy[1][1][0], methodArguments];
}

function adHocJob(...methodArguments) {
  const [jobName] = methodArguments;

  const parentJobName = findParentJobName(jobName, jobHierarchy);

  return [Boolean(parentJobName), [parentJobName]];
}

function filterRequirementsByJobName(jobName) {
  return defMulti(
    defMethod(regularJob(jobName), () => "Requirements for the programmer job"),
    defMethod(clojureJob(jobName), () => "Requirements for the clojure job"),
    defMethod(adHocJob(jobName), (parentJobName) =>
      filterRequirementsByJobName(parentJobName)
    ),
    defMethod([true, []], () => `Sorry, there is requirements ${jobName} :(`)
  )();
}

console.log(filterRequirementsByJobName("programmer-job"));
console.log(filterRequirementsByJobName("senior-clojure-job"));
console.log(filterRequirementsByJobName("logistic-job"));
