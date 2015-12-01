// Alloy.Global.currentLanguage = 'es';

$.index.open();

//input
var titleLabel = Titanium.UI.createLabel({

	top:40,
	left:30,
	width:5000,
	text:"GSA Calculator",
	font:{
		fontSize: '70.5sp',
	}
	
});

var swLabel = Titanium.UI.createLabel({

	top:40,
	left:30,
	width:100,
	text:"SW",
	
});

var swText = Titanium.UI.createTextField({

	top:40,
	left:30,
	width:100,
	
	
	
});
var frLabel = Titanium.UI.createLabel({

	top:40,
	left:30,
	width:100,
	text:"FR",
	
});
var frText = Titanium.UI.createTextField({

	top:40,
	left:30,
	width:100,
	
});
var hLabel = Titanium.UI.createLabel({

	top:40,
	left:30,
	width:100,
	text:"H",
	
});
var hText = Titanium.UI.createTextField({
	
	top:40,
	left:30,
	width:100,
	
});
var imWLabel = Titanium.UI.createLabel({

	top:40,
	left:30,
	width:100,
	text:"imW",
	
});
var imWText = Titanium.UI.createTextField({
	
	top:40,
	left:30,
	width:100,
	
});
var imHLabel = Titanium.UI.createLabel({

	top:40,
	left:30,
	width:100,
	text:"imH",
	
});
var imHText = Titanium.UI.createTextField({
	
	top:40,
	left:30,
	width:100,
	
});


var resetButton = Titanium.UI.createButton({
	top:40,
	left:30,
	width:120,
	title:"Reset",
	
});

// var str = Ti.Locale.getString('faivederestolanguage' , 'No traslation avaible');

/*var esLanguageButton = Titanium.UI.createButton({
	top:40,
	left:10,
	width:120,
	title: "EsLanguages",
	
	
});*/


//output

var gsaLabel = Titanium.UI.createLabel({
	top:40,
	left:10,
	width:150,
	
	
});

var dwLabel = Titanium.UI.createLabel({
	top:40,
	left:10,
	width:150,
	
});
var dhLabel = Titanium.UI.createLabel({
	top:40,
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
resetButton.addEventListener('click', function(){
	
	swText.value = 0;
	frText.value = 0;
	hText.value = 0;
	imWText.value = 0;
	imHText.value = 0;
	gsaLabel.text = "";
	dwLabel.text = "";
	dhLabel.text = "";
	
	Ti.App.fireEvent('resettingFields');
});


Ti.App.addEventListener('resettingFields', function(){
	
	
	});

/*esLanguageButton.addEventListener('click', function(){
	alert(str);
});*/

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
$.index.add(titleLabel);
$.index.add(swLabel);
$.index.add(swText);
$.index.add(frLabel);
$.index.add(frText);
$.index.add(hLabel);
$.index.add(hText);
$.index.add(imWLabel);
$.index.add(imWText);
$.index.add(imHLabel);
$.index.add(imHText);
$.index.add(gsaLabel);
$.index.add(dwLabel);
$.index.add(dhLabel);
$.index.add(resetButton);

// $.index.add(esLanguageButton);



// functions

var place;
var calc;
var calctwo;

function calculateGsa(e) {
	
    gsaLabel.text =(frText.value && imWText.value) ? ((Math.round((swText.value * hText.value * 100)/(frText.value * imWText.value)) ? Math.round((swText.value * hText.value * 100)/(frText.value * imWText.value)) : 1 )) : ' ';
    place = gsaLabel.text;
    gsaLabel.text = "GSAcalculator: " + place;   
};
function calculateDW(e) {

    dwLabel.text = imWText.value ? "DWcalculator: " + Math.round((place * imWText.value)/100) : ' ';
    
};
function calculateDH(e) {
	

    dhLabel.text = imHText.value ? "DHcalculator: " + Math.round((place * imHText.value )/100) : ' ';
};


/*function reset(){

	swText.text = 0;
	frText.text = 0;
	hText.text = 0;
	imWText.text = 0;
	imHText.text = 0;
	Ti.App.fireEvent('resettingFields');
	
};


Ti.App.addEventListener('resettingFields', function(){
	
	resetButton.addEventListener('click', function(){
		reset();
	});
	
});*/






