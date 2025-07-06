function unique(table){
    let uniques = [...new Set(table)];
    console.log(uniques); 
}
unique([1, 2, 3, 2, 4, 3, 5])