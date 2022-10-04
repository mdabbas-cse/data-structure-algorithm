# Big O Cheat Sheet:
## Big Os
- O(1) Constant- no loops
- O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search).
- O(n) Linear- for loops, while loops through n items.
- O(n log(n)) Log Liniear- usually sorting operations.
- O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops.
- O(2^n) Exponential- recursive algorithms that solves a problem of size N.
- O(n!) Factorial- you are adding a loop for every element.
- Iterating through half a collection is still O(n).
- Two separate collections: O(a * b).
## What can cause time in a function?-
> - Operations (+, -, *, /)
> - Comparisons (<, >, ==)
> - Looping (for, while)
> - Outside Function call (function())
## Rule Book
> Rule 1: Always worst Case\
> Rule 2: Remove Constants\
> Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
> > - for steps in order
> > - for nested steps 

> Rule 4: Drop Non-dominant terms
## What causes Space complexity?
- Variables
- Data Structures
- Function Call
- Allocations
## Hash table time complexity in Big O notation
 | Algorithm | Average |  Worst case |
 | ---------- | ------- |  --------- |
 | Space   |   O(n)	 |   O(n)|
 | Search  |   O(1)	 |   O(n)|
 | Insert  |   O(1)	 |   O(n)|
 | Delete  |   O(1)	 |   O(n)|

## Linked list
- Singly Linked List
- Circular Linked List
- Doubly Linked List
### Linked list time complexity in Big O notation
| Algorithm   | Average|
| ----------  | -------|
| prepend     | O(1) |
| append      | O(1) |
| lookup/search      | O(n) |
| insert      | O(n) |
| delete      | O(n) |
| reverse      | O(n) |
### Stacks time complexity in Big O notation
| Algorithm   | Average|
| ----------  | -------|
| lookup     | O(n) |
| pop      | O(1) |
| push      | O(1) |
| peek      | O(1) |
### Stacks time complexity in Big O notation
| Algorithm   | Average|
| ----------  | -------|
| lookup     | O(n) |
| enqueue      | O(1) |
| dequeue      | O(1) |
| peek      | O(1) |
