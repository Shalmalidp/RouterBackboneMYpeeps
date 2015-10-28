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
	<h4>list View</h4>
	<div>${displayAll(data)}</div>
	`;
}

export default collectionTemplate;

