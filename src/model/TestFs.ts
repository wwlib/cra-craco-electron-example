const fs = require('fs');
const path = require('path');

// const testFs = () => {
//     console.log(`testFs: testing...`);
// }


export default class TestFs {

    static test() {
        console.log(`TestFs: test()`);
        fs.readdir('.', (err: any, files: any) => {
            if (err) {
                console.log(`TestFs: error: ${err}`);
            } else {
                files.forEach((file: string) => {
                    let filename: string = path.basename(file, '.json');
                    console.log(filename);
                });
            }
        });
    }
}
