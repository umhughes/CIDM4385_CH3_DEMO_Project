/* This is the controller file - it is tied by name to the index view */
function transform(model){
	//convert the model to a JSON object
	var carObject = model.toJSON();
	var output = 	
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" :model.cid
	};
	return output;
}

//show only cars made by Honda
function filter(collection)
{
	return collection.where(
		{
			make: "Honda"
		}
	);
}

//this is an event listener to ensure that the TalbleView bindings are cleaned up
//correctly and no memory leaks are left

//Free the model-view data binding resources when the view-controller closes
$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});

//this is an event listener for when the window opens
$.mainWindow.addEventListener("open", function(){
	Alloy.Collections.cars.reset(
		[
			{
				"make":"Honda",
			 	"model":"Civic"
			},
			{
				"make":"Honda",
				"model":"Accord"
			},
			{
				"make":"Ford",
				"model":"Escape"
			},
			{
				"make":"Ford",
				"model":"Mustang"
			},
			{
				"make":"Nissan",
				"model":"Altima"
			}
		]
	);			
});


//last thing we do is open the window
$.mainWindow.open();