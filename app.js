
// Student Array Data Structure 

const stu_info=[
    ["Shajib","40","34","3","M","Cumilla","300"],
    ["Rakib","20","30","4","M","Dhaka","420"],
    ["Hasan","64","19","5","M","Barisal","430"],
    ["Lima","70","64","4","F","Sylhet","320"],
    ["Forhad","25","22","3","M","Khulna","200"],
    ["Fatema","60","26","5","F","Dhaka","340"],
    ["Jannat","43","50","4","F","Cumilla","700"],
    ["Soykot","30","28","5","M","Barisal","500"],
    ["Halima","63","25","3","F","Sylhet","400"],
    ["Shovo","44","26","4","M","Cumilla","600"],
    ["Rokib","40","34","3","M","Cumilla","300"],
    ["Ahsam","20","30","4","M","Dhaka","420"],
    ["Faruk","64","19","5","M","Barisal","430"],
    ["Nasima","70","64","4","F","Sylhet","320"],
    ["Sharif","25","22","3","M","Khulna","200"],
    ["Khadija","60","26","5","F","Dhaka","340"],
    ["Asma","43","50","4","F","Cumilla","700"],
    ["Nazmul","30","28","5","M","Barisal","500"],
    ["Sumiyya","63","25","3","F","Sylhet","400"],
    ["Sakib","44","26","4","M","Cumilla","600"],
    ["Maruf","40","34","3","M","Cumilla","300"],
    ["Nayem","20","30","4","M","Dhaka","420"],
    ["Iqbal","64","19","5","M","Barisal","430"],
    ["Santa","70","64","4","F","Sylhet","320"],
    ["Sakil","25","22","3","M","Khulna","200"],
    ["Daliya","60","26","5","F","Dhaka","340"],
    ["Sumi","43","50","4","F","Cumilla","700"],
    ["Rezaul","30","28","5","M","Barisal","500"],
    ["Tamanna","63","25","3","F","Sylhet","400"],
    ["Halim","44","26","4","M","Cumilla","600"],
];

//Total Admnission fees

let Total_amu= 0;
stu_info.sort().map((data,index) => {
    Total_amu += +data[6]
    console.log(`${index+1}. Name: ${data[0]} - Amount: ${data[6]}}
    `)
});

console.log(`============================
    Total Amount = ${Total_amu}`);


//Find All Female Students 


stu_info.sort().forEach((female,index)=>{
    if(female[4] == "F"){
        console.log(`${index+1}.
        Name    : ${female[0]}
        Roll    : ${female[1]}
        Age     : ${female[2]}
        Class   : ${female[3]}
        Gender  : ${female[4]}
        location: ${female[5]}
        Fees    : ${female[6]}
        `);
    }
})


//Find class wise student result 

 stu_info.sort().forEach((data,index)=>{

     if(data[3] === "3" || data[3] === "5"){
        console.log(`${index+1}.

        Name    : ${data[0]}
        Roll    : ${data[1]}
        Age     : ${data[2]}
        Class   : ${data[3]}
        Gender  : ${data[4]}
        location: ${data[5]}
        Fees    : ${data[6]}
         `);
     }
 });


//Location wise student result 

stu_info.sort().map((location,index)=>{
    if(location[5] === 'Cumilla' || location[5] === "Sylhet"){
        console.log(`${index+1}.

        Name    : ${location[0]}
        Roll    : ${location[1]}
        Age     : ${location[2]}
        Class   : ${location[3]}
        Gender  : ${location[4]}
        location: ${location[5]}
        Fees    : ${location[6]}
         `);
    }
})

//find student between 10 - 25 age 

stu_info.forEach((data,index)=>{
    if(data[2]>=10 && data[2]<=25){
        console.log(`${index+1}.

        Name    : ${data[0]}
        Roll    : ${data[1]}
        Age     : ${data[2]}
        Class   : ${data[3]}
        Gender  : ${data[4]}
        location: ${data[5]}
        Fees    : ${data[6]}
         `);
    }
});