

function SingleTemplate(data){
console.log("im returning from the template", data); //data is coming in 

return `
	<div class="sView">
		<div class="singlebody">
      <i data-arrow-click id="arrow"  class="fa fa-arrow-left"></i>			
			<img id ="profile" src ="./images/profile.png">
		</div>
		<p class="single-data"><i class="fa fa-user"></i>${data.Name}</p>
		<p class="single-data"><i class="fa fa-envelope"></i>${data.Email}</p>
		<p class="single-data"><i class="fa fa-mobile"></i> ${data.Phone}</p>
		<p class="single-data"><i class="fa fa-globe"></i> ${data.Location}, ${data.State}</p> 
	</div>
	`;
}

export default SingleTemplate;

// <div class="singlebody"><img id ="Profile" src ="./images/profile.png">${data.Image.url}</div>a