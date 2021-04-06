let customers = []

deleteCustomer.onshow = function() {
  query = "SELECT name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    if (results.length == 0)
      lblCustomers.textContent = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        lgDeleteCustomer.addItem(results[i])
    }

  } else
    lblCustomers.textContent = "Error code: " + req.status
}

lgDeleteCustomer.onclick = function(s) {
  if (typeof(s) == "object") {
    return
  } else {
    lblDeleteCustomer.value = lgDeleteCustomer.selection
  }
}

btnUpdatePage.onclick = function() {
  lgDeleteCustomer.value = "Customers"
  query = "SELECT name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dbs15065&pass=" + pw + "&database=dbs15065&query=" + query)

  if (req.status == 200) {
    customers = JSON.parse(req.responseText)
    console.log(customers)
    for (i = 0; i < customers.length; i++)
      lgDeleteCustomer.addItem(customers[i])
  }
}

btnDeleteCustomer.onclick = function() {
  let deletee = lblDeleteCustomer.value
  query = `DELETE * FROM customer WHERE name = "${deletee}"`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    if (results.length == 0)
      lblDeleteCustomer.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        if (deletee == results[i][0]) {
          query = `DELETE * FROM customer WHERE name = "${deletee}"`
          req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
          console.log(`${deletee} was deleted from the database.`)
        } else {
          console.log('There was an issue deleting the customer from the database.')
        }
      lgDeleteCustomer.addItem(results[i])
    }

  } else
    lblCustomers.textContent = "Error code: " + req.status
}

/*
drpBestFlavor.onclick=function(s){
    if (typeof(s) == "object"){
    return                     
  } else {
    
    console.log(`The user chose ${s} and .selection is ${drpBestFlavor.selection}.`)
  }
}
*/