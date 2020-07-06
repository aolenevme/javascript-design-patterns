/**
 * Decouple an abstraction from its implementation so that the two can vary
 * independently.
 *
 * In JS world: There is no bridge here, but abstraction and implementation can
 * live independently.
 */

const { defMulti, defMethod } = require("./common/multiple-dispatch.js");

const hierarchy = [
  "job",
  [
    ["clojure-job", ["senior-clojure-job"]],
    ["java-job", ["senior-java-job"]],
  ],
];

function regularJob(...methodArguments) {
  const [jobName] = methodArguments;

  return [jobName === hierarchy[0], methodArguments];
}

function adHocJob(...methodArguments) {
  const [jobName] = methodArguments;

  const [isJobExistInHierarchy, parentJobName] = findParentJobName(jobName);

  return [isJobExistInHierarchy, [parentJobName]];
}

function findParentJobName(jobName) {
  const flattedJobHierarchy = hierarchy.flat(3);

  const isJobExistInHierarchy = flattedJobHierarchy.includes(jobName);

  if (!isJobExistInHierarchy) {
    return [false, ""];
  }

  return [true, "job"];
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
console.log(filterPositionByJobName("non-existing-job"));
