/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO


/**
 * abaikan kode di bawah ini
 */
 let evenNumber = [];

 for(let evenNumber = 1; evenNumber<=100; evenNumber++)
 {
     if(evenNumber % 2 === 0)
     {
         console.log(evenNumber,"Adalah genap");
     }else{
         console.log(evenNumber);
     }
 
 }
  module.exports = evenNumber;