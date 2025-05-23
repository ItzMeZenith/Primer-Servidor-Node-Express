const Time = () => {
    const now = new Date();
    console.log(now.toLocaleTimeString())
    return now.toLocaleTimeString();
}

export default Time