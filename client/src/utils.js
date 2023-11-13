import periodicTableData from "./periodic-table.json";

const sortTable = (criterion) => {
    console.log({criterion});
    let nullCount = 0;
    const sortedTable = periodicTableData.elements.sort((a, b) => {
        if(a[criterion] === null) {
            nullCount++;
            if(typeof b[criterion] === "number") {
                return -1
            }
            else {
                return 0;
            }
        } else if(b[criterion] === null) {
            nullCount++;
            return 1;
        } else {
            return a[criterion] - b[criterion]
        }
    });
    console.log({nullCount});
    return sortedTable;
}

const generateLightness = (value, low, range) => {
    if(!value) return 100;

    let lightness = 100 - (Math.abs(value - low) * (100 / range));
    return lightness;
}

export { generateLightness, sortTable };

