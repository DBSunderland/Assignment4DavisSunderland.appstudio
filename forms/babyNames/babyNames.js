btnFavBabyNames.onclick=function(){
  ChangeForm(favBabyNames)
}

btnInstructions.onclick=function(){
  lblDirections.value = "Click on your 5 favorite baby names, then click enter. After you have selected your five favorites, click Favorite Baby Names to select your favorite."
}

let twentyNames = ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Ella', 'Elizabeth', 'Camila', 'Luna', 'Sofia', 'Avery', 'Mila', 'Aria']
let favNames = []
let favorite = []

babyNames.onshow = function() {
  drpBabyNames.clear()
  for (i = 0; i < twentyNames.length; i++)
    drpBabyNames.addItem(twentyNames[i])
}

drpBabyNames.onclick = function(s) {
    if (typeof(s) == "object")
        return
      else {
        for (i = 0; i < 5; i++)
          drpStates.value = s
          favNames.push(s)
          if (favNames.length == 5) {
          lblNamesSet.value = "You are ready to move on!"
          }
    }
}
