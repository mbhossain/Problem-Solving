// LeetCode
// https://leetcode.com/problems/longest-common-prefix/description/
const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    // Take the first string as the reference
    let prefix = strs[0];
    // Loop through the rest of the strings
    for (let i = 1; i < strs.length; i++) {
        // Check if the current string contains the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // If it doesn't, shorten the prefix by one character
            prefix = prefix.substring(0, prefix.length - 1);
            // If the prefix becomes empty, return an empty string
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// Example 1:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// Example 2:
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
