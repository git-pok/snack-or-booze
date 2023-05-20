function unroll(squareArray) {
    if (!Array.isArray(squareArray)) throw new Error("Invalid data type!");
    if (!squareArray.length) throw new Error("Array must have values!");
    try {
        const newSquare = JSON.parse(JSON.stringify(squareArray));
        const finalArray = [];
        const endToStartVals = [];
        while (newSquare.length !== 0) {
            for (let i = 0; i < newSquare.length; i++) {
                const row = newSquare[i];
                if (i === 0) finalArray.push(...row);

                if (i !== 0 && i !== newSquare.length - 1) {
                    finalArray.push(row[row.length - 1]);
                    endToStartVals.unshift(row[0]);
                }

                if (i === newSquare.length - 1 && i !== 0) {
                    const rowReverse = row.reverse();
                    finalArray.push(...rowReverse);
                    finalArray.push(...endToStartVals);
                    endToStartVals.length = 0;
                }
            }

            newSquare.forEach((val, idx) => {
                if (idx !== 0 && idx !== newSquare.length - 1) {
                    newSquare[idx].shift();
                    newSquare[idx].pop();
                }
            });
        
            newSquare.splice(0, 1);
            newSquare.splice(newSquare.length - 1, 1);
        }

        return finalArray;
    } catch(err) {
        throw new Error(`Error!\n${err}`);
    }
}

module.exports = unroll;
