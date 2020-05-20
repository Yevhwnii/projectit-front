export const checkValidity = (value, rules ) => {
    let isValid = true
    if (rules.required) {
        isValid = value.trim().lenght !== 0 && isValid
    }
    // if (rules.isId) {
    //     const testString = /^[0-9]+$/
    //     isValid = testString.test(value) && isValid
    // }
    if(rules.isPassword) {
        const testString = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/
        isValid = testString.test(value) && isValid
    }
    
    
    
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }
    return isValid
}

export const checkFormValidity = (form) => {
    let formIsValid = true
    for (let key in form) {
        formIsValid = form[key].valid && formIsValid
    }
    return formIsValid
}