function distanceFromHqInBlocks(someValue) {
  const x = 42

  return (Math.abs(someValue - x))


}

function distanceFromHqInFeet(some) {
  let block=distanceFromHqInBlocks(some)

  return block * 264



}
function distanceTravelledInFeet(d1 ,d2){
  let diff= Math.abs(d1-d2)
  return diff *264


}
function calculatesFarePrice(d3 ,d4)
{
  let feet=distanceTravelledInFeet(d3,d4)
  if (feet<=400){
    return 0
  }
  
  else if (feet>400 && feet<=2000){
   let  fare=(feet-400)*2
    return fare/100
  }
  
  else if (feet>2000 && feet<=2500){
    return 25
  }
  
  else{
    return 'cannot travel that far'
  }


}