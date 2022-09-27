function prime(num){
  let count=0;
  for(let i=2;i<=num;i++){
    if(num%i==2){
      count++;
    }
  }
  if(count==2){
    console.log("prime");
  }
  else{
    console.log("not a prime");
  }
}
prime(17);