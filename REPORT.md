<ins>Problem / Bot Application<ins> 

A major problem found in any workplace is low team member productivity which results in late work and missed deadlines. These problems cause the stereotypical pitfalls faced by many teams of extending schedules past their promised deadlines. Such extensions cause major losses for companies in increased cost of project and work hours billed, disappointment of customers, and lagging behind market competitor product roll out. All of these aspects can massively hinder the potential success of a project and total profit it returns to the company.

Our focus bot would be used to increase team member productivity by solving the problem of avoiding late work and missed deadlines. This would avoid the stereotypical pitfalls many teams face of extending schedule past their promised deadlines, which cause major losses for companies in increased cost of project and work hours billed, massively hindering the potential success of the project. Thus the idea of our bot is to increase this productivity by getting workers to start projects earlier and keep them actively engaged in their projects during working hours.

<ins>Primary Features<ins>

All features can be accessed from the extension's popup menu by clicking it's appropriate button.

![Focus Bot](images/Report%20Images/Focus%20Bot.png)

Pomodoro:

Clicking 'Start Timer' to start a cycle of 15 minute timers that allow you to alternate between work and break to help you focus.

![Pomodoro](images/Report%20Images/Pomodoro.png)

The timer initially starts on work, but after 15 minutes the display will flip to break and display a popup notifying the user to take a break.

![Pomodoro Break Display](images/Report%20Images/Pomodoro%20Break%20Displayed.png)

After an additional 15 minutes, the display will flip to work and display a popup notifying the user to return to work.

![Pomodoro Work Display](images/Report%20Images/Pomodoro%20Work%20Displayed.png)

This cycle will continue, alternating between work and break every 15 minutes. Clicking 'Cancel Timer' will cancel this cycle.

Reminders:

Input a text reminder, valid date (Year-Month-Day) and time (24:00 - Hour:Minute). On clicking 'Create Reminder', a reminder will be created and stored to be displayed at that time.

![Reminder Added](images/Report%20Images/Reminder%20Added.png)

When the current time matches the time of a stored reminder, a popup will be displayed notifying the user with the reminder's text.

![Reminder Displayed](images/Report%20Images/Reminder%20Displayed.png)

Clicking 'Remove Reminders' will clear all stored reminders in the background.

![Reminders Cleared](images/Report%20Images/Reminders%20Cleared.png)

Encouragement:

Clicking 'Need Inspiration?' will display a randomly selected encouragement to the user.

![Encouragement Displayed](images/Report%20Images/Encouragement%20Displayed.png)

Music:

Clicking on any of the 4 types of music ("Classical Instrumental", "Lofi Hip Hop", "Anime Openings", "Epic Videogame") will open a Youtube link to play the music in the background.

![Music](images/Report%20Images/Music.png)

<ins>Reflection<ins>

The development process for this bot was probably more difficult than managing the code itself. While the team worked well together and was able to communicate well amongst members, all of us came into this class with bad development habits. Some of these bad habits came from working alone on school projects and some of these came from a lack of awareness surrounding best practices on project development management. We've been introduced to various individual things in others classes like Gnatt charts and the such, but it's never really been the focus of any of our curriculum. As such as a group we struggled with breaking our various bad habits and implementing new ones consistently, like regularly maintaining our kanban board or officially assigning tasks on Github. This exercise in project managment however has pushed us to move toward better managment practices and made us better software engineers overall, which will serve us well in the future in the job market.

As for the project itself, this was something that gave all of us pause and left us in an uneasy position. Given we were working on a Chrome extension it seemed a relatively simple and familiar task with a straightforward solution. However, the more we dived into the project the more unfamiliar and confusing the actual coding of the bot was, whether that was dealing with the background script, importing different node modules, or managing the interaction with the Chrome browser. This project has pushed us all in ways we weren't expecting and made us better coders, in both terms of the lessons learned about managment as well as expanding our familiarity with different forms of programs to include that of bots. 

<ins>Limitations & Future<ins>

One of our biggest limitations was attempting to integrate a background script that would be active without the main extension window open. This was a problem as the use of background.js as a 'service worker' that was completely separated from the main windows and their functionalities (and contents, in the case of displays) We had to essentially treat what should've been a locally accessible API and functionality as an outside system that we were sending messages to and from using Chrome's messenger API.

As for future plans, our main consideration would be altering the code so it allows for more user input. Most of the functions provided were limited in choice, ie clicking one button only allowed for one outcome and there was no place for users to change the outcome of that click. This can be seen most in functions like the music technique, there are only four specific choices a user can make, this was originally done because it was thought to reduce the amount of time the user spends focusing on music choice and allow them to get to work faster. However, this might be frustrating to some users who want a specific music genre not offered in the music selection. Thus any future work would like begin with increasing the amount of user input the fuctions allow.

Another release update we were thinking about would be including another API which would access internet sites like brainyquote.com to find new encouragement quotes for our encouragement function. At the moment the feature only pulls from a set list of quotes which, while still massive, is a finite number. Eventually it will run out and begin recycling the same quotes over and over again. This might be fine for some users, but other may become annoyed by this repetition. Thus adding on an additional API which can freely access websites that are repositories for various quotes would be useful to keep the encouragements fresh.Those are our main considerations for any future changes to the project. Though there may be others that come about at a later date.
