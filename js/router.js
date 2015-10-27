import Backbone from 'backbone';
import $ from 'jquery';

//importing constructios of collection and model
import InstructorsCollection from './instructors_collection';
import InstructorModel from './instructor_model';



import HomeTemplate from './views/home_template' ;
import SingleTemplate from './views/single_template' ;
import collectionTemplate from './views/collection_template' 



//create router instance 
let Router = Backbone.Router.extend({

	routes: {
		"" : "home",
		"collections" : "collectionsList",
		"single/:id" : "singleList"
	},

	initialize : function(appElement){
		this.$el = appElement;
		this.collection = new InstructorsCollection();
		let data1 = this;
		this.$el.on('click','.inst_list',function(event){
			let $p = $(event.currentTarget);
			var objID = $p.data('instructor-item');
			data1.navigate(`single/${objID}`);
			data1.singleList(objID);
		});
	},

		// home : function(){
		// 	var router = this;
		// 	this.$el.html(HomeTemplate() );
		// },
	home : function(){
		var router = this;
		this.collection.fetch().then(function(){
		router.$el.html(collectionTemplate(router.collection.toJSON()));
		})
	},

	// collectionsList : function() {
	// 	this.showSpinner();
	// 	var router = this;
	// 	this.collection.fetch().then(function(){
	// 		router.$el.html(collectionTemplate(router.collection.toJSON()));
	// 	})

	// },

	start : function(){
		Backbone.history.start();
	},

	singleList : function(objID){
		let x = this.collection.get(objID);
		//console.log(x);
		if(x){
			this.$el.html(SingleTemplate(x.toJSON()));
		}
		else {
			let data2 = this;
			x = this.collection.add({objectId : objID});
			//this.showSpinner();
			x.fetch().then(function(){
				data2.$el.html(SingleTemplate(x.toJSON()) );
				//console.log(x.toJSON()); //i get data here
			});
		};
	},

	 showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  }
});

export default Router;