function activitySelection(activites) {
    let results = [0];
    j = 0;
    for (let i = 1; i < activites.length; i++) {
        if (activites[i].start >= activites[j].end) {
        results.push(i)
        j = i;
        }
    }
    return results;
}

let activities = [
    {start: 9, end: 11},
    {start: 10, end: 11},
    {start: 11, end: 12},
    {start: 12, end: 14},
    {start: 13, end: 15},
    {start: 15, end: 16},
]
let results = activitySelection(activities)
console.log(results)