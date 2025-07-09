const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    //alert(num);
    return num * 2;
})
//dans i c'est l'index de tableau