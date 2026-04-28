module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    const testPathArray = testPath.split("/");
    testPathArray.splice(-1, 0, "__snapshots__", "ios");

    return testPathArray.join("/") + snapshotExtension;
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath
      .replace("__snapshots__/android/", "")
      .replace("__snapshots__/ios/", "")
      .replace("__snapshots__/", "")
      .slice(0, -snapshotExtension.length);
  },
  testPathForConsistencyCheck: "someFolder/__tests__/example.test.js",
};
