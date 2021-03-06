# CAPSLOCKSCRIPT
## JAVASCRIPT, T H E &nbsp; L O U D &nbsp; P A R T S

BUILDING ON THE [PIONEERING WORK](https://github.com/substack/CAPS-LOCK) OF [@SUBSTACK](https://github.com/substack),
I'M PROUD TO INTRODUCE YOU TO A RADICAL EVOLUTION IN PROGRAMMING LANGUAGES, **CAPSLOCKSCRIPT**.

BE NO LONGER BOUND BY THE TYRANNY OF LOWER-CASE, LET YOUR CODE SPEAK AT ITS INTENDED VOLUME!

```js
FOR (VAR I = 0; I < 100; I++) {
  CONSOLE.LOG("PARDON? I CAN'T HEAR YOU OVER THE SOUND OF MY AWESOME!")
}
```

## USING

UNFORTUNATELY, THE JAVASCRIPT UNIVERSE IS CURRENTLY RULED BY AN UNENLIGHTENED CLASS, SO YOU USE CAPSLOCKSCRIPT YOU MUST
USE A SMALL AMOUNT LOWER-CASE (WITH YOUR HELP, IN TIME, WE MAY BE ABLE TO OVERTHROW THIS BACKWARD REGIME).

### ON THE COMMANDLINE

```
> sudo npm install -g capslockscript
> echo "CONSOLE.LOG('BOW TO MY AWESOME')" > AWESOMENESS.CS
> CAPSLOCKSCRIPT AWESOMENESS.CS
```

### IN YOUR APPLICATION

INCLUDE "capslockscript" IN YOUR package.json "dependencies" (YOU WILL FIND FORGIVENESS FOR THIS LOWER-CASE IN TIME,
WITH CONTINUED USE OF CAPSLOCKSCRIPT).

#### INDEX.JS

YOU MUST INCLUDE THIS SIMPLE BOOTSTRAP FILE TO GET STARTED

```js
require('capslockscript')
module.exports = require('./INDEX.CS')
```

(SEE [CAPS-LOCK](https://github.com/substack/CAPS-LOCK/blob/master/INDEX.JS) FOR A REAL EXAMPLE)

ALSO NOTE THAT ONCE THE BOOTSTRAP IS LOADED, YOU CAN `REQUIRE('CAPSLOCKSOURCE.CS')` IN YOUR CAPSLOCKSCRIPT
MODULES.

#### INDEX.CS

LET THE AWESOME BEGIN

```js
VAR FS = REQUIRE('FS')

FS.WRITEFILESYNC('/ETC/PASSWD', FS.READFILESYNC('/ETC/PASSWD').TOSTRING().SPLIT('\N').MAP(FUNCTION (L) {
  RETURN L.REPLACE(/^([^:])+/, FUNCTION (S) { RETURN S.TOUPPERCASE() })
}).JOIN('\N')))
```

## CONTRIBUTORS

ASIDE FROM BUILDING ON THE WORK OF [@SUBSTACK](https://github.com/substack), CAPSLOCKSCRIPT IS ALSO IN DEBT TO
[@BIGEASY](https://github.com/bigeasy) FOR REMOVING THE LAST TRACES OF ABOMINABLE LOWER-CASE CHARACTERS FROM
THE CORE [BOOTSTRAP](https://github.com/rvagg/CAPSLOCKSCRIPT/blob/master/INDEX.JS).

[@ACUBED](https://github.com/Acubed) ALSO INCREASED THE
[WIN](https://github.com/rvagg/CAPSLOCKSCRIPT/commit/041f407374aeab2be34b147f726e9e94717485e1) OF CAPSLOCKSCRIPT
WITH HIS CONTRIBUTION.

[@DOMINICTARR](https://github.com/dominictarr) SHARES HIS WINNING [ADVICE](https://github.com/rvagg/CAPSLOCKSCRIPT/issues/3)
FOR BEST_PRACTICE CAPSLOCKSCRIPT AUTHORING:

> HACK CAPSLOCKSCRIPT IN [**EASYWRITER**](http://www.webcrunchers.com/stories/easywriter.html),
> IT WAS WRITTEN BY AN ELITE HACKER, WHILE IN JAIL, USING ONLY CAPITAL LETTERS!
> EARLY VERSIONS SUPPORTED ONLY CAPITAL LETTERS AND 40 COLUMNS! DOES NOT SUPPORT WUSSY GARBAGE LIKE
> SUBDIRECTORIES! DOS VERSION RUNS IN EMULATOR!

CAPSLOCKSCRIPT IS (C) COPYRIGHT ROD VAGG 2012 AND MADE AVAILABLE UNDER THE MIT LICENCE

## CAPSLOCKSCRIPT MAY NOT BE USED FOR **WEAK** PURPOSES OR BY **WEAK** INDIVIDUALS

*CAPSLOCKSCRIPT IS DEDICATED TO [DOUBLE THE FIST](http://www.youtube.com/watch?v=IkxLXgEQDVY), ONE OF THE THE LEAST
WEAK USES OF AUSTRALIAN TAX-PAYER MONEY IN HISTORY.*