var BUGNUMBER = 1135377;
var summary = "Implement RegExp unicode flag -- ignoreCase flag for CharacterClass.";

//print(BUGNUMBER + ": " + summary);

assertEqArray(/[ABC]+/iu.exec("DCBAabcd"),
              ["CBAabc"]);

assertEqArray(/[A\u{10401}]+/iu.exec("A\u{10401}a\u{10429}"),
              ["A\u{10401}a\u{10429}"]);

assertEqArray(/[\u{10401}-\u{10404}\u{10408}-\u{1040B}]+/iu.exec("\u{10400}\u{10401}\u{10402}\u{10403}\u{10404}\u{10408}\u{10409}\u{1040A}\u{1040B}\u{1040C}"),
              ["\u{10401}\u{10402}\u{10403}\u{10404}\u{10408}\u{10409}\u{1040A}\u{1040B}"]);
assertEqArray(/[\u{10401}-\u{10404}\u{10408}-\u{1040B}]+/iu.exec("\u{10428}\u{10429}\u{1042A}\u{1042B}\u{1042C}\u{10430}\u{10431}\u{10432}\u{10433}\u{10434}"),
              ["\u{10429}\u{1042A}\u{1042B}\u{1042C}\u{10430}\u{10431}\u{10432}\u{10433}"]);

assertEqArray(/[\u{10429}-\u{1042C}\u{10430}-\u{10433}]+/iu.exec("\u{10400}\u{10401}\u{10402}\u{10403}\u{10404}\u{10408}\u{10409}\u{1040A}\u{1040B}\u{1040C}"),
              ["\u{10401}\u{10402}\u{10403}\u{10404}\u{10408}\u{10409}\u{1040A}\u{1040B}"]);
assertEqArray(/[\u{10429}-\u{1042C}\u{10430}-\u{10433}]+/iu.exec("\u{10428}\u{10429}\u{1042A}\u{1042B}\u{1042C}\u{10430}\u{10431}\u{10432}\u{10433}\u{10434}"),
              ["\u{10429}\u{1042A}\u{1042B}\u{1042C}\u{10430}\u{10431}\u{10432}\u{10433}"]);

assertEqArray(/[\u{10401}-\u{10404}\u{10430}-\u{10433}]+/iu.exec("\u{10400}\u{10401}\u{10402}\u{10403}\u{10404}\u{10408}\u{10409}\u{1040A}\u{1040B}\u{1040C}"),
              ["\u{10401}\u{10402}\u{10403}\u{10404}\u{10408}\u{10409}\u{1040A}\u{1040B}"]);
assertEqArray(/[\u{10401}-\u{10404}\u{10430}-\u{10433}]+/iu.exec("\u{10428}\u{10429}\u{1042A}\u{1042B}\u{1042C}\u{10430}\u{10431}\u{10432}\u{10433}\u{10434}"),
              ["\u{10429}\u{1042A}\u{1042B}\u{1042C}\u{10430}\u{10431}\u{10432}\u{10433}"]);

if (typeof reportCompare === "function")
    reportCompare(true, true);
