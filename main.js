// function my_function (length, width){
//     console.log(length * width);
// }

// my_function(54,1);

// function check_even (n){
//     if (n%2==0){
//         alert("Số này là số chẵn");
//     } else {
//         alert("Số này là số lẻ");
//     }
// }

// check_even(prompt("Vui lòng nhập một số nguyên bất kì: "));

// function check_leap (year){
//     if(year%400==0){
//         alert("Năm " + year + " là năm thế kỉ");
//     }
//     else if(year%4==0){
//         alert("Năm " + year + " là năm nhuận");
//     }
//     else{
//         alert("Năm " + year + " không phải là năm nhuận");
//     }
// }

// check_leap(prompt("Vui lòng nhập một năm bất kì"));

// function text_return(a,b){
//     return a+b;
// }

// var n1 = 6;
// var n2 = 4;
// var sum = text_return(n1,n2);
// alert(sum);

// function check_leap (year){
//     if(year%4==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// var n=Number(prompt("Nhập một năm bất kì: "));

// if (check_leap(n)){
//     console.log("yes");
//     alert("Năm " + n + " là năm nhuận");
// }
// else {
//     alert("Năm " + n + " không phải là năm nhuận");
// }

function area(type,a,b){
    switch(type){
        case "circle":
            return a*a*3.14159;
            break;
        
        case "square":
            return a*a;
            break;

        case "triangle":
            return (a*b)/2;
            break;
        
        case "rectangle":
            return (a*b);
            break;
    }    
}


alert(area(prompt("Vui lòng nhập loại hình mà bạn muốn tính diện tích (circle, square, triangle, rectangle)"), prompt("Vui lòng nhập đường kính (nếu bạn chọn hình tròn) chiều dài (nếu bạn chọn hình vuông/chữ nhật) hoặc chiều cao (nếu bạn chọn hình tam giác)"), prompt("Vui lòng nhập chiều rộng")));