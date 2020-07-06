/**
 * Decouple an abstraction from its implementation so that the two can vary
 * independently.
 *
 * In JS world: There is no bridge here, but abstraction and implementation can
 * live independently.
 */

const { defMulti, defMethod } = require("./common/multiple-dispatch.js");

const jobHierarchy = [
  "job",
  [
    ["clojure-job", ["senior-clojure-job"]],
    ["java-job", ["senior-java-job"]],
  ],
];

function regularJob(...methodArguments) {
  const [jobName] = methodArguments;

  return [jobName === jobHierarchy[0], methodArguments];
}

function adHocJob(...methodArguments) {
  const [jobName] = methodArguments;

  const [isParentJobNameFound, parentJobName] = findParentJobName(jobName);

  return [isParentJobNameFound, [parentJobName]];
}

function isJobExistInHierarchy(jobName) {
  const flattenJobHierarchy = jobHierarchy.flat(3);

  return flattenJobHierarchy.includes(jobName);
}

function findParentJobName(jobName, currentJobHierarchy = jobHierarchy) {
  if (!isJobExistInHierarchy(jobName)) {
    return [false, ""];
  }

  const flatten4currentLevelJobHierarchy = currentJobHierarchy.flat(1);

  if (flatten4currentLevelJobHierarchy.includes(jobName)) {
    return [true, flatten4currentLevelJobHierarchy[0]];
  }

  return findParentJobName(jobName, );
}

function filterPositionByJobName(jobName) {
  return defMulti(
    defMethod(
      regularJob(jobName),
      () => `Check requirements for the ${jobName}`
    ),
    defMethod(adHocJob(jobName), (parentJobName) =>
      filterPositionByJobName(parentJobName)
    ),
    defMethod([true, []], () => `Sorry, there is no such job: ${jobName} :(`)
  )();
}

console.log(filterPositionByJobName("job"));
console.log(filterPositionByJobName("senior-clojure-job"));
console.log(filterPositionByJobName("non-existing-in-hierarchy-job"));
