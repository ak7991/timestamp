var expect = require('chai').expect;

// Date Conversion test suite
describe('DATE_CONVERSION', () => {

	// Test date <string> to JSON
	describe('dateToJSON', () => {
		const dateToJSON = require('../js/string_conversion.js').dateToJSON;

		// ---setup---
		// Function that verifies argument passed is a 'JSON/JSON parseable' or not.
		let validJSON;
		before( () => {
			validJSON = (obj) => {
				try{
					if(JSON.parse(obj))
						return true;
				}
				catch(err){
					return false;
				}
			};
		});

		let dateStr1 = '2016-12-31'; // Valid date
		let dateStr2 = '2016-11-20'; // Valid date
		let dateLong1 = '1479663089000'; // Valid Long
		let dateLong2 = '0'; // Valid Long
		let dateStr3 = '2016-11-31'; // InvalidDate
		let edgeCase1 = ''; // Sanity edge case

		// ---specs---
		// obj returned by the function is JSON or JSON parseable if valid string
		it('should return a valid JSON (String input)', (done) => {
			const isValidJSON = validJSON(dateToJSON(dateStr1)); 
			done();
			//Valid JSON
			expect(isValidJSON).to.be.true;
		});

		it('should return a JSON with corresponding date values (String input)', (done) => {
			done();
			//Correct JSON
			expect(dateToJSON(dateStr2)).to.deep.equal({"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 31:29 GMT"});
		});

		it('should return a valid JSON (Long input)', (done) => {
			const isValidJSON = validJSON(dateToJSON(dateLong1)); 
			done();
			//Valid JSON
			expect(isValidJSON).to.be.true;
		});

		it('should return a JSON with corresponding date values (Long input)', (done) => {
			done();
			//Correct JSON
			expect(dateToJSON(dateLong2)).to.deep.equal({"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"});
		});

		it('should return an error', (done) => {
			const isValidJSON = validJSON(dateToJSON(dateStr3)); 
			done();
			//Correct error on invlaid string
			expect(isValidJSON).to.be.false;
		});

		it('should return JSON with current date values', (done) => {
			done();
			//Correct error on invlaid string
			expect(dateToJSON(dateLong2)).to.be.ok; // Sanity check
		});

	});
});