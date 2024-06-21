function CUSTOM_PRICING(order) {

  // set parameter values
  var length = order.length;
  var width = order.width;
  var depth = order.depth;
  var quantity = order.quantity;
  var item = order.item;
  
  // set calculation variables
	const FOOT_TO_INCH_CONVERSION_SQFT = 144; 
	const FOOT_TO_INCH_CONVERSION_PERIMETER = 12; 
	const WRAP_AROUND_MATERIAL = 2.5; 
	const MATERIAL_WASTE = 2; 
	const SQFT = length * width;
	const PERIMETER = (length * 2) + (width * 2);
	const DEFAULT_DIMENSION = SQFT / FOOT_TO_INCH_CONVERSION_SQFT;
	
  // declare items with dimension calculations and cost per item type 
	let items = {
		"Stretched Canvas Print": {
			Dimension: ((length + depth * WRAP_AROUND_MATERIAL) * (width + depth * WRAP_AROUND_MATERIAL)) / FOOT_TO_INCH_CONVERSION_SQFT,
			Cost: 9
			},
		"Hand Embellishing": {
			Dimension: DEFAULT_DIMENSION,
			Cost: 12
			},
		"Epoxy Resin": {
			Dimension: DEFAULT_DIMENSION,
			Cost: 6
			}, 
		"Frame": {
			Dimension: (PERIMETER / FOOT_TO_INCH_CONVERSION_PERIMETER) + MATERIAL_WASTE,
			Cost: 9
			}
		}; 

  // calculate total price
	var price = items[item]["Cost"] * items[item]["Dimension"]; 
	var total_price = (price * quantity).toFixed(2); 
  
  // return total price
	return total_price;
}



// called when the "Update Order" button is clicked
function update_order() {
  
  // generate order object base on input fields
  let order = {
    length: parseFloat(document.getElementById('length').value),
    width: parseFloat(document.getElementById('width').value),
    depth: parseFloat(document.getElementById('depth').value),
    quantity: parseInt(document.getElementById('quantity').value),
    item: document.getElementById('item').value
  };

  // make sure required fields are set
  if (order.item == "Stretched Canvas Print" & (order.depth < 0.25 | isNaN(order.depth))) {
    alert("Please enter a Depth for \"Stretched Canvas Print\" items.")
  } 
  else { 
    
    // call function to calculate total price based on input in the order object above
    var total = CUSTOM_PRICING(order); 
    
    // display total price
    document.getElementById('total').value = total;
    console.log(total);
  }
  
} 
