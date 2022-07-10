for (i = 1; i <= 9; i++) {
    if ((i % 2) !== 0) {
        for (j = i+6; j >= i+4; j--) {
            console.log(`I=${i} J=${j}`);
        }
    }
}