# Tic-Tac-Toe
GA Project 1: Tic-Tac-Toe Game


## Technologies Used
* HTML
* CSS
* Javascript
    * npm: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

## Approach/ Project Plan
I started out my project by planning out my Bronze, Silver, & Gold MVP goals. I then created a Wireframe so that I would at least know what my basic compontents were for the structure of my game. I felt it was easiest for me to break my plans down into smaller goals for each file/language type I would be using to create the game. This was almost like my scratch paper pseudocode. 

I made sure to frequently refer back at the User Stories and Technical Requirements, in order to ensure I did not miss steps. These are the things I outlined in my plan:

### MVP - Bronze Plan
Wireframe:
![](https://github.com/rjehrlich/tic-tac-toe/blob/88593425626fd908b1cd9da7a1bf89e678eca3bf/images/Frame%201.png)
#### HTML
* Page Header
* Element for 3x3 table
* Section to display each player
* Section to tell you whose turn it is
* Button for resetting the game
* Footer? 
#### CSS
* Style for heading (h1)
* Universal body styles (fonts, colors, center content, etc)
* Style for game board
* Style for the players' choice
* Style for turn text/ functionality displayed
* Style for reset button
* basic footer style
#### Javascript
* Event listener for clicking in table squares
* Variables for storing Players' input choice (X vs O)
  * input choice converted to uppercase
* function to play game & reset game
* function to check which player won
* function to check draw

### MVP - Silver Plan
#### HTML
* Semantic HTML
#### CSS
* Additional hover effects
* Flexbox or flexgrid for game board
#### Javascript
* Flexible/open player input
* Refactor code: more functions, order makes more sense, DRY, etc.

### MVP - Gold Plan
#### HTML
#### CSS
* Fun player characters users can choose
#### Javascript
* Animation that displays when someone wins

### User Stories
* As a user, I should be able to start a new tic tac toe game
* As a user, I should be able to click on a square to add X first and then O, and so on
* As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
* As a user, I should not be able to click the same square twice
* As a user, I should be shown a message when I win, lose or tie
* As a user, I should not be able to continue playing once I win, lose, or tie
* As a user, I should be able to play the game again without refreshing the page

## Mistakes or Things I Learned Along the Way
* One hard thing for me in this project was truly understanding or figuring out how each of my functions would work together.
    * I had to do a lot of drawing on scratch paper reading to myself each line of code and visually trying to understand how my code was executing. This came in handy most when I was debugging.
* I also learned a lot about how to read and understand MDN. Sometimes the documentation was a bit confusing for me of utilizing different methods, but when I would try the examples and then console.log along the way, I got a better understanding for the explanations.
* Solving for the winner was a challenge for me as well. I was over complicating my thought process. When my instructor gave me the advice of "Start with writing out the conditions in plain languuage first" that really helped me! I ended up with 18 or so if/else statements and finally got my code to work. 
    * Once I felt the rest of my code was in a good place, I went back and refactored the code, thinking about a new approach that would be more efficient.

## Unsolved Problems/ What I Would Work On Next
* Keeping track of users scores each round
* Figuring out how to create the game using js classes!
* Allowing a user to choose their character for playing the game and giving a list of options