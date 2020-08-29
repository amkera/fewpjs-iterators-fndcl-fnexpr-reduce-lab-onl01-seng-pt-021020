const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


function reduceBatteries(array, reducer, initialValue) {
  let accumulator = initialValue;
  array.forEach(battery => {accumulator = reducer(accumulator, battery);
  });
  return accumulator; 
}