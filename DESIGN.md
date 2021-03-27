**Design Sketches**
![SSW345 MilestoneDiagram V3](https://user-images.githubusercontent.com/63609012/112729622-84c35600-8f03-11eb-8764-f862d0a6f98b.png)

**Architecture Design**
![Design Milestone One Wireframe](https://user-images.githubusercontent.com/63609012/112729603-665d5a80-8f03-11eb-8ba7-7cf71f3fdebd.png)

**Platform**
Since the application will be designed as a plugin extension we will be working on browser platforms. Our primary target for this project would be to make it usable as a Chrome extension because Google Chrome is one of the most widely used browser platforms available. They are also easier to work with in designing our app, especially as it is the same company that owns the platform, Youtube, that we would be gathering music/noise tracks from. While there may be extensions to other common browser platforms such as Firefox and Microsoft Edge, this will be dependent on time restrictions and difficulties implementing program on these different platforms.

**Third Party Services**
For the third party services this will come in a couple different ways. The first and largest part of the project would be for music/noise in looping/playing the sound to help the user concentrate during work. To accomplish this we will use the major music platform of Youtube itself as well as a possible third party created api that allows us to pull music from Youtube and connect it to our application. The other large service we would utilize would be an api that can grab local data and time so we can more accurately implement our reminders as well as the timers that run for each of the focus techniques. This will allow all of them, in particular the pomodoro timer technique to accurately represent how long the user has been working and display it back to them.

**Local Storage**
Our local storage should be relatively small in comparison to other options. The main use for storage would focus on the reminders for our users. It would have to hold a reasonable amount of text and date values so that the users were able to set, in theory, about a month’s worth of reminders at a time before the storage capacity for reminders would be maxed out. In addition there would be a much smaller storage capacity for a set list of text statements meant to be encouraging to users that can be looped through in the encouragement loop. Lastly, there would be a minor bit of storage to hold user settings for how long they want their pomodoro timers to last.

**Architecture Components**
