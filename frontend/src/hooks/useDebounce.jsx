import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handlerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handlerId);
        }
    }, [value, delay]);

    return debouncedValue;
}