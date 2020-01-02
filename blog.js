function getContent() {
    let result = '';
    let count = 0;
    while (count < 10) {
        result += '<p>What an amazing blog!</p>'
    }
    return result;
}

module.exports = {
    getContent
};