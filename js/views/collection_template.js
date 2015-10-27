//COllection template for all the data

function displayAll(data){

	return data.map(function(item){

		return `
		
		<p class ="inst_list" data-instructor-item = "${item.objectId}">${item.Name}</p>
		`;
	}).join('');
	console.log('item');
}

function collectionTemplate(data){
	return`
	<div>${displayAll(data)}</div>
	`;
}

export default collectionTemplate;

