import fs from "fs";

export const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter((f) => f.endsWith(ending));
};
