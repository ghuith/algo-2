function insertionsort (arr){


    for (let i=1 ;i<arr.lenght;i++) {
        let current =arr[i];
        let j=i-1;



        while(j>0&&arr[j>current]) {
            arr[j+1]=arr[j];
            j--;

        }
     
        arr[j=i]= current;

    }

    return arr;
} 