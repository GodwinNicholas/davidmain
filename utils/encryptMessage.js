function encryptMessage(text) {
    return text.replace(/\s/gi, "__");
}



module.exports = encryptMessage