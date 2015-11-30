$.index.open();

//input

var swText = Titanium.UI.createTextField({

	top:10,
	left:10,
	width:100,
	
	
});
var frText = Titanium.UI.createTextField({

	top:50,
	left:10,
	width:100,
	
});
var hText = Titanium.UI.createTextField({
	
	top:90,
	left:10,
	width:100,
	
});
var imWText = Titanium.UI.createTextField({
	
	top:140,
	left:10,
	width:100,
	
});
var imHText = Titanium.UI.createTextField({
	
	top:190,
	left:10,
	width:100,
	
});

//labels

var gsaLabel = Titanium.UI.createLabel({
	top:240,
	left:10,
	width:150,
	
});

var dwLabel = Titanium.UI.createLabel({
	top:290,
	left:10,
	width:150,
	
});
var dhLabel = Titanium.UI.createLabel({
	top:340,
	left:10,
	width:150,
	
});


swText.addEventListener('change', function(){
	calculateGsa();
	calculateDW();
	calculateDH();
	
});
frText.addEventListener('change', function(){
	calculateGsa();
	calculateDW();
	calculateDH();
});
hText.addEventListener('change', function(){
	calculateGsa();
	calculateDW();
	calculateDH();
});
imWText.addEventListener('change', function(){
	calculateGsa();
	calculateDW();
	calculateDH();
});
imHText.addEventListener('change', function(){
	calculateGsa();
	calculateDW();
	calculateDH();
});


var eventFunction = function(input, color){
	input.addEventListener('focus', function(){
		input.backgroundColor = color;
	});
};



eventFunction(swText, 'yellow');
eventFunction(frText, 'yellow');
eventFunction(hText, 'yellow');
eventFunction(imWText, 'yellow');
eventFunction(imHText, 'yellow');


// add 

$.index.add(swText);
$.index.add(frText);
$.index.add(hText);
$.index.add(imWText);
$.index.add(imHText);
$.index.add(gsaLabel);
$.index.add(dwLabel);
$.index.add(dhLabel);



// declaration mode
var place;

function calculateGsa(e) {
    gsaLabel.text =  (Math.round((swText.value * hText.value * 100)/(frText.value * imWText.value)) ? Math.round((swText.value * hText.value * 100)/(frText.value * imWText.value)) : 1 );
    place = gsaLabel.text;
    gsaLabel.text = "GSAcalculator" + place;   
};
function calculateDW(e) {

    dwLabel.text = "DWcalculator: " + Math.round((place * imWText.value)/100);
   
};
function calculateDH(e) {
	

    dhLabel.text = "DHcalculator: " + Math.round((place * imHText.value )/100);
   
};






