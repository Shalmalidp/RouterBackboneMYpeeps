import Backbone from 'backbone';

let InstructorModel = Backbone.Model.extend({
	
urlRoot :'https://api.parse.com/1/classes/Instructors',
idAttribute : 'objectId'

});


export default InstructorModel;