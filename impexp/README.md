# This folder contains tool for generate ucumDefs.json.
Before you can use that tool you should build it with command:

    npm run build

To generate **ucumDefs.json** you should run command:

    node updateDataBuild

This runs the code that do two action:
1. Creates or replaces *"../data/ucumDefs.json"* from *"../data/ucum-essence.xml"*

   *ucum-essence.xml* is UCUM XML "essence" document, which contains
   XML definitions of the UCUM prefixes and units.

   This will also create a *ucumEssenceVersion.txt* file in the data directory.

   That file contains the version number, revision number and date of the
   ucum-essence.xml file used to create ucumDefs.json.  If it differs from
   what is currently shown on the UCUM Demo page, move the file created to
   the demo directory and rename it UcumEssenceVersion.shtml.  Otherwise you
   can just delete it.

   You can skip this step by passing parameter *--skip-ucum-essence-xml*

       node updateDataBuild --skip-ucum-essence-xml

2. Updates the *"../data/ucumDefs.json"* with data from *"../data/ucum.csv"*

   You can skip this step by passing parameter *--skip-ucum-csv*
   
       node updateDataBuild --skip-ucum-csv
