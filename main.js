/**
 * Bài luyện tập Array
 */

var numArray = [];
//Thêm phần tử vào mảng
function addElement(){
var num = Number(document.querySelector("#inputNumber").value);
//Thêm phần tử vào mảng
//push()
numArray.push(num);
// console.log(numArray);
document.getElementById("hienthi").innerHTML = numArray;
}
document.getElementById("btnThemSo").onclick = addElement;
//1. tinhTongSoDuong
function tinhTongSoDuong(){
    var sum = 0;
    for (i=0; i<numArray.length;i++){
        if(numArray[i] > 0){
            sum+=numArray[i];
            console.log(sum);
        }
    }
    document.getElementById("hienthi1").innerHTML = "Tổng: " + sum;    
}
document.getElementById("btnTongSoDuong").onclick =tinhTongSoDuong;
//2. demSoDuong
function demSoDuong(){
    var count= 0;
    for (i=0; i<numArray.length;i++){
        if(numArray[i] > 0){
            count++;
        }
    }
    document.getElementById("hienthi2").innerHTML = "Số dương: " + count;
}
document.getElementById("btnDemSoDuong").onclick =demSoDuong;
//3. timSoMin
function timSoMin(){
    var viTri = 0;
    var soMin = numArray[viTri];
    for (i=0; i<numArray.length;i++){
        if(numArray[i] <soMin){
            viTri = i;
            soMin = numArray[i];
            // console.log(soMin);
        }
    }
    document.getElementById("hienthi3").innerHTML = "Số nhỏ nhất: " +  soMin;    
}
document.getElementById("btnTimSoMin").onclick =timSoMin;
//4. timSoDuongMin
function timSoDuongMin(){
    var viTri = 0;
    var soDuongMin = numArray[viTri];

    for (i=0; i<numArray.length;i++){
        if(numArray[i] < soDuongMin && numArray[i]>0){
            viTri = i;
            soDuongMin = numArray[i];
            console.log(soDuongMin);
        }
    }
    document.getElementById("hienthi4").innerHTML = "Số dương nhỏ nhất: " + soDuongMin;    
}
document.getElementById("btnTimSoDuongMin").onclick =timSoDuongMin;

//5. timSoChanCuoiCung
function timSoChanCuoiCung(){
    var viTri = 0;
    var soChanCuoiCung = numArray[viTri];

    for (i=0; i<numArray.length;i++){
        if(numArray[i]%2==0){
            soChanCuoiCung = numArray[i];
            console.log(soChanCuoiCung);
        }
    }
    document.getElementById("hienthi5").innerHTML = "Số chẵn cuối cùng: " + soChanCuoiCung;    
}
document.getElementById("btnTimSoChan").onclick =timSoChanCuoiCung;
//6. doiCho

function doiCho(){
    var soViTri1 = document.getElementById("inputViTri1").value;
    var soViTri2 = document.getElementById("inputViTri2").value;
    var temp = numArray[soViTri1];
    numArray[soViTri1] = numArray[soViTri2];
    numArray[soViTri2] = temp;

    // console.log(numArray);
    document.getElementById("hienthi6").innerHTML = numArray;
}
document.getElementById("btnDoiCho").onclick = doiCho;
//7. sapXepTangDan
function swap(j){
    var temp = numArray[j];
    numArray[j] = numArray[j + 1];
    numArray[j + 1] = temp;
}
function sapXepTangDan(){
    for (i=0;i<numArray.length;i++){
        for(j=0;j<numArray.length-1;j++){
            if(numArray[j]>numArray[j+1]){
                swap(j);
            }
        }
    }
    document.getElementById("hienthi7").innerHTML = numArray;
}
document.getElementById("btnSapXep").onclick =sapXepTangDan;
//8. timSoNguyenToDauTien

function kiemTraSoNguyenTo(n){
        if(n<2){
            return false;
        } 
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0 && n>=2){
            return false;
        }   
    }
    return true;
}

function lietKeSoNTDau(){
    for(i=0;i<=numArray.length;i++){
        if(kiemTraSoNguyenTo(numArray[i])){
            soNguyenTo = numArray[i];
            break;
        }
    }  
    document.getElementById("hienthi8").innerHTML = "Số nguyên tố đầu tiên: "+ soNguyenTo;
}
document.getElementById("btnTimSoNguyenTo").onclick =lietKeSoNTDau;


//9. demSoNguyen
//Thêm số
var numArray1 = [];
//Thêm phần tử vào mảng
function addElement1(){
var num1 = Number(document.querySelector("#inputNumber1").value);
//Thêm phần tử vào mảng
//push()
numArray1.push(num1);
// console.log(numArray1);
document.getElementById("hienthiSo").innerHTML = numArray1;
}
document.getElementById("btnThemSo1").onclick = addElement1;
//Đếm
function demSoNguyen(){
    var count=0;
    for (i=0;i<numArray1.length;i++){
        if(Number.isInteger(numArray1[i])){
            count++;
        }
    }
    document.getElementById("hienthi9").innerHTML = "Số nguyên: "+ count;
}
document.getElementById("btnDemSoNguyen").onclick =demSoNguyen;

//10. Đếm số âm và số dương
function demSoAm(){
    var count= 0;
    for(i=0;i<numArray.length;i++){
        if(numArray[i]<0){
            count++;
            // console.log(count);
        }
    }
    return count;
} 
function demSoDuong1(){
    var count= 0;
    for (i=0; i<numArray.length;i++){
        if(numArray[i] > 0){
            count++;
        }
    }
    return count;
}

function soSanhAmDuong(){
    var soAm = demSoAm();
    var soDuong = demSoDuong1();
        if(soAm > soDuong){
            // console.log("Số âm nhiều hơn số dương");
            document.getElementById("hienthi10").innerHTML = "Số âm nhiều hơn số dương";
        }else if(soAm < soDuong){
            // console.log("Số dương nhiều hơn số âm")
            document.getElementById("hienthi10").innerHTML = "Số dương nhiều hơn số âm";
        }else{
            // console.log("Số dương bằng số âm")
            document.getElementById("hienthi10").innerHTML = "Số âm bằng số dương";
        }    
}   
document.getElementById("btnDemSoAmDuong").onclick =soSanhAmDuong;

// const arr = [1, 2, 3, 4, 5];

// var indexInput = 2;
// var indexSwap = 4;

// var tempIndex = arr[indexInput];
// arr[indexInput] = arr[indexSwap];
// arr[indexSwap] = tempIndex;

// console.log(arr)