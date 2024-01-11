# Generating ucumDefs.json

This folder contains the tool for generating ucumDefs.json, which is what contains the unit data.
You only need to run this tool if you wish to modify or update that data.

Before you can use the tool you need to build it with the command:

    npm run build

Then, to generate **ucumDefs.json**, cd into "impexp" folder and run command:

    cd impexp
    node updateDataBuild

This runs the code that does two actions:
1. Creates or replaces *"../data/ucumDefs.json"* from *"../data/ucum-essence.xml"*.

   *ucum-essence.xml* is UCUM XML "essence" document, which contains
   XML definitions of the UCUM prefixes and units.

   This will also create a *ucumEssenceVersion.txt* file in the data directory.

   That file contains the version number, revision number and date of the
   ucum-essence.xml file used to create ucumDefs.json.  If it differs from
   what is currently shown on the UCUM Demo page, and if you are planning to update the demo,
   move the file created to the demo directory on the gh-pages branch
   and rename it UcumEssenceVersion.shtml.  Otherwise you can just delete it.

2. Updates the *"../data/ucumDefs.json"* with data from *"../data/ucum.csv"*,
   which contains synonym data and additional unit combinations pulled from LOINC.

   You can skip this step by passing parameter *--skip-ucum-csv*
   
       node updateDataBuild --skip-ucum-csv
