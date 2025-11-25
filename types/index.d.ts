declare module "@lhncbc/ucum-lhc" {
  export type Ucum = {
    dimLen_: number;
    validOps_: string[];
    codeSep_: string;
    valMsgStart_: string;
    valMsgEnd_: string;
    cnvMsgStart_: string;
    cnvMsgEnd_: string;
    openEmph_: string;
    closeEmph_: string;
    openEmphHTML_: string;
    closeEmphHTML_: string;
    braceMsg_: string;
    needMoleWeightMsg_: string;
    needEqWeightMsg_: string;
    needEqChargeMsg_: string;
    csvCols_: Record<string, string>;
    inputKey_: string;
    specUnits_: Record<string, string>;
  };

  export class UcumLhcUtils {
    static getInstance(): UcumLhcUtils;

    constructor();

    useHTMLInMessage(use?: string): void;

    useBraceMsgForEarchString(use?: string): void;

    validateUnitString(
      uStr: string,
      suggest?: false,
      valConv?: string,
    ): ValidateUnitStringResult;
    validateUnitString(
      uStr: string,
      suggest?: true,
      valConv?: string,
    ): ValidateUnitStringResult & {
      suggestions: Suggestion[];
    };

    detectConversionType(
      fromUnit: object,
      toUnit: object,
    ): "normal" | "mol|mass" | "eq|mass" | "eq|mol" | "eq|mol|mass";

    convertUnitTo(
      fromUnitCode: string,
      fromVal: number | string,
      toUnitCode: string,
      options?: { suggest?: boolean; molecularWeight?: number; charge: number },
    ): {
      status: "succeeded" | "failed" | "errror";
      toVal: number | null;
      msg: string[];
      suggestions: {
        from: {
          msg: string;
          invalidUnit: string;
          units: string[];
        };
        to: {
          msg: string;
          invalidUnit: string;
          units: string[];
        };
      };
      fromUnit: string;
      toUnit: string;
    };

    convertToBaseUnits(
      fromUnit: string,
      fromVal: number | string,
    ): {
      status: "succeeded" | "invalid" | "failed" | "errror";
      msg: string[];
      magnitude: number;
      fromUnitIsSpecial: boolean;
      unitToExp: Record<string, number>;
    };

    checkSynonyms(theSyn: string): {
      status: "succeeded" | "failed" | "error";
      msg: string;
      units: Unit[];
    };

    getSpecifiedUnit(
      uName: string,
      valConv: "validate" | "convert",
      suggest: false,
    ): GetSpecifiedUnitResult & {
      suggestions: null;
    };
    getSpecifiedUnit(
      uName: string,
      valConv: "validate" | "convert",
      suggest: true,
    ): GetSpecifiedUnitResult & {
      suggestions: Suggestion[];
    };

    commensurablesList(
      fromName: string,
      categoryList?: string[] | null,
    ): [Unit[], string];
  }

  export class UnitTables {
    constructor();

    static getInstance(): UnitTables;

    unitsCount(): number;

    addUnit(theUnit: Unit): void;

    addUnitName(theUnit: Unit): void;

    addUnitCode(theUnit: Unit): void;

    addUnitString(theUnit: Unit): void;

    addUnitDimension(theUnit: Unit): void;

    buildUnitSynonyms(): void;

    addSynonymCodes(theCode: string, theSynonyms: string[]): void;

    getUnitByCode(uCode: string): Unit | null;

    getUnitByName(uName: string): Unit[] | null;

    getUnitByString(uString: string): Unit[] | null;

    getUnitsByDimension(uDim: string): Unit[] | null;

    getUnitBySynonym(uSyn: string):
      | {
          status: "succeeded";
          units: Unit[];
        }
      | {
          status: "failed" | "error";
          msg: string;
        };

    getAllUnitNames(): string[];

    getUnitNamesList(): string[];

    getMassDimensionIndex(): number;

    compareCodes(a: string, b: string): -1 | 1;

    getAllUnitCodes(): string[];

    allUnitsByDef(): Unit[];

    allUnitsByName(cols: string[], sep: string): string;

    printUnits(doLong: boolean, sep: string): string;
  }

  type Dimension = {};

  type Unit = {
    name_: string;
    csCode_: string;
  };

  type ValidateUnitStringResult = {
    status: "valid" | "invalid" | "error";
    ucumCode: string;
    msg: string[];
    unit: Unit;
  };

  type GetSpecifiedUnitResult = {
    status: "valid" | "invalid" | "error";
    unit: Unit | null;
    origString: string;
    retMsg: string[];
  };

  type Suggestion = {
    msg: string;
    invalidUnit: string;
    units: [code: string, name: string, guidance: string][];
  };
}
