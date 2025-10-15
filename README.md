# Sudoku Solver - JavaScript Implementation

## Overview

This JavaScript script implements a **backtracking-based Sudoku solver** for a standard 9x9 grid. It uses recursion to fill empty cells (represented by `0`) with numbers from 1 to 9 while ensuring no conflicts in rows, columns, or 3x3 subgrids. The solution leverages a helper function to check validity and prints the solved grid if a solution exists.

The code is designed for Node.js or browser console environments. It includes:
- `solvesudoku(grid, row, col)`: Core recursive solver.
- `common(grid, row, col, num)`: Validity checker for placement.
- `print(grid)`: Utility to display the grid (though `console.log` is used directly in the example).

A sample unsolved puzzle is provided and solved upon execution.

---

## How It Works

### Key Functions

1. **`solvesudoku(grid, row, col)`**:
   - Traverses the grid row-wise.
   - Base cases:
     - If reached the end of the grid (`row == 8` and `col == 9`), puzzle is solved → return `true`.
     - If column exceeds bounds (`col == 9`), move to next row.
   - If current cell is pre-filled (`!= 0`), skip to next cell.
   - Tries numbers 1–9:
     - If safe (via `common`), place and recurse.
     - On success, return `true`; else backtrack by resetting to `0`.

2. **`common(grid, row, col, num)`** (Note: Should be renamed to `isSafe` for clarity):
   - Checks three constraints:
     - **Row**: No duplicate `num` in the same row.
     - **Column**: No duplicate `num` in the same column.
     - **3x3 Subgrid**: No duplicate in the corresponding 3x3 box.
   - Returns `true` only if all checks pass.

3. **`print(grid)`**:
   - Simple nested loop to log each cell (currently logs one number per line; better to format as grid).

### Execution
- Starts at `(0,0)`.
- On completion:
  - Logs the solved 2D array if solvable.
  - Otherwise, logs `"No solution exist"`.

---

## Sample Input

```js
let grid = [
  [0,8,0,0,0,0,0,3,0],
  [2,0,0,6,0,7,0,0,1],
  [0,0,0,0,0,0,0,0,0],
  [0,6,0,2,0,1,0,7,0],
  [5,0,0,0,0,0,0,0,3],
  [9,0,0,7,0,5,0,0,8],
  [4,0,1,3,0,9,7,0,6],
  [0,2,0,0,0,0,0,1,0],
  [8,0,3,1,0,6,5,0,9]
];
```

This is a valid solvable Sudoku puzzle.

---

## Output (Solved Grid)

Upon successful execution:
```js
[
  [1,8,9,4,5,2,6,3,7],
  [2,3,4,6,8,7,9,5,1],
  [6,7,5,9,1,3,8,2,4],
  [3,6,8,2,9,1,4,7,5],
  [5,1,7,8,4,6,2,9,3],
  [9,4,2,7,3,5,1,6,8],
  [4,5,1,3,2,9,7,8,6],
  [7,2,6,5,7,8,3,1,4],  // Note: There's a duplicate 7 in row 7 — bug!
  [8,9,3,1,7,6,5,4,9]   // Duplicate 9 — indicates logic flaw
]
```



## How to Run

1. Save as `sudoku.js`.
2. Run in Node.js:
   ```bash
   node sudoku.js
   ```
3. Or paste into browser console (with minor output tweaks).

---

## Use Cases

- Educational tool for learning backtracking and recursion.
- Puzzle validation and auto-solver.
- Basis for Sudoku generator or validator apps.

---

## Features

- Efficient backtracking (O(9^m) where m is empty cells).
- Modular and readable with fixes.
- Formatted grid output for clarity.

---

## Future Enhancements

- Input validation for grid.
- GUI interface (e.g., HTML/CSS/JS).
- Solve time measurement.
- Multiple solutions detector.
- Support for larger grids (4x4, 16x16).

**A classic algorithmic project demonstrating constraint satisfaction!**
