const printWhatCounts = (start, end) => {
  if(!Number.isInteger(start) || !Number.isInteger(end)) {
     console.log(`Invalid Input; OnlyIntegers Allowed.`);
  }
  else if (start > end) {
    console.log(`Start Parameter Cannot be Greater Than End Parameter.`);
  } else {
    console.log(`${start} ${start % 3 ? '':'foo'}${start % 5 ? '':'boo'}`);

  if(start < end) {
    setTimeout(() => {
      printWhatCounts(++start, end)
      }, 1000)
    }
  }
}

setTimeout(() => {
  printWhatCounts(15,65);
}, 2000);