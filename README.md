# unsafe_replace

Currently, Bucklescript’s `js_string.ml` defines several versions of `replace` when specifying a function as a parameter: `unsafeReplaceBy0`, `unsafeReplaceBy1`, `unsafeReplaceBy2`, and `unsafeReplaceBy3`, depending on the number of capture groups.

However, if you have more than three capture groups, you are out of luck. This repository suggests a possible solution (which I am not clever enough to write as a pull request for BuckleScript). The idea is to specify the function passed
to a new function named `unsafeReplaceBy` with parameters:

* the matched part
* an array of strings containing the captured groups - thus allowing any number of capture groups in the regex
* an integer offset
* the whole string
* the string to be replaced (as last parameter so it will work with `send`)

To make this work, I provide a “connector” function that is a JavaScript variadic function to pass to `replace`. This variadic function takes the parameters and rearranges them into the format described above, then calls the function you passed in.
