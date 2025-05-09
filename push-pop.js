//****** Topic- push, pop, shift, unshift *******/


//Practice

//1. সংখ্যার একটা অ্যারে আছে:[10,20,30,40,50]। এখন এই অ্যারেতে 60 যোগ করে অ্যারটি আউটপুটে দেখা।

const numbers = [10, 20, 30, 40, 50];
numbers.push(60);
console.log(numbers);

//2. তুই কিছু নাম লিখে রাখছিস অ্যারেতে: ‘সজিব’, ‘সাগর’, ‘সাকিব’, ‘সোহেল’। এখন তোর মনে হল নতুন  ‘সুমন’ কে এই অ্যারেতে যোগ করতে হবে। একটা প্রোগ্রাম লিখে দেখ, সুমনকে সবার শেষে যোগ কর।

const friends = ['sojib', 'sagor', 'sakib', 'shohel'];
friends.push('sumon');
console.log(friends);

//3. তোর মোবাইলে যে যে গেম ইনস্টল করা আছে, সেগুলো একটা অ্যারেতে রাখ। তারপর সবার শেষে যে গেমের নাম দেয়া আছে , সেটা রিমুভ করে ফেল। এরপর তোর অ্যারেতে কী কী গেম বাকি রইল, সেগুলো আউটপুট হিসেবে দেখা।

const installGames = ['papgi', 'fire box', 'candy lap' , 'tample'];
installGames.pop();
console.log(installGames);

//4. এই অ্যারেতে [24, 36, 48, 60]। একদম প্রথম উপাদান হিসেবে 12-কে যোগ করে পুরা অ্যারেটা আউটপুট হিসেবে দেখা।

const quantity = [24, 36, 48, 60];
quantity.unshift(12);
console.log(quantity);

//5. তোর কাছে 5টি বইয়ের নাম দিয়ে একটা অ্যারে আছে। এখন তুই সবার প্রথম বইয়ের নামটা অ্যারে থেকে রিমুভ করে ফেল। তারপর বাকি নামগুলো আউটপুটে দেখা।

const booksName = ['bangla', 'math', 'english', 'islam', 'science'];
booksName.shift();
console.log(booksName);

