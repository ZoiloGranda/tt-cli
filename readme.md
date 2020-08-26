# TT-CLI

CLI Tool to fill time tracker hours, including filling 8 hours one by one when the developer is new (the first three months)

## Usage

1. `npm install`
2. Log in the timetracker like usually on the browser to validate the session
3. `npm start`
4. Follow the terminal questions/instructions


## Notes

Sometimes all the requests fails, to fix this, edit or add a new item on the TimeTracker page and copy the Cookie value (`ASP.NET_SessionId`)from the request and paste it on `params.js`