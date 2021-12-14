import fs from "fs";
import csv from "csv";

class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);

        const parseFile = csv();

        stream.pipe(parseFile);

        parseFile.on("data", async (line: any)=>{
         console.log(line);
        });
    }
}
export { ImportCategoryUseCase };


