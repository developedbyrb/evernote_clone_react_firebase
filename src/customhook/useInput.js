import { useState } from "react";

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)
    const reset = () => {
        setValue(initialValue);
    }
    const bind = {
        value,
        onChange: (e) => {
            setValue(e.target.value)
        }
    }
    return [value, reset, bind]
}

export default useInput;