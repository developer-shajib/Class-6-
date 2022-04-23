
// Class 6 part 1 practice:- 
//   concat,join,split,push,pop,shift,unshift,slice,splice

// ==========================

// let name= ["shajib","28","MERN","CCN"];
// let sobji=["Alo","potol","golalo"];
// let month=["January","February","March","Aprill","May","jun","july","August","September","Octaber","November","December"];
// let info="My name is shajib . I love eat biriyani . I like to play football ."

// =========================================================================================

// let food1=['alo','potol','lao','kumra','ada','roson']

// let food2=food1.slice(3, 5);
// let food3=[...food1.slice(0,1),...food1.slice(5,6)]
// let food4=food1.splice(3,2);

// console.log(food1);
// console.log(food2);
// console.log(food3);
// console.log(food4);


// =======================================================================

// sobji.push('komra');
// sobji.push('aam',"jam") //(shese value addd hove.)
// sobji.pop(); // (last value show korbe na.jemon jam.)
// sobji.unshift("kola",'jam','rice') //(first e value add hobe.)
// sobji.shift(); //(first value bad hoyr jabe)
// sobji.shift(); //(2nd value bad jabe.)

// console.log(sobji);

// ====================================================

// let all_arry= info.split('.');
// console.log(all_arry)

// =================================================

// let all_arry= sobji.join("/");
// console.log(all_arry)

// ========================================================

// let all_arry=[...name,...sobji,...month]
// console.log(all_arry)


// =====================================================

// let all_arry = name.concat(sobji).concat(month);
// console.log(all_arry);

// ======================================================================

// let food=new Array('Aaam',"Jam","lichi","Kola","Sopari","Apple");

// console.log(food);

// =====================================================

// for(let i=0; i<month.length; i++){
//     console.log(month[i])
// }


// ====================================================

// console.log(month.length)


// ==================================================

// month.map((item,index)=>{
//     if(item != "February"){
//       console.log(`${index+1}. ${item}`);  
//     }
    
// })



// ========================================

// sobji.map((item,index)=>{
//     console.log(`${index+1}. ${item}`)
// })

// ================================================

// sobji.forEach((item)=>{
//     console.log(item)
// })


// =========================================================

// month.forEach((All,index)=>{
//     console.log(`The name of month ${index+1} ${All ?? "January"}.`)
// })



// ===============================================================================



// Class 6 part 2:-
//      toString,reverse,sort,includes,isArray,indexOf,lastindexOf

// ============================================================

// let food=["Alo","potol","lao","kumra","ada","roson","ada"]

// =================================

// console.log(food.toString());

// =====================================

// console.log(food.reverse());

// ======================================

// console.log(food.sort());

// =========================================

// console.log(food.includes("Alo")); //(includes mane alo tomar kase ase naki naki.ture false result dive)

// ======================================

// console.log(Array.isArray(food)); (aikhane food ki array naki array na oitar result dive true false er maddome.)

// =======================================

// console.log(food.indexOf('ada'));

// ======================================

// console.log(food.lastIndexOf('ada')); //(aitar mane sobar shese jey ada ta ase tar namber 0 theke suru kore joto number pore)

// ======================================


// const infor=[
//     ["shajib","01736456","Cumilla","sha@gmail.com","13"],
//     ["Kamal","0173643","Dhaka","kaa@gmail.com","7"],
//     ["jamal","017364534","Barisal","ja@gmail.com","4"],
//     ["rakib","01736457","Khulna","rak@gmail.com","3"],
// ];
// let total= 0 ;

// infor.forEach((data,index)=>{
//     total += +data[4];

//     console.log(`${index+1}. Name : ${data[0]} - Amount : ${data[4]}`);

    
// })

// console.log(`
// ==================================
// total amount = ${total}`)
