btnEmployeeStates.onclick=function(){
  ChangeForm(employeeStates)
}

btnBabyNames.onclick=function(){
  ChangeForm(babyNames)
}

favBabyNames.onshow = function() {
  drpFavNamesSet.clear()
  for (i = 0; i < favNames.length; i++)
    drpFavNamesSet.addItem(favNames[i])
}

btnFavNamesInstructions.onclick=function(){
  lblFavNamesInstructions.value = "Select your favorite out of these 5 names"
}

drpFavNamesSet.onclick = function(s) {
    if (typeof(s) == "object")
        return
      else {
        for (i = 0; i < 1; i++)
          drpStates.value = s
          favorite.push(s)
          if (favorite.length == 1) {
          lblFavNamesInstructions.value = `Your favorite baby name is ${favorite[0]}!`
          }
    }
}

