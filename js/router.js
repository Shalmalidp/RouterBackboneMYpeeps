import Backbone from 'backbone';

import HomeTemplate from 
import SingleTemplate from 

import InstructorsCollection from './instructors_collection';

//create router instance 
let Router = Backbone.Router.extend({

	routes:{
		"" : "home",
		"single" : "singleList"
	},
	initialize : function(appElement){
		this.$el = appElement;
	},

	home:function(){},
	start : function(){
		Backbone.history.start();
	},
	single : finction(){}
});

export default Router;