// code your solution here


function superbowlWin(record) {
    const results = record.find( ({result}) => result === "W"); 
    return results ? results.year : undefined;
};
