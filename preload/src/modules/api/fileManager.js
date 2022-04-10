import * as fs from "fs";
import cloneObject from "common/clone";

export function readFile(path, options = "utf8") {
    return fs.readFileSync(path, options);
}

export function writeFile(path, content, options) {
    if (content instanceof Uint8Array) {
        content = Buffer.from(content);
    }

    const writeFile = options?.originalFs ? require("original-fs").writeFileSync : fs.writeFileSync;

    return writeFile(path, content, options);
}

export function readDirectory(path, options) {
    return fs.readdirSync(path, options);
}

export function createDirectory(path, options) {
    return fs.mkdirSync(path, options);
}

export function deleteDirectory(path, options) {
    fs.rmdirSync(path, options);
}

export function exists(path) {
    return fs.existsSync(path);
}

export function getRealPath(path, options) {
    return fs.realpathSync(path, options);
}

export function rename(oldPath, newPath) {
    return fs.renameSync(oldPath, newPath);
}

export function createWriteStream(path, options) {
    return cloneObject(fs.createWriteStream(path, options));
}

export function watch(path, options, callback) {
    const watcher = fs.watch(path, options, (event, filename) => {
        try {
            callback(event, filename);
        } catch (error) {
            console.error(error);
        }
    });

    return {
        close: () => {
            watcher.close();
        }
    };
}

export function getStats(path, options) {
    const stats = fs.statSync(path, options);
    
    return {
        ...stats,
        isFile: stats.isFile.bind(stats),
        isDirectory: stats.isDirectory.bind(stats),
        isSymbolicLink: stats.isSymbolicLink.bind(stats)
    };
}