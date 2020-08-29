const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(totalCount, batches){
  return batches + totalCount
  }
  //for each time we  iterate through batteryBatches, add the current element  to the totalCount
)