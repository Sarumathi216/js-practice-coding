let arr=[10,5,15,30,40];
let largest=-infinity;
let secondlargest=-infinity;

for(int i =0;i<arr.length;i++){
if(arr[i]>largest){
  secondlargest=largest;
  largest=arr[i];
}
else if(arr[i]>secondlargest&&arr[i]!=largest){
  secondlargest=arr[i];
}
}
console.log(secondlargest);
