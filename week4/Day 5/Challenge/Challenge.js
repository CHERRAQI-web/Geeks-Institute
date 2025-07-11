function chaine(string1,string2){
    let s1=string1.replace(/\s/g, '').toLowerCase()
    let s2=string2.replace(/\s/g, '').toLowerCase()
    let cnt=0
   if(s1.length===s2.length){
       
    for(let i=0;i<s1.length;i++){
        for(let j=0;j<s2.length;j++){
            if(s1[i]===s2[j]){
               // console.log(s1[i])
                cnt++;
                break;
            }
        }
    }
   }
//    console.log(s1);
//    console.log(s2)
//    console.log(cnt)
   if(cnt===s1.length){
    console.log(`${s1} is an anagram of ${s2}`)
   }else{
    console.log(`${s1} is not an anagram of ${s2}`)
   }
}
chaine("The Morse Code","Here come dots")