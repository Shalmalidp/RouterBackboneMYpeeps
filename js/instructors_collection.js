import Backbone from 'backbone';

let InstructorsCollection = Backbone.Collection.extend({
	url   : 'https://api.parse.com/1/classes/Instructors',
	parse : function(data){
		return data.results;
	}
});

export default InstructorsCollection;