///////////////////////////Assignment # 13-15///////////////////////////

/////////////////////////////Js Object Loop/////////////////////////////

//Q-1
// var arr = [];
// console.log(arr);

// Q-2
// var arr = new Array();
// console.log();

// Q-3
// var arr = ["Hallo World"];
// console.log(arr);

// Q-4
// var arr = [786]; 
// console.log(arr);

// Q-5
// var arr = [true];
// console.log(arr);

// Q-6
// var arr = ["Hallo World" , 786 , false];
// console.log(arr);

// Q-7
// var arr = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M. Phil" , "PhD"];
// document.write("<h1>" + "Qualifications" + "</h1>" + "<br/>");
// document.write("<h2>" + "1) " + arr[0] + "<br/>" + "2) " + arr[1] + "<br/>" + "3) " + arr[2] + "<br/>" + "4) " + arr[3] +"<br/>" + "5) " + arr[4] +"<br/>" + "6) " + arr[5] +"<br/>" + "7) " + arr[6] +"<br/>" + "8) " + arr[7] + "</h1>");

// Q-8
// var stdName = ["Zardari", "Shahbaz", "Diesel"];
// var stdScore = [120, 130, 180];

// var per1 = (stdScore[0] / 500) * 100;
// var per2 = (stdScore[1] / 500) * 100;
// var per3 = (stdScore[2] / 500) * 100;


// document.write("<h1>"+"Total Marks 500"+ "<br/>"+"<br/>"+ "1) Score" +'\xa0\xa0'+ "Of" +'\xa0\xa0'+ stdName[0] +'\xa0\xa0\xa0'+ '('+ stdScore[0] +')'+'\xa0\xa0'+ "per:" + '\xa0\xa0'+ '('+per1  +')'+'%'+ "</h1>");

// document.write("<h1>" + "2) Score" +'\xa0\xa0'+ "Of" +'\xa0\xa0'+ stdName[1] +'\xa0\xa0'+ '('+ stdScore[1] +')'+'\xa0\xa0'+ "per:" + '\xa0\xa0'+ '('+per2  +')'+'%'+ "</h1>");

// document.write("<h1>" + "3) Score" +'\xa0\xa0'+ "Of" +'\xa0\xa0'+ stdName[2] +'\xa0\xa0\xa0\xa0\xa0\xa0 '+ '('+ stdScore[2] +')'+'\xa0\xa0'+ "per:" + '\xa0\xa0'+ '('+per3  +')'+'%'+ "</h1>");

// Q-9
/*var arr = ["red" , "green" , "blue"];
document.write(arr);*/

// A part
/*var arr = ["red" , "green" , "blue"];
arr.unshift(prompt("Enter Your Favourite Color"))

document.write(arr);*/

// B Part
/*var arr = ["red" , "green" , "blue"];
arr.push(prompt("Enter Your Favourite Color"))

document.write(arr);*/

// C part
/*var arr = ["red" , "green" , "blue"];
arr.unshift(prompt("Enter Your Favourite Color"))
arr.unshift(prompt("Enter Your Favourite Color"))

document.write(arr);*/

// D part
/*var arr = ["red" , "green" , "blue"];
arr.shift(arr[0]);

document.write(arr);*/

// E part
/*var arr = ["red" , "green" , "blue"];
arr.pop(arr[2]);

document.write(arr);*/

// F part
/*var arr = ["red" , "green" , "blue"];
var indexNum = prompt("Enter Index Number");
var colorName = prompt("Enter Your Color Name");
    arr.splice(indexNum, 0, colorName);

document.write(arr);*/

// G part
    /*var arr = ["red" , "green" ,"blue" , "white" , "yallow" , "pink"];

    arr.splice(prompt("how much you want to delet"));
    console.log(arr);

    var color = ["red" , "green" ,"blue" , "white" , "yallow" , "pink"];
    
    var arr = prompt("Enter index location for deleting Color :eg(0-4)");
    
    var deleteColor = prompt("How many color do you want to delete?" );
    color.splice(arr, deleteColor);
    
    document.write("<h1>" + "After deleting" + "</h1>" + "<br/>")
    document.write(color);*/

// Q-10
    /*var arr = [320, 230, 480, 120];
    arr.sort();
    document.write(arr)
        
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});*/

// Q-11
    /*var arr = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    var arrCopy = arr.slice(0,3);
    document.write(arrCopy);*/

// Q-12
    /*var arr = ["Tangay", "Kap", "Rahi", "Hai"];
    arrjoin = arr.join(" ");
    document.write("<h2>" + "Array: " + "<br/>" + arr + "<br/>" + "<br/>" + "String " + "<br/>" +arrjoin + "<h2>");*/

