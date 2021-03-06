/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/


        /* 
                 Answer 
        */

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

function getUniqueProductCount(){
    const obj = {};
    listOfProducts.forEach((e) => {
       if(obj[e.productName] === undefined){
        obj[e.productName] = 1;
       }else{
        obj[e.productName] += 1;
       }
    })

   console.log(obj);
}
getUniqueProductCount();


function getUniquePrducts(){
    let getTheSameProdQtySum = listOfProducts.reduce(function(acc, curr) {
        let findIndex = acc.findIndex(item => item.productName === curr.productName);
     /*  console.log(findIndex) */
        if (findIndex === -1) {
          acc.push(curr);
        } else {
      
          acc[findIndex].quantity += curr.quantity;
        }
        return acc;
      }, [])
      
      return getTheSameProdQtySum;
}

console.log(getUniquePrducts());