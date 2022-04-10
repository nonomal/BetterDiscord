export const readFileSync = function (path, options = "utf8") {
    return BetterDiscord.FileManager.readFile(path, options);
};

export const readFile = function (path, options = "utf8", callback) {
    try {
        const contents = BetterDiscord.FileManager.readFile(path, options);
        callback(null, contents);
    } catch (error) {
        callback(error, null);
    }
};

export const writeFile = function (path, data, options = "utf8", callback) {
    if (typeof (options) === "function") {
        callback = options;
        if (!["object", "string"].includes(typeof (options))) options = undefined;
    }

    try {
        BetterDiscord.FileManager.writeFile(path, data, options);
        callback(null);
    } catch (error) {
        callback(error);
    }
};

export const writeFileSync = function (path, data, options) {
    BetterDiscord.FileManager.writeFile(path, data, options);
};

export const readdir = function (path, options, callback) {
    try {
        const result = BetterDiscord.FileManager.readDirectory(path, options);
        callback(null, result);
    } catch (error) {
        callback(error, null);
    }
};

export const readdirSync = function (path, options) {
    return BetterDiscord.FileManager.readDirectory(path, options);
};

export const mkdir = function (path, options, callback) {
    try {
        const result = BetterDiscord.FileManager.createDirectory(path, options);
        callback(null, result);
    } catch (error) {
        callback(error, null);
    }
};

export const mkdirSync = function (path, options) {
    BetterDiscord.FileManager.createDirectory(path, options);
};

export const rmdir = function (path, options, callback) {
    try {
        const result = BetterDiscord.FileManager.deleteDirectory(path, options);
        callback(null, result);
    } catch (error) {
        callback(error, null);
    }
};

export const rmdirSync = function (path, options) {
    BetterDiscord.FileManager.deleteDirectory(path, options);
};

export const exists = function (path, options, callback) {
    try {
        const result = BetterDiscord.FileManager.exists(path, options);
        callback(null, result);
    } catch (error) {
        callback(error, null);
    }
};

export const existsSync = function (path, options) {
    return BetterDiscord.FileManager.exists(path, options);
};

export const stat = function (path, options, callback) {
    try {
        const result = BetterDiscord.FileManager.getStats(path, options);
        callback(null, result);
    } catch (error) {
        callback(error);
    }
};

export const statSync = function (path, options) {
    return BetterDiscord.FileManager.getStats(path, options);
};

export const lstat = stat;
export const lstatSync = statSync;

export const rename = function (oldPath, newPath, options, callback) {
    try {
        const result = BetterDiscord.FileManager.rename(oldPath, newPath, options);
        callback(null, result);
    } catch (error) {
        callback(error, null);
    }
};

export const renameSync = function (oldPath, newPath, options) {
    return BetterDiscord.FileManager.renameSync(oldPath, newPath, options);
};

export const realpath = function (path, options, callback) {
    try {
        const result = BetterDiscord.FileManager.getStats(path, options);
        callback(null, result);
    } catch (error) {
        callback(error, null);
    }
};

export const realpathSync = function (path, options) {
    return BetterDiscord.FileManager.getRealPath(path, options);
};

export const watch = (path, options, callback) => {
    return BetterDiscord.FileManager.watch(path, options, callback);
};

export const createWriteStream = (path, options) => {
    return BetterDiscord.FileManager.createWriteStream(path, options);
};

export default {
    readFile,
    exists,
    existsSync,
    lstat,
    lstatSync,
    mkdir,
    mkdirSync,
    readFileSync,
    readdir,
    readdirSync,
    realpath,
    realpathSync,
    rename,
    renameSync,
    rmdir,
    rmdirSync,
    watch,
    writeFile,
    writeFileSync,
    createWriteStream
};
