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

## what is reflection i don't think

<ins>Limitations & Future<ins>

One of our biggest limitations was attempting to integrate a background script that would be active without the main extension window open. This was a problem as the use of background.js as a 'service worker' that was completely separated from the main windows and their functionalities (and contents, in the case of displays) We had to essentially treat what should've been a locally accessible API and functionality as an outside system that we were sending messages to and from using Chrome's messenger API.

## please add here someone no personal plans for future