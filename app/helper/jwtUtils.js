import jwt from "jsonwebtoken"

export const GenerateToken = async () => {
    try {
        return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' })
    }
    catch (e) {
        console.log("Error generating token ", e)
    }
}


export const VerifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (e) {
        console.log("Error verifying token ", e)
    }
}