for (i = 0; i <= 2.0; i = i + 0.2) {
    for (j = i+1; j <= i+3; j++) {
        if (i === 0 || i === 1 || j === 3 || j === 4 || j === 5) {
            console.log(`I=${parseFloat(i).toFixed(0)} J=${parseFloat(j).toFixed(0)}`);
        } else{
            console.log(`I=${parseFloat(i).toFixed(1)} J=${parseFloat(j).toFixed(1)}`);
        }
    }    
}