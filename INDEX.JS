BOOTSTRAP = {};

BOOTSTRAP.UNESCAPE = GLOBAL[[[]+[][[]]][+[]][+[]]+[[]+[][[]]][+[]][+!![]]+[[]+!![]][+[]][+!![]+!![]+!![]]+[[]+![]][+[]][+!![]+!![]+!![]]+[[]+/!/[[[]+!![]][+[]][+[]]+[[]+!![]][+[]][+!![]+!![]+!![]]+[[]+![]][+[]][+!![]+!![]+!![]]+[[]+!![]][+[]][+[]]]][+[]][+!![]+!![]+!![]]+[[]+![]][+[]][+!![]]+[[]+/!/[[[]+/!/[[[]+!![]][+[]][+[]]+[[]+![]][+[]][+!![]+!![]+!![]+!![]]+[[]+![]][+[]][+!![]+!![]+!![]]+[[]+!![]][+[]][+[]]]][+[]][+!![]+!![]+!![]]+[[]+/!/[[[]+!![]][+[]][+[]]+[[]+![]][+[]][+!![]+!![]+!![]+!![]]+[[]+![]][+[]][+!![]+!![]+!![]]+[[]+!![]][+[]][+[]]]][+[]][+!![]+!![]+!![]+!![]+!![]+!![]]+[[]+[][[]]][+[]][+!![]]+[[]+![]][+[]][+!![]+!![]+!![]]+[[]+!![]][+[]][+[]]+[[]+!![]][+[]][+!![]]+[[]+[][[]]][+[]][+[]]+[[]+/!/[[[]+!![]][+[]][+[]]+[[]+![]][+[]][+!![]+!![]+!![]+!![]]+[[]+![]][+[]][+!![]+!![]+!![]]+[[]+!![]][+[]][+[]]]][+[]][+!![]+!![]+!![]]+[[]+!![]][+[]][+[]]+[[]+/!/[[[]+!![]][+[]][+[]]+[[]+![]][+[]][+!![]+!![]+!![]+!![]]+[[]+![]][+[]][+!![]+!![]+!![]]+[[]+!![]][+[]][+[]]]][+[]][+!![]+!![]+!![]+!![]+!![]+!![]]+[[]+!![]][+[]][+!![]]]][+[]][+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+[[]+!![]][+[]][+!![]+!![]+!![]]];

BOOTSTRAP.FUNCTION = GLOBAL[BOOTSTRAP.UNESCAPE('%46%75%6E%63%74%69%6F%6E')];
BOOTSTRAP.TOLOWERCASE = BOOTSTRAP.FUNCTION('S', BOOTSTRAP.UNESCAPE('\
  %72%65%74%75%72%6E S.%74%6FL%6F%77%65%72C%61%73%65() \
'));
BOOTSTRAP.DO = BOOTSTRAP.FUNCTION('$', BOOTSTRAP.UNESCAPE(BOOTSTRAP.TOLOWERCASE('\
  RETURN NEW %46UNCTION ("TOKENS", "REQUIRE", "MODULE", "LOAD",  UNESCAPE($.TO%4COWER%43ASE())) \
')));
BOOTSTRAP.REQUIRE = BOOTSTRAP.DO('RETURN ARGUMENTS.CALLEE.CALLER.ARGUMENTS[1]')();
BOOTSTRAP.MODULE = BOOTSTRAP.DO('RETURN ARGUMENTS.CALLEE.CALLER.ARGUMENTS[2]')();

BOOTSTRAP.TOKENS = 'O%62%6A%65%63%74 S%74%72%69%6E%67 A%72%72%61%79 N%75%6D%62%65%72 ' +
                   'R%65%67E%78%70 D%61%74%65 B%6F%6F%6C%65%61%6E B%75%66%66%65%72 ' +
                   '%74%6FS%74%72%69%6E%67 %74%6FL%6F%77%65%72C%61%73%65 ' +
                   '%74%6FU%70%70%65%72C%61%73%65 %69%6E%64%65%78O%66 %72%65%61%64F%69%6C%65S%79%6E%63 ' +
                   '%66%6F%72E%61%63%68 %67%65%74O%77%6EP%72%6F%70%65%72%74%79N%61%6D%65%73 ' +
                   'CAPSLOCKSCRIPT'

BOOTSTRAP.TOKENS = BOOTSTRAP.DO(
  'RETURN TOKENS.SPLIT(" ").MAP(FUNCTION (T) { RETURN { REG: NEW %52EG%45XP(UNESCAPE(T), "IG"), REP: UNESCAPE(T) } });'
)(BOOTSTRAP.TOKENS);

BOOTSTRAP.CAPSLOCKSCRIPT = BOOTSTRAP.DO('\
  VAR %43%41%50%53%4C%4F%43%4B%53%43%52%49%50%54 = FUNCTION (S, EXTRA_TOKENS, EXTRA_ARGS) { \
    S = S.TO%4COWER%43ASE(); \
    TOKENS.CONCAT(EXTRA_TOKENS || []).FOR%45ACH(FUNCTION (T) { S = S.REPLACE(T.REG, T.REP) }); \
    RETURN NEW %46UNCTION([ "%43%41%50%53%4C%4F%43%4B%53%43%52%49%50%54", "REQUIRE" ].CONCAT(EXTRA_ARGS || []), S).BIND(THIS, %43%41%50%53%4C%4F%43%4B%53%43%52%49%50%54, REQUIRE); \
  }; \
  RETURN %43%41%50%53%4C%4F%43%4B%53%43%52%49%50%54; \
')(BOOTSTRAP.TOKENS, BOOTSTRAP.REQUIRE);

BOOTSTRAP.LOAD = BOOTSTRAP.CAPSLOCKSCRIPT('\
 RETURN FUNCTION (F, EXTRA_TOKENS, EXTRA_ARGS) { \
   DELETE GLOBAL["BOOTSTRAP".TOUPPERCASE()]; \
   RETURN CAPSLOCKSCRIPT(REQUIRE("FS").READFILESYNC(F).TOSTRING(), EXTRA_TOKENS, EXTRA_ARGS) \
 } \
')();

BOOTSTRAP.DO('\
  VAR PATH = REQUIRE("PATH"); \
  LOAD( \
    PATH.JOIN(PATH.DIRNAME(MODULE.FILENAME), "INDEX.CS".TO%55PPER%43ASE()), \
    [], [ "TOKENS", "LOAD", "MODULE" ] \
  )(TOKENS, LOAD, MODULE) \
')(BOOTSTRAP.TOKENS, BOOTSTRAP.REQUIRE, BOOTSTRAP.MODULE, BOOTSTRAP.LOAD);
