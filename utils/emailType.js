function emailType(address) {
    const regex = /@[a-zA-z0-9]+/gi;
    const emailType = address.match(regex)[0].slice(1);
    return emailType;
}

module.exports = emailType;