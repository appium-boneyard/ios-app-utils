import path from 'path';
import { plist } from 'appium-support';
import log from './logger.js';

async function extractBundleId (app) {
  log.debug("Getting bundle ID from app");
  let plistFile = path.resolve(app, "Info.plist");
  let obj;
  try {
    obj = await plist.parsePlistFile(plistFile);
  } catch (err) {
    log.error("Could not get the bundleId from app.");
    throw err;
  }
  return obj.CFBundleIdentifier;
}

export default extractBundleId;
