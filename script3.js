let arr[0,1,0,3,12];
let result=[];

for(int i=0;i<arr.lenght;i++){
if(arr[i]!=0){
  result.push(arr[i]);
}

for(int i=0;i<arr.length;i++){
  if(arr[i]==0){
    result.push(0);
  }
  console.log(result);
