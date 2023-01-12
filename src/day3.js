function day3(value) {
    if(value) {
        setTimeout(() => value("Christiano"), 1000)
    }
    else {
        return Promise.resolve("Christiano")
    }
}

export default day3;