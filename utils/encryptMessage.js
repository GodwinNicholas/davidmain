function encryptMessage(text) {
    return text.replace(/\s/gi, "_");
}

module.exports = encryptMessage