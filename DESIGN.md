Gabriela Onelli, Erick Lim, Steven Santiago 
Dr. Yang
SSW 345
28 March 2021

Design Milestone
<ins>Problem Statement</ins>

A major problem found in any workplace is low team member productivity which results in late work and missed deadlines. These problems cause the stereotypical pitfalls faced by many teams of extending schedules past their promised deadlines. Such extensions cause major losses for companies in increased cost of project and work hours billed, disappointment of customers, and lagging behind market competitor product roll out. All of these aspects can massively hinder the potential success of a project and total profit it returns to the company.

<ins>Bot Description</ins>
Group 7's focus bot would be used to increase team member productivity by solving the problem of avoiding late work and missed deadlines. This would avoid the stereotypical pitfalls many teams face of extending schedule past their promised deadlines, which cause major losses for companies in increased cost of project and work hours billed, massively hindering the potential success of the project. Thus the idea of our bot is to increase this productivity by getting workers to start projects earlier and keep them actively engaged in their projects during working hours. As such we would be looking at a focus bot focused on the patterns of notifiers and space responders to accomplish these tasks. 
The focus bot has conversations with the users as well as responds to events. The bot allows the user to set specific tasks and reminders that are used as a checklist. The user is able to interact with these reminders in order to stay on task and keep track of their work. The bot also has a function to display encouraging messages over in a loop to keep the user motivated when the user selects that mode. Furthermore, the bot and the user interact with each other in the Pomodoro Focus Technique, in which the user sets a time to focus and the bot displays the time left in focus. The bot also sends notifications to the user after certain events happen, such as completing all the daily reminders, alerting the user after being idle for a period of time, or finishing their Pomodoro Focus Technique.

**Tagline:** Keep an eye out with A.I.!

Use Cases

<ins>Use Case One : Set / Use Reminders</ins>

**Preconditions:**
-None

**Main Flow:**
-User opens the main menu. 
-User opens “Reminder” menu. 
-User inputs a note to be reminded with. [E1] User inputs a date/time for the note to be reminded of. 
-[S1] At provided date/time, the bot will display the note. 
-[S2] Note will not be removed until User manually closes reminder.

**Subflows:**
-[S1] User does not input a date/time. Bot will set reminder date/time to 24 hours after current date/time.
-[S2] Bot is not active at the provided date/time. When Bot becomes active after reminder date/time, display note.

**Alternative Flows:**
[E1] User does not input a note. 

	
<ins>Use Case Two: Start Pomodoro Focus Technique</ins>

**Preconditions:**
-The user has a browser that supports the plugin extension
-That there are not other focus techniques running at the same time

**Main Flow:**
-The user opens the main menu by clicking on the browser extension
-User decides on which focus technique to use, in this case picking the pomodoro focus technique
-They click on that option which starts the timer for their work period
-They work on the project until the timer counts down
-The timer alerts them that the time is done and their break time begins
-When the user acknowledges this, the plugin will begin the timer for the break time
-Once that time is up the timer will again alert the user, who will have to acknowledge the alert to cause the program to begin the new work timer
-This cycle will continue until the user cancels the pomodoro technique

**Sub Flows:**
-The user hits pause on one of the timers
	-This will cause a third timer to begin that will count down how long the pause will be
	-The user can cancel this pause at any point during this time
	-When the timer reaches zero the user can either continue back to the original timer that was paused, or if they do not believe they will be able to return to work can 	cancel all the timers and return to main menu

**Alternative Flows:**
-The user chooses a different focus method such as the encouragement loop or music/noise loop
-The user decides to change the values for each of the timers thus goes to the settings instead of starting the technique


<ins>Design Sketches:</ins>
![SSW345 MilestoneDiagram V3](https://user-images.githubusercontent.com/63609012/112729622-84c35600-8f03-11eb-8764-f862d0a6f98b.png)

<ins>Architecture Design</ins>
![Design Milestone One Wireframe](https://user-images.githubusercontent.com/63609012/112729603-665d5a80-8f03-11eb-8ba7-7cf71f3fdebd.png)

**Platform**
Since the application will be designed as a plugin extension we will be working on browser platforms. Our primary target for this project would be to make it usable as a Chrome extension because Google Chrome is one of the most widely used browser platforms available. They are also easier to work with in designing our app, especially as it is the same company that owns the platform, Youtube, that we would be gathering music/noise tracks from. While there may be extensions to other common browser platforms such as Firefox and Microsoft Edge, this will be dependent on time restrictions and difficulties implementing program on these different platforms.

**Third Party Services**
For the third party services this will come in a couple different ways. The first and largest part of the project would be for music/noise in looping/playing the sound to help the user concentrate during work. To accomplish this we will use the major music platform of Youtube itself as well as a possible third party created api that allows us to pull music from Youtube and connect it to our application. The other large service we would utilize would be an api that can grab local data and time so we can more accurately implement our reminders as well as the timers that run for each of the focus techniques. This will allow all of them, in particular the pomodoro timer technique to accurately represent how long the user has been working and display it back to them.

**Local Storage**
Our local storage should be relatively small in comparison to other options. The main use for storage would focus on the reminders for our users. It would have to hold a reasonable amount of text and date values so that the users were able to set, in theory, about a month’s worth of reminders at a time before the storage capacity for reminders would be maxed out. In addition there would be a much smaller storage capacity for a set list of text statements meant to be encouraging to users that can be looped through in the encouragement loop. Lastly, there would be a minor bit of storage to hold user settings for how long they want their pomodoro timers to last.

**Architecture Components**
