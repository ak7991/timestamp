TIMESTAMP API
=============

Delivers a timestamp as a JSON. This is just an api. It was developed by me while learning from FreeCodeCamp (FCC).


Contents
------------

On the front-end,
- Absolutely nothing

On the back-end,
- app starts at `server.js`
- frameworks and packages in `package.json`
- Barebones logic in js
- API route in /routes/index.js 

Notes on Usage
---------------

Just send a get request to [project URL]/api/<date Input>
Where:
- <date Input> is a Long depicting seconds passed from Jan 1, 1970
- OR <date Input> is a String in the format <yyyy-mm-dd> ONLY (no other format supported)