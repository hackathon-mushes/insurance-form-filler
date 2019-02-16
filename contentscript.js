
var search = document.getElementById("search");

if (search) {
    // alert('Hi' + search.elements);

    if(search.elements){

        for (var i = 0, element; element = search.elements[i++];) {
            if (element.type === "text" && element.value === "")
                console.log("it's an empty textfield")
                element.value = 'HEROOO'
                console.log(element)
        }
    }
}else{
    // alert('Bye...');
}


function updateInputFieldValue(inputFieldID, new_value){
    plan_type = document.getElementById(inputFieldID);

    if(plan_type){
        plan_type.value = new_value
    
        plan_type.addEventListener('change', function() {
            if (this.value != new_value){
                this.value = new_value
            }
        })

        return 1
    }else{
        return 0
    }
}

// Check for Allianz

function checkAllianz(){

    ids = ['ddlPlans', 'ddlOriginQuote', 'ddlDestinationQuote', 'ddlTravelReason', 'children', 'adults', 'unpregned', 'departureDate', 'returnDate'  ]
    values = [3, 10, 2, 2, 1, 1, 3, '1/1/2020', '2/2/2020']

    for (var i = 0; i < ids.length; i++){

        id = ids[i]
        val = values[i]

        updateInputFieldValue( id, val)
    }   
}


setTimeout(checkAllianz,2000);