// Q-13
    /*var arr = ["Keyboard", "Mouse", "Printer", "Monitor"];
    document.write("<h1>"  + "Devices" + "<br/>" +arr+ "</h1>"  + "<h2>" + "Out: " + "<br/>" + arr.shift() + "<br/>"
    + "Out: " + "<br/>" + arr.shift() + "<br/>"+ "Out: " + "<br/>" + arr.shift() + "<br/>"+ "Out: " + "<br/>" + arr.shift() + "<br/>"
    + "</h2>");*/

// Q-14
    /*var arr = ["Keyboard", "Mouse", "Printer", "Monitor"]
    document.write("<h1>"  + "Devices" + "<br/>" +arr+ "</h1>"  + "<h2>" + "Out: " + "<br/>" + arr.pop() + "<br/>"
    + "Out: " + "<br/>" + arr.pop() + "<br/>"+ "Out: " + "<br/>" + arr.pop() + "<br/>"+ "Out: " + "<br/>" + arr.pop() + "<br/>"
    + "</h2>")*/

// Q-15
//  (ye Qust samaj ni araha hai sir se pochna hai)


/////////////////Assignment # 13-15 complt///////

/////////////////Assignment # 17-20 strt///////

// Q-1
    /*var empyArr = [
    [],
    [],
    [],
    ];
    console.log(empyArr)*/

// Q-2
    /*var arr = [
    [0,'\xa0\xa0\xa0'+ 1,'\xa0\xa0\xa0'+2,'\xa0\xa0\xa0'+3,'\xa0\xa0\xa0'+"</br>"],
    [1,'\xa0\xa0\xa0'+0,'\xa0\xa0\xa0'+1,'\xa0\xa0\xa0'+2,"</br>"],
    [2,'\xa0\xa0\xa0'+1,'\xa0\xa0\xa0'+0,'\xa0\xa0\xa0'+1],
    ];
    
    for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
    document.write(arr[row][col]);
    }};*/
    
// Q-3
    /*for(var i=1 ; i<=10; i++){
    document.write(i +"</br>");
    }*/
    
// Q-4
    /*var num =+prompt("enter table to be print");
    var length =+prompt("enter length of table");
    for(var len=1 ; len<=length ;len++){
    document.write(num +" * "  + len + " = "+ num * len + "</br>"  )
    }*/

// Q-5
    /*var fruits =  ["apple", "banana", "mango", "orange", "strawberry"];
    
    for(var i=0 ; i<fruits.length ; i++)
    {
    document.write(fruits[i] + "</br>"+"</br>");
    }

    for(var i=0 ; i<fruits.length ; i++)
    {
    document.write("element at index  "  + i + " is " +   fruits[i] + "</br>");
    }*/

// Q-6
    /*document.write("<h1>A) Counting</h1>");
    for(var i=1 ; i<=15 ;i++){
    document.write( i + " , " );
    };

    document.write("<h1>B) Reverse counting</h1>");
    for(var i=10 ; i>=1 ;i--){
    document.write( i + " , " );
    };

    document.write("<h1>C) Even number</h1>");
    for(var i=0 ; i<=20 ;i+=2){
    document.write( i + " , " );
    };

    document.write("<h1>D) Odd number</h1>");
    for(var i=1 ; i<=19 ;i+=2){
    document.write( i + " , " );
    };

    document.write("<h1>E) Series</h1>");
    for(var i=2 ; i<=20 ;i+=2){
    document.write( i+"k" + " , " );
    };*/

    // Q-7
    /*var  a = ["cake" , "apple pie" , "cookie", "chips" , "patties"];
    var userDesire =prompt("Welcome To ABC Bakery. What Do You Want To Order Sir.");
    var isMatch = false;

    for (var i = 0; i < a.length; i++) {
    if (userDesire == a[i]); {
    alert(userDesire + " Available At Index " + i + " In Our Bakery");
    isMatch = true;
    break;
    };
    };

    if (isMatch === false); {
    alert("We Are Sorry " + userDesire + " Is " + "Not Available" + "In Our Bakery");
    };*/

    // Q-8
    /*var array = [24, 53, 78, 91, 12];
    var largest= 0;

    for (var i=0; i<=largest;i++){
    if (array[i]>largest) {
    var largest=array[i];
    };
    };
    document.write(array +"</br>")
    document.write("the largest number is " + largest);*/

    // Q-9
    /*var array = [24, 53, 78, 91, 12]
    var smallest= 100000000000000000;
    
    for (i=0; i<=smallest;i++){
    if (array[i]<smallest) {
    var smallest=array[i];
    };
    };
    document.write(array + "</br>");
    document.write("the largest number is " + smallest);*/

    // Q-10
    ("ye samj ni aya sir se pochna hai" )


