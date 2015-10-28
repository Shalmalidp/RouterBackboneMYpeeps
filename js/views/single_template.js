

function SingleTemplate(data){
console.log("im returning from the template", data); //data is coming in 

return `
	<h3> Single View</h3>
	<div class="singlebody" width = "400" height ="400">${data.Image.name}</div>
	<h4>Name ${data.Name}</h4>
	<h4>Email ${data.Email}</h4>
	<h4>Phone ${data.Phone}</h4>
	<h4>Location ${data.Location}</h4> 
	<h4>State ${data.State}</h4>
	`;
}

export default SingleTemplate;