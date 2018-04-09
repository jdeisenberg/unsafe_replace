type t = string

external unsafeReplace : Js.Re.t ->  (t -> t array -> int -> t -> t [@bs.uncurry]) -> t -> t =
  "unsafeReplaceConnector" [@@bs.module "./Connector"]

(* Uppercase two words separated by a hyphen *)
let inStr1 = "Replace abc-def"

let replaceFunction1 matchPart captures offset wholeString =
  Js.Array.joinWith "/" (Belt.Array.map captures (fun x -> Js.String.toUpperCase x))

let outStr1 = unsafeReplace [%re "/(\\w+)-(\\w+)/"] replaceFunction1 inStr1
let () = Js.log(outStr1)

(* Replace expressions of form /(x0, y0) to (x1, y1)/ by the Pythagorean distance
  between the given points **)
let inStr2 = "Distance (0, 3) to (4, 6)"
let replaceFunction2 matchPart captures offset wholeString =
  let numbers = Belt.Array.map captures (fun x -> Js.Float.fromString(x)) in
  let () = Js.log(numbers) in
  let d = sqrt ((numbers.(2) -. numbers.(0)) ** 2.0 +. (numbers.(3) -. numbers.(1)) ** 2.0) in
  Js.Float.toString(d)
  
let outStr2 = unsafeReplace [%re "/\((\\d+), (\\d+)\) to \((\\d+), (\\d+)\)/"] replaceFunction2 inStr2
let () = Js.log(outStr2)
