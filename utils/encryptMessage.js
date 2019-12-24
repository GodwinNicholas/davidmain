function encryptMessage(text) {
    return text.replace(/\s/gi, "‘ ");
}

module.exports = encryptMessage