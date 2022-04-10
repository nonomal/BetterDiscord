export default {
    ...BetterDiscord.Crypto,
    // Wrap it in Buffer
    randomBytes(length) {
        return Buffer.from(BetterDiscord.Crypto.randomBytes(length));
    }
};