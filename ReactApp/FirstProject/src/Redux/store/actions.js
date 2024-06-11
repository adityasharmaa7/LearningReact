import { DECRIMENT, INCRIMENT } from "./constant"

// defining the actions (which will return Obj)
export const incriment = () => {
    return {
        type: INCRIMENT
    }
}

export const decriment = () => {
    return {
        type: DECRIMENT
    }
}