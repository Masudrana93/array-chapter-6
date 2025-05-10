// কে Include আছে, কে নাই। 
// variableName.include() ব্যবহার করে আমরা চেক করব, array এর ভিতর কোন উপাদান আছে কিনা।

//Practice

//1.তুই একটা প্রোগ্রাম বানাতে চাস, যেটাতে ‘আম’ নামক একটা ফল লিস্টে আছে কি না, সেটা চেক করবে। যদি থাকে, তবেে আউটপুট বলবে, ‘আম আছে’, আর না থাকলে বলবে,  ‘আম নেই, গাছে উঠ’। ফলের অ্যারেতে ‘আপেল’,‘কলা’,‘আম’ ও ‘লিচু’ আছে।

const fruits = ['apple', 'banana', 'mango', 'lichi'];

if(fruits.includes('mango')){
    console.log('mango is available');
}else{
    console.log("there is no mango, climb the tree");
}

//2. তুই একটা অ্যারে বানালি, যেখানে নামগুলো আছে - ‘বাবুল’, ‘আলিফ’,  ‘ছোটন’। এখন প্রোগ্রাম লিখে দেখ, বাবুলের ইনডেক্স নাম্বার কত।

const names = ['babul', 'alif', 'choton'];
const indexNo = names.indexOf('babul');
console.log(indexNo);

//3. ধর, তুই বন্ধুদের নামের একটা লিস্ট বানিয়েছিস অ্যারেতে - ‘রিমন’, ‘রিফাত’, ‘রাজিব’। এখন তোর মনে হলো, ‘রিফাত’ এর অবস্থানটা ভুলে গেছিস। একটা প্রোগ্রাম লিখে রিফাতের ইনডেক্স বের কর।

const bondhuNames = ['rimon','rifat','rajib'];
const rifatIndex = bondhuNames.indexOf("rifat");
console.log(rifatIndex);

//4. তুই কিছু শহরের নাম লিখে রাখছিস - ‘ঢাকা’, ‘চট্রগ্রাম’, ‘সিলেট’। এখন তুই ভাবলি, আরেকটা শহরের নাম যোগ করবি, কিন্তু ভুলে ছোট হাতের rajshahi যোগ করে ফেললি। এবার প্রোগ্রাম লিখে চেক কর, Rajshahi আছে কি না।

const cityNames = ['Dhaka', "Chittagong", 'Sylhet'];
cityNames.push('rajshahi');
console.log(cityNames);
const exist = cityNames.includes('Rajshahi');
console.log(exist);

//5. একটা প্রোগ্রাম বানিয়ে ‘বৃষ্টি’ নামক কোন উপাদান আছে কি না, চেক কর। যদি থাকে, তাহলে আউটপুট বলবি ‘I need umberalla’, না থাকলে বললি ‘ No rain no pain’। অ্যারেতে ‘দীঘি’, ‘মেঘ’, ‘বৃষ্টি’ ও ‘বর্ষা’ আছে।

const weather = ['dhigi', 'megh', 'bristi', 'borsha'];

const isthereBristi = weather.includes('bristi');
console.log(isthereBristi);

if(weather.includes('bristi')){
    console.log('I need umberalla');
}else{
    console.log('No rain no pain');
}

//6. তোর প্রিয় খেলাধুলার একটা অ্যারে আছে - ‘ফুটবল’, ‘ক্রিকেট’, ‘ভলিবল’। এখন তুই চেক করতে চাস ‘ব্যাডমিন্টন’ নামক খেলাটি অ্যারেতে আছে কি না।

const games = ["football", 'Cricket', "Voliball"];
const anotherExist = games.includes('Badminton');
console.log(anotherExist);