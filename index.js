var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/getpost', function(request, response) {
  response.render('pages/getmath');
});

app.get('/postrates', function(request, response) {
    var weight = Number(request.query.input1);
    var operation = request.query.optradio;
    var message = undefined;
    if(operation == "stamp"){
        if(weight <= 0){
        	message = "The weight of the package cannot be at or below 0";
    	}
    	else if (weight > 0 && weight <= 3){
    		message = ((Math.ceil(weight) * .21) + .28);
    	}
    	else if (weight > 3 && <= 3.5){
    		message = 1.12;
    	}
    	else{
    		message = "The package is heavier than allowed for this category";
    	}

    }

    if(operation == "metered"){
        if(weight <= 0){
        	message = "The weight of the package cannot be at or below 0";
    	}
    	else if (weight > 0 && weight <= 3){
    		message = ((Math.ceil(weight) * .21) + .25);
    	}
    	else if (weight > 3 && <= 3.5){
    		message = 1.09;
    	}
    	else{
    		message = "The package is heavier than allowed for this category";
    	}
    } 

    if(operation == "flats"){
        if(weight <= 0){
        	message = "The weight of the package cannot be at or below 0";
    	}
    	else if (weight > 0 && weight <= 13){
    		message = ((Math.ceil(weight) * .21) + .77);
    	}
    	else{
    		message = "The package is heavier than allowed for this category";
    	}
    }

    if(operation == "parcel"){
        if(weight <= 0){
        	message = "The weight of the package cannot be at or below 0";
    	}
    	else if (weight > 0 && weight <= 4){
    		message = 3.00;
    	}
    	else if (weight > 4 && weight <= 10){
    		message = ((Math.ceil(weight) * .16) + 2.36);
    	}
    	else if (weight > 10 && <= 11){
    		message = 4.19;
    	}
    	else if (weight > 11 && <= 12){
    		message = 4.36;
    	}
    	else if (weight > 12 && <= 13){
    		message = 4.53;
    	}
    	else{
    		message = "The package is heavier than allowed for this category";
    	}
    }

    console.log(message);

  response.render('pages/mathresult', {"answer":message});
    	}
});