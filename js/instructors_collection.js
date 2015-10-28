import Backbone from 'backbone';
import InstructorModel from './instructor_model';

let InstructorsCollection = Backbone.Collection.extend({
	url   : 'https://api.parse.com/1/classes/Instructors',
	parse : function(data){
		return data.results;
	},
	model:  InstructorModel,
	parse : function(data){
		return data.results;
	}
});

export default InstructorsCollection;