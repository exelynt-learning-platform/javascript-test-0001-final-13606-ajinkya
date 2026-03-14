
function printPattern(n) {
    const totalRows = 2 * n - 1;
    const center = n - 1;
    let output = "";

    for (let i = 0; i < totalRows; i++) {
       
        const distanceFromCenter = Math.abs(center - i);
       
        const leftStarPos = distanceFromCenter;
        const rightStarPos = (totalRows - 1) - distanceFromCenter;

        let rowStr = "";
       
        for (let j = 0; j <= rightStarPos; j++) {
            if (j === leftStarPos || j === rightStarPos) {
                rowStr += "*";
            } else {
                rowStr += " ";
            }
        }
        output += rowStr + "\n";
    }

    console.log(output);
}

printPattern(5);
