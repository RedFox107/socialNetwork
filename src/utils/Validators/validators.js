export const required = value=>{
    if(value) return undefined
    return "Field is required"
}

export const maxLenghtCreator = (lenght) => { return value => {
    if (value.length > lenght) return `Max lenght is ${lenght} symbols`
    return undefined
}
}

let bb = maxLenghtCreator(20)
export default bb;