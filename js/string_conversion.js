/*
 * Converts yyyy-mm-dd to JSON (date) object.
 * Eg1: @param: 2016-11-20  @return: {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
 * Eg2: @param: 1479663089000  @return: {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
 * Eg3: @param: 2016--111-ff @return: {"error" : "Invalid Date" } 
 * @param {string/long} str  A date string (yyyy-mm-dd) or a long depicting seconds past from 1st Jan 1970
 * @return {JSON} A JSON object (with values as depicted in example) 
 */
const dateToJSON = (str) => {
	try{
		// Check if long or string passed
		let dateLong = Number(str);	
		// JSON to be returned
		let dateJSON = {
			"unix": 0,
			"utc": ""
		};	

		let date;

		if(!isNaN(dateLong)) {
			date = new Date();
			date.setTime(dateLong); // Time acc to long passed
		}
		else {
			date = new Date(str);
		}

		dateJSON["unix"] = dateLong;
		dateJSON["utc"] = date.toUTCString(); // String in UTC format only

		if(date.toUTCString() == 'Invalid Date'){
			return {"error": "Invalid Date"}; // Explicit error JSON
		}
		else{
			return dateJSON;
		}		
	}
	catch(err){
		return {"error": "Invalid Date"};
	}
};

module.exports.dateToJSON = dateToJSON;