var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

employeeStates.onshow=function(){
    drpStates.clear()   
    for (i = 0; i < states.length; i++) 
        drpStates.addItem(states[i])
}

drpStates.onclick=function(s){
    if (typeof(s) == "object")   
      return                    
    else { 
        drpStates.value = s
        lblPrompt.value = (`You picked ${drpDesserts.selection} - That is a great choice!`)
    }
}

// github test

/*
let req = ""
let query = ""
let results = ""
let pw = "Albatro$$19"  // put your database password here
let netID = "dbs15065"
let database = "375groupa4"
let allCustomerData = []

btnSearch.onclick=function(){        
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblCustomers.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtCustomerResults.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblCustomers.textContent = "Error code: " + req.status
}
*/
