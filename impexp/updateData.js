/**
 * This is the tool for generating ucumDefs.json. See the README for details.
 */

import { UcumXmlDocument } from "../source/ucumXmlDocument.js";
import { UcumDataUpdater } from "./ucumDataUpdater.js";

const params = process.argv.slice(2);

if (!params.includes('--skip-ucum-essence-xml')) {
  const docObj = UcumXmlDocument.getInstance();
  docObj.parseXml();
}

if (!params.includes('--skip-ucum-csv')) {
  const upd = UcumDataUpdater.getInstance();
  upd.readFile('../data/ucum.csv');
}
