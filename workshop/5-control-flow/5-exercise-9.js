// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
let y=" "
for (x = 0; x <= 8; x++) {
    if (x % 2 === 0 && x !== 8) {
        y= y+"#_#_#_#_ \n "
    } else if ( x === 8) {
        console.log(y)
    } else {
        y = y + "_#_#_#_# \n "
    }
}