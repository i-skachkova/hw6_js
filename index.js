// 1
// let number = 1;
// while(number <= 10) {
//     console.log(number);
//     number++;
// }


// 2
// for(let i = 2; i <= 20; i++){
//     if(i%2 != 0) continue;
//     console.log(i);
// }


// 3 (як я розумію, таблиця до 10 буде, тому цикл - поки і <= 10)
// for(let i = 1; i <= 10; i++){
//     console.log(i*7 + "=" + i + "*" + 7);
// }


// 4
// const A = [1, 2, 3, 4, 5];
// let i = 0;
// while(i < A.length){
//     console.log(A[i]);
//     i++;
// }

// 5
// const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < A.length; i++){
//     if(A[i] === 7) break;
//     console.log(A[i]);
// }


// 6
// const n = Number(prompt("Введіть число"));
// let i = 0;
// while(i < n){
//     console.log(i);
//     i++;
// }


// 7
for(let i = 1; i <= 20; i++){
    if(i%3 === 0) continue;
    console.log(i);
}