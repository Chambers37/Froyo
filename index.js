// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 

// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 

// When they view the browser console, they observe a table listing how many of each flavor they have ordered. 

// In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.


const makeTable = () => {

  const flavors = prompt('Please submit a list of froyo flavors, seperated only by a comma', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee')

  const flavorList = flavors.split(',');

  const table = {};

  for (const flavor of flavorList) {
    if (table[flavor]) {
      table[flavor]++;
    }
    else {
      table[flavor] = 1;
    }
  }
  console.log(table);

  return table;
}

makeTable();
