import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	getData(){
		var response = HTTP.call( 'GET', 'http://api.football-data.org/v1/competitions/426/leagueTable', {} );
		console.log( response );
		return response
		// let res = HTTP.call( 'GET', 'http://api.football-data.org/v1/competitions/426/leagueTable', {}, function( error, response ) {
		//   if ( error ) {
		//     console.log( error );
		//   } else {
		//   	console.log('working');
		//     // console.log( response );
		//     return response;
		//   }
		// });





		// console.log('res:',res);
		// return res;

	}
})