// 1. Write a js program to read and print elements of array.
var elements=[1,2,3,4,5,6,7,8,9,10];
for(var i=1;i<=elements.length;i++){
    console.log(i);
}
// 2. Write a js program to print all negative elements in an array.
console.log("Question No 2")
var numbers=[1,-2,3,-4,5,-6];
for(var a=1;a<=numbers.length;a++){
    if(numbers[a]<0){
        console.log(numbers[a]);
    }
}

// 3. Write a js program to find sum of all array elements.
console.log("Question No 3")
var sum=[1,2,3,4,5,6,7,8,9,10];
var add=0;
for(c=1;c<=sum.length;c++){
    add=add+c;
}
console.log(add);
// 4. Write a js program to find maximum and minimum element in an array.
console.log("Question no 4")
var array=[20,40,60,10,70,50];
var max=array[0];
var min=array[0];
for(var i=1;i<=array.length;i++){
    if(array[i]>max){
        max=array[i]
    }
    else if(array[i]<min){
        min=array[i]
    }
}
console.log("Maximum no in array =>",max);
console.log("Minimum no in array =>",min);

// 5. Write a js program to find second largest element in an array.
console.log("Question no 5");
var arr=[20,40,60,10,70,50];
var max1=Math.max(...arr);
var second=arr[0];
for(z=1;z<=arr.length;z++){
    if(arr[z]<max && arr[z]>second){
        second=arr[z];
    }
}
console.log(second);
// 6. Write a js program to count total number of even and odd elements in an array.
console.log("Question no 6");
var evenodd=[1,2,3,4,5,6];
var evenno=0;
var oddno=0;
for(s=1;s<=evenodd.length;s++){
    if(evenodd[s]%2==0){
        evenno++;
    }
    else if(evenodd%2 !=0){
        oddno++;
    }

}
console.log(evenno);
console.log(oddno);
// 7. Write a js program to count total number of negative elements in an array.
console.log("Question no 7");
var negative=[1,-2,3,-4,5,-6,7,-8,-9,-10];
var count=0;
for(var d=1;d<=negative.length;d++){
    if(negative[d]<0){
        count++;
    }
}
console.log(count);
// 8. Write a js program to copy all elements from an array to another array.
console.log("Question no 8");
var copy=["Ali","adress",1,2,3];
var anotherarray=[];
for(var t=0;t<=copy.length;t++){
    anotherarray.push(copy[t]);
}
console.log("Another array",anotherarray);
console.log("Original array",copy);
// 9. Write a js program to insert an element in an array.
console.log("Question no 9");
var insertelement=[1,2,3,4,5,6];
console.log(insertelement,"Before adding element");
insertelement.push("last emlent");
insertelement.unshift("First element");
console.log(insertelement,"After adding elements");
// 10. Write a js program to delete an element from an array at specified position.
console.log("Question no 10");
var position=[1,2,3,4,5,6];
console.log(position,"Before removing elements");
position.splice(1,2);
console.log(position,"After removing elements");
// 11. Write a js program to count frequency of each element in an array.
console.log("Question no 11");
var frequency=[1,2,3,4,3,4,2,2,2,5,6];
var calculate={};
var countcount=0;
for(var r=0;r<=frequency.length;r++){
    countcount=frequency[r];
    if(calculate[countcount]){
        calculate[countcount]++;
    }
    else{
        calculate[countcount]=1;
    }
}
console.log(calculate);
// 12. Write a js program to print all unique elements in the array
console.log("Question no 12");
var arr=[1,1,2,2,3,4,4,5,6,6]
var uniqueelement=[...new Set(arr)];
console.log(uniqueelement);
// 13. Write a js program to count total number of duplicate elements in an array.
console.log("Question no 13");
var duplicate=[1,2,3,4,3,4,2,2,2,5,6];
var dupcalculate={};
var dupcount=0;
for(var w=1;w<=duplicate.length;w++){
    dupcount=duplicate[w];
    if(dupcalculate[dupcount]){
        dupcalculate[dupcount]++;
    }
    else{
        dupcalculate[dupcount]=1;
    }
}
console.log(dupcalculate);
// 14. Write a js program to delete all duplicate elements from an array.
console.log("Question no 14");
var dupdelete=[1,2,3,4,3,4,2,2,2,5,6];
var dl=[...new Set(dupdelete)];
console.log(dl);
// 15. Write a js program to merge two array to third array.
console.log("Question no 15");
var one=[1,2,3];
var two=[4,5,6];
var third=[];
for(var tt=0;tt<=one.length;tt++){
    third.push(one[tt]);
}
for(var ttt=0;ttt<=two.length;ttt++){
    third.push(two[ttt]);
}
console.log(third);
// 17. Write a js program to put even and odd elements of array in two separate array.
console.log("Q No 17")
var seperate=[1,2,3,4,5,6];
var even=[];
var odd=[];
for(var jjj=0;jjj<=seperate.length;jjj++){
    if(seperate[jjj]%2===0){
     even.push(seperate[jjj]);
    
    }
    
    else if(seperate[jjj]%2!=0){
        odd.push(seperate[jjj]);
    }
}
console.log(even);
console.log(odd);
// 16. Write a js program to find reverse of an array.
console.log("Q No 16")
var reverseprint=[1,2,3,4,5,6];
var anotherarray=[];
var ccc=reverseprint.length-1;
while(ccc>=0){
    anotherarray.push(reverseprint[ccc]);
    ccc--;
}
console.log(anotherarray);
// Write a js program to search an element in an array.
console.log("Q No 18")
var none=[0,1,2,3,4,5,6];
var hello=prompt("Enter no");
for(n=0;n<=none.length;n++){
    if(none[n]==hello){
        console.log(n);
    }
}
// 20. Write a js program to sort even and odd elements of array separately.
console.log("Q No 20");
var seperate=[1,2,3,4,5,6];
var even=[];
var odd=[];
for(var jjj=0;jjj<=seperate.length;jjj++){
    if(seperate[jjj]%2===0){
     console.log(seperate[jjj],"Even no");
    
    }
    
    else if(seperate[jjj]%2!=0){
        console.log(seperate[jjj],"Odd no");
    }
}
// 21. Write a js program to left rotate an array.
console.log("Q No 21");
var left=[1,2,3,4,5,6];
var dddd=left[left.length-1]
var leftleft=left;
leftleft.pop();
leftleft.unshift(dddd);
console.log(leftleft);

// 22. Write a js program to right rotate an array.
console.log("Q No 22");
var right=[1,2,3,4,5,6];
var lastelement=right[0];
var anotherright=right;
anotherright.shift();
anotherright.push(lastelement);
console.log(anotherright);
// 19. Write a js program to sort array elements in ascending or descending order.
var ascendingarray=[1,3,5,2,4,6];
ascendingarray.sort((a,b)=>a-b);
console.log(ascendingarray);






