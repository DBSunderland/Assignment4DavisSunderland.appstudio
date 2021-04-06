let req = ""
let query = ""
let results = []
let pw = "Albatro$$19"
let userName = 'dbs15065'

var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

employeeStates.onshow = function() {
  drpStates.clear()
  for (i = 0; i < states.length; i++)
    drpStates.addItem(states[i])
}

drpStates.onclick = function(s) {
    if (typeof(s) == "object")
        return
    else {
        drpStates.value = s
    query = `SELECT name from customer WHERE state = '${s}'`
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dbs15065&pass=" + pw + "&database=dbs15065&query=" + query)
    if (req.status == 200) {  
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           txtCustomers.value = "There are no customers from this state."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
              // message = message + results[i][1] + "\n"
               // txtaEmployee.value = results[i] + "\n"
               lgCustomers.addItem(results[i])
       }} } // end else
}


btnChangeForm.onclick=function(){
  ChangeForm(deleteCustomer)
  }






/*
let req = ""
let query = ""
let results = ""
let pw = "Albatro$$19"
let netID = "dbs15065"
let database = "dbs15065"
let allCustomerData = []

*/
/*
var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
*/
/*
drpStates.onclick=function(){        
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblCustomers.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtCustomerResults.value = message
        }

    } else
        lblCustomers.textContent = "Error code: " + req.status
}
*/

/*
employeeStates.onshow = function() {
  drpStates.clear()
  for (i = 0; i < states.length; i++)
    drpStates.addItem(states[i])
}

drpStates.onclick = function(s) { 
    if (typeof(s) == "object"){
    return
  } else {
    drpStates.value = s
    query = `SELECT * FROM customer WHERE state = '$(s)'`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblCustomers.value = "There are no customers in this state."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
              message = message + results[i][1] + "\n"
              txtCustomers.value = message
        }

    } else
        lblCustomers.textContent = "Error code: " + req.status
        }
}
*/

/*
lstNames.onclick=function(s){  // 's' is index of chosen
  if (typeof(s) == "object") {// user clicked the control
    return
  } else {
      let textChoice = NSB.$("lstNames_" + s).textContent 
      // item they chose (index = 0) and text 
      // (textcontent) at that location

      console.log(`The item number of the choice is ${s} 
      and the text is ${textChoice}`)
      
      // change Vito (location 0) to Esmerelda
      let newPlace = 0   //index where you want replacement to go
      NSB.$("lstNames_" + newPlace).textContent = "Esmerelda"
      
      // add new item to end of list. 
      lstNames.addItem("Garbanzo","active","default")
      //              (item to add,active/disabled,appearance)

 }
}
*/

/*
drpBestFlavor.onclick=function(s){
    if (typeof(s) == "object"){// means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpBestFlavor.value = s   // make dropdown show choice user made
    console.log(`The user chose ${s} and .selection is ${drpBestFlavor.selection}.`)
  }
}
*/

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