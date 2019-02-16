
// var search = document.getElementById("search");

// if (search) {
//     // alert('Hi' + search.elements);

//     if(search.elements){

//         for (var i = 0, element; element = search.elements[i++];) {
//             if (element.type === "text" && element.value === "")
//                 console.log("it's an empty textfield")
//                 element.value = 'HEROOO'
//                 console.log(element)
//         }
//     }
// }else{
//     // alert('Bye...');
// }


function updateInputFieldValue(inputFieldID, new_value){
    plan_type = document.getElementById(inputFieldID);

    if(plan_type){
        plan_type.value = new_value
    
        // plan_type.addEventListener('change', function() {
        //     if (this.value != new_value){
        //         this.value = new_value
        //     }
        // })

        return 1
    }else{
        return 0
    }
}


allianz_ids = ['ddlPlans', 
                'ddlOriginQuote', 
                'ddlDestinationQuote', 
                'ddlTravelReason', 
                'children', 
                'adults', 
                'unpregned', 
                'departureDate', 
                'returnDate'  ]

// Check for Allianz
function checkAllianz(values, ids){

    console.log(ids)

    for (i in ids){
        id = ids[i]
        val = values[id]

        console.log(`${id}:${val}`)

        result = updateInputFieldValue( id, val)

    }
}

data = [3, 10, 2, 2, 1, 1, 3, '1/1/2020', '2/2/2020']


// TODO planos**

dict_correspond = { 'ddlPlans': 'motivo', 
                    'ddlOriginQuote': 'motivo',//'estado_origem', 
                    'ddlDestinationQuote':'motivo',//'pais_destino', 
                    'ddlTravelReason':'motivo',
                    'children':'passageiros_ate_70',
                    'adults':'passageiros_acima_70',
                    'unpregned':'numero_gestantes',
                    'departureDate':'data_ida',
                    'returnDate':'data_volta' 
                  }

function relateData(values, ids){

    array_data = []

    for (i in ids){
        key = ids[i]
        val = values[ dict_correspond[key] ]
        if(val.length < 2){
            // check if str is int
            array_data[key] = parseInt(val) // Gambs
        }
        else if(val.length == 10) {
            // check if date
            array_data[key] = val.replace('-','/')
            array_data[key] = array_data[key].replace('-','/')
        }
        else{
            array_data[key] = val
        }
         
        // console.log(`key:${key} dict:${dict_correspond[key]} value:${values[ dict_correspond[key] ]}` )
    }

    console.log(array_data)

    return array_data
}

chrome.runtime.onMessage.addListener(
    function(message, callback) {

        if (message){
            if (message.command == 'apply-form' ){
                console.log(message)
                corrected_data = relateData(message.values.profile, allianz_ids)
                checkAllianz( corrected_data, allianz_ids )
            }
        }
    }
);

// setTimeout( () => checkAllianz(data, allianz_ids) , 2000 )

