// LeetCode
// https://leetcode.com/problems/add-two-numbers/description/
const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

// Definition for singly-linked list node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Traverse both lists until both are fully processed
    while (l1 !== null || l2 !== null) {
        // Get the value from l1 and l2 nodes, or 0 if the node is null
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;

        // Calculate the sum of the current digits and the carry
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);  // Calculate the carry for the next iteration
        current.next = new ListNode(sum % 10);  // Create a new node for the result

        // Move to the next node in each list (if any)
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // If there's any carry left after the last addition, add a new node for it
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    // Return the next node of the dummy head (skipping the initial dummy node)
    return dummyHead.next;
}

// Helper function to print the linked list (for testing)
function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

// Example usage:
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));  // Represents number 342
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));  // Represents number 465

let result = addTwoNumbers(l1, l2);  // Result should represent 807
printList(result);  // Output: [7, 0, 8]
