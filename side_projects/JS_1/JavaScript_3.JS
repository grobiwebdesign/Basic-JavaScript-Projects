function displayType(foodProduct){
	var foodType = foodProduct.getAttribute("data-food-type");
	alert(foodType + " belongs to the " + foodProduct.innerHTML + " category");
}