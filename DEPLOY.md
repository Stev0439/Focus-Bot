Due to using Chrome's own APIs and storage databases that work for individual Google accounts, the bot can be deployed and used as-is with no additional login deployment scripts.

1. Unpack the bot's zip files
2. Navigate to your Chrome extensions page
3. Enable a developer account using the switch in the upper right corner
4. Select 'Load Unpacked' in upper left corner
5. Selected bot folder ("Focus-Bot")

The bot is now loaded and available to use! You can access the menu via the Google icon in the extensions menu.

<ins>Acceptance Testing</ins>

Reminders:

1. Open the popup menu and choose Reminders.
2. Input a reminder with invalid dates and times to verify sanity checks(2012-31-2, December 1st, 12:-24, etc.)
3. Input a reminder with a valid date/time prior to current time and verify a reminder is displayed
4. Input a reminder with a valid date/time after current time and verify a reminder is displayed at that time
4. Input a reminder with a valid date/time after current time, close the Chrome browser, reopen the Chrome browser, and verify a reminder is displayed at that time.
5. Input a reminder with a valid date/time after current time, clear stored reminders, and verify no reminders are display at that time.

Pomodoro:

1. Open the popup menu and choose Pomodoro.
2. Press Start Time and verify the Pomodoro work timer has started.
3. Close the popup menu, reopen the popup menu, and verify the Pomodoro timer resumes at the correct time and type (work/break).
4. After 15 minutes have passed, verify a Pomodoro pop-up is displayed at that time and that the timer has switched type (work/break)
5. Clear timer, and verify that the timer has reset and that no Pomodoro pop-up is displayed at previous expected timer clear.

Final code used for deployment uses 'releaseBranch' branch of repository, and has minor Pomodoro timer display fixes that are not present in recorded video presentation's build.