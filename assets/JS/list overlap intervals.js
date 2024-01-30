

function mergeIntervals(intervals) {
    if (intervals.length === 0) {
        return [];
    }

    // Sort intervals based on the start points
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMergedInterval = merged[merged.length - 1];

        // If the current interval overlaps with the last merged interval
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Merge the intervals by updating the end point of the last merged interval if necessary
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // If there is no overlap, add the current interval to the merged list
            merged.push(currentInterval);
        }
    }

    return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals);  // Output: [[1, 6], [8, 10], [15, 18]]
