const time = () => {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
}

module.exports = time;