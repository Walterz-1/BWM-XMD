const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9lUm9ah9BEcSkkwFEVOTiDdTJyaSAAkqwQChQ7PjvE/qS7oc5Z3reKkWx9tprrb1fAMlwiXTUgPELyAtcQ4raI21yBMZArsIQFaALAkghGAPFauwZtOE120GarFbLjDengtC5T2cF33iaISx2rrYlB3J4Bo8uyCsvxf5vAOvpnBwNh9ltcMmN1oO4Z2+mzFLIFGWh1jp37kycqtont3P5DB4tIsQFJpGax+iMCpjqqLEhLr5Hvz/RUp9RNbgbOtMg2ioaOYpksV/3/EVwGlZqmAXlnmiYnX+Pfs8yQzlUXIiQopuGt+RCrucyw1NATWmi3syd7BF1RY1EfaNf4oigYB4gQjFtvq27O12lTqeJp51sUp0kNj6zyxDi9S3k8I6g5ZpIRcqmzHZnfI/4vn+AA2gFpMGaCtkjrjycMo1gqdJQNiuJcgnKDI+/4+grcbv4yEryf3RvlkePx445jRhyjTb1wjclKY3v9BYN9utrsJmdQxYZzEJTv0e/D7G60lWLS+3cEmPeZuqJPoptoh8WbqoHZdaYHeWUDHbSJ31Iq+J3LH0BIWvpc6hZl3Z/75zm/iiZusxpPpP7PlwzS2TVeX1KB0Jvwxu50XP97X5RnWVkS66ZUWWLrM4uDASZp3osOfE+U6Tn144S1MwDMGYfXVCgCJe0gBRnpL3jxC6AQb1BfoHoq7rAsGv/MEr2ioVv1/mFLfzZfeMUrnXzJHU/z1b7Szw5E790/WfQBXmR+agsUTDDJc2KxkBlCSNUgvFfP7uAoBt9862tNmC7IMRFSXekytMMBh+mfnyEvp9VhG4a4ivtARVgzHxeI0oxicpWxorAwo9xjZQY0hKMQ5iW6NEFAaqxj1o8sDeVy8gR55spPAuraqqkUPtbainHGXl74gkhMwpF9OQhQXziRDh48liRexqFIyGA3qgvMAHoAvw+Mu0/v3QQJlf7Vh6uxEf5Il+NtndnrWcdf3aTXl14kx4VKABjWlSoCzzoJ1W+zRJEfoNrX4aKTXtJFG08WDGYT9Kc70jwrnJfcN8sBeOXzzWlZEGL5zprd3BwHNAF59cE4rbz/pAX+CEvsn1+MGbFP8sf11ZImOc/CKKgCwhsXwNJk2TpD9UwJHOnLtt672a0SAGiEKdlu5t1oWHFZKrqmxVXcJomqZGkRK3aH+Z9DMFbypacIdYHNuAEmtzoibKp7KTBsbK0zO7pbqGvZutOp2nMa/n8LyBtX0nCZfmQ12bNlE8H2k4cXTpw19Qyi8WZMPNv17NcbyfT/WjicvdoVg2L1S11tDNruOzVkA/G/chh2pvfnWl10BvRPEyi57baW4i+Fluu2QuxO1cf7noVO4+s3npbGBzNzS0raRcmSPh8a62LoBewAtzmce1AmeVCuLBJfwl5zinjo5HJ8L4wdI+IfhmPXot9rIf0fS3j18l5eY9ciNHrlns34z9N+0w/8+h+wXjfm79ImLzpTGyvb+6RJRwN7yAEx5Vz3LveKb5Mek16aRKZCeuyPPlL8Hj87II8hTTMijMYg/LsQdAFKSyp9Dm9W3xGJYXnHIxZgev3ucFIHDz+AbMHuWTyBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Hero Walterz",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Hero Walterz",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Hero_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

