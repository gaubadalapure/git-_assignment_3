function prime(num){
  let factors=0;
  for(let i=1;i<=number;i++){
    if(num%i==0){
      factors++;
    }
  }
  if(factors==2){
    console.log("Yes");
  }
  else{
    console.log("not a prime");
  }
}
prime(13);