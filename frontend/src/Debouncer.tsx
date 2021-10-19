import * as React from 'react'

import useDebounce from './useDebounce'

const Debouncer = () => {
    const [value, setValue] = React.useState('');
    const debouncedValue = useDebounce(value, 500);

    React.useEffect(() => {
        fetch('http://localhost:1113/debouncer', { method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({ value: value })}  )
            .then(response => response.json())
            .then(json => console.log(json))
    }, [debouncedValue])

    return (
        <>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    )
}

export default Debouncer;