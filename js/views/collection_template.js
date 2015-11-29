//COllection template for all the data

function displayAll(data){

	return data.map(function(item){

		return `
			<p class ="inst_list" 
				 data-instructor-item = "${item.objectId}">
				<img id ="photo" 
					src ="./images/profile.png">${item.Name}
			</p>
		`;
	}).join('');
	console.log('item');
}

function collectionTemplate(data){
	return`
	<div class="peeps">
	<h4 id="LV">My Peeps</h4>
	</div>
	<div class="display">${displayAll(data)}</div>
	`;
}

export default collectionTemplate;

