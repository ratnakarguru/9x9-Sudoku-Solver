//N is tha value of the 2d sudoku
let N=9
function solvesudoku(grid,row,col)
/**
 * Here we take Grid ,Row and ,Col for 
 * we used grid for a the lines that cross each other to form a series of squares
 */
{
    if(row == N-1 && col == N)
    return true;

    if (col==N)
    {
        row++
        col=0
    }
    if(grid[row][col]!=0)
   /* Check if the current position
       of the grid already
       contains value >0, we iterate
       for next column*/
        return solvesudoku(grid,row,col+1);
    for(let num = 1; num<10;num++)
    /*Check if it is safe to place
         the num (1-9)  in the given
         row ,col ->we move to next column*/
    {
       if (common(grid,row,col,num))
       {
        grid[row][col]=num;
        if(solvesudoku(grid,row,col+1))
        return true
       }
       grid[row][col]=0;
    }
    return false;
}
function print(grid)
{
    for(let i=0;i<N;i++)
    {
        for(let j=0;j<N;j++)
        console.log(grid[i][j]+"")

    }
}
function common(grid,row,col,num)
{
    /**
     * Here it is used for the differnt number between 1 to 9 
     * And it worked if thier is a common in row and col number
     *  the it gives false value .
     */
    for(let x=0;x<=8;x++)
        if(grid[row][x]==num)
            return false
            for(let x=0;x<=8;x++)
                if(grid[x][col]==num)
                    return false
                let startrow = row-row%3,
                    startcol=col-col%3
                    for(let i=0;i<3;i++)
                        for(let j=0;j<3;j++)
                            if(grid[i+startrow][j+startcol]==num)
                                return false
    return true;
}
let grid=[[0,8,0,0,0,0,0,3,0],
          [2,0,0,6,0,7,0,0,1],
          [0,0,0,0,0,0,0,0,0],
          [0,6,0,2,0,1,0,7,0],
          [5,0,0,0,0,0,0,0,3],
          [9,0,0,7,0,5,0,0,8],
          [4,0,1,3,0,9,7,0,6],
          [0,2,0,0,0,0,0,1,0],
          [8,0,3,1,0,6,5,0,9]]
if(solvesudoku(grid,0,0))
    console.log(grid)
else
    console.log("No solution exist")