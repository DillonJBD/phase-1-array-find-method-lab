const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
]

function superbowlWin(array){
    const {year, result} = array;

    const winningYear = array.find(obj => obj.result === "W" );

    if(winningYear){
        return winningYear.year;
    }
    return undefined;
}

console.log(superbowlWin(record));
