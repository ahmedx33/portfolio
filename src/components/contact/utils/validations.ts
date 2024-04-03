export function validateName(value: string) {
    const errors = [{ success: true, message: "Please enter a name" }]
    if (value.trim().length === 0) {
        errors[0] = { success: false, message: "Please enter a name" }
    }
    return errors
}


export function validateEmail(value: string) {
    const errors = [{ success: true, message: "Please enter an email" }, { success: true, message: "Please enter a valid email" }]
    if (value.trim().length === 0) {
        errors[0] = { success: false, message: "Please enter an email" }
    }
    if (!value.includes("@")) {
        errors[1] = { success: false, message: "Please enter a valid email" }
    } else if (!value.includes(".")) {
        errors[1] = { success: false, message: "Please enter a valid email" }
    }

    return errors
}


export function validateSubject(value: string) {
    const errors = []
    if (value.trim().length === 0) {
        errors.push({ success: false, message: "Please enter a subject" })
    }
    return errors
}


export function validateBody(value: string) {
    const errors = []
    if (value.trim().length === 0) {
        errors.push({ success: false, message: "Please enter a body" })
    }
    return errors
}
