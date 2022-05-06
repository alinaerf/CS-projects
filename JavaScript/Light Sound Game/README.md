# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alina Erofeeva**

Time spent: **7.5** hours spent in total

Link to project: https://glitch.com/edit/#!/codepath-memory-game-light-and-sound

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] User chooses the difficulty of the level, which determines the length of the played pattern

## Video Walkthrough (GIF)

General work of the website: increasing the length of the pattern if the user correctly identifies the order:
![](http://g.recordit.co/yBNcnCwLV6.gif)
The player loses only after 3 mistakes:
![](http://g.recordit.co/ErrmqFkpIi.gif)
Change of the difficulty level during the game results in the restart of the game:
![](http://g.recordit.co/DcVVESRdlX.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- https://www.w3schools.com/js/js_random.asp JavaScript Random Module
- https://www.w3schools.com/jsref/jsref_push.asp Adding an element to an array
- https://unsplash.com/ Photos for one of the additional features
- https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element How to incorporate a picture in the button
- https://www.w3schools.com/tags/att_global_class.asp#:~:text=To%20specify%20multiple%20classes%2C%20separate,classes%20for%20one%20HTML%20element. Addition of classes to an element
- https://www.w3schools.com/js/js_popup.asp Using Confirm Popup box


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One of the challenges I encountered was understanding the musical aspect of the game. I have created websites before, but I have never incorporated music or sounds into them. I am not entirely familiar with setTimeout and setTargetAtTime functions used in the script for the website. To comprehend the algorithm and the process of playing sounds on websites, I did additional research on the unknown functions and followed the link provided in the pre-work. I believe it will help me utilize the gained knowledge in my future work in web development and improve my research skills to learn about new features that can be implemented on a website.

Other challenges for me involved the implementation of additional features to the game. I was unsure how to add an image over a button when pressed on or the sequence is played. In order to find a solution, I did some research and found an answer on StackOverflow that demonstrated how to add the image tag between the opening and closing tag of the button. Moreover, I brainstormed how to ensure that the picture is only displayed in certain situations by observing the pattern of light-up buttons and sounds when the sequence is played or when a user presses the button. Lastly, I edited the CSS properties of the images to align with the button by iteration and observation of the effect on the web page.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One of the questions I have about web development is how backend and frontend aspects of the web page are connected when developing a commercial project. Moreover, I am generally interested in the process of creating functional websites for commercial and artistic projects, observing the whole process of creating a prototype to analysis of the needs of users to ideating the idea into a final website. Lastly, creating the light and sound memory game made me think about how can the game be more popularized by using data about other users’ performance to display on the game website and create additional levels with more sophisticated features. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 


I would like to improve the competitive part of the game by making the process of sequence generation more sophisticated and varying the length of the sequence, the number of buttons in the game, and the time allotted to display the sequence. By adding a more level-based approach, levels can vary in difficulty and add a layer of the player board which shows the achievements of the players who logged into the game.

Additionally, it would be an exciting feature to add different sound effects and themed images based on the player’s choice and performance. For instance, upon completion of a challenging level, a player can play an animal-themed version of the game, where sounds and images connected to buttons are related to animal images and sounds. The player could change the theme from the original one to the ones the user earns by completing the levels.





## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/c0c0fd0e6cef4190b0cf34a963fafc6d)


## License

    Copyright: Alina Erofeeva.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
