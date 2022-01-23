import {useCallback, useState} from "react";
import {v1 as uuid} from "uuid";
import {CounterView} from "../CounterLayout/CounterCiew";



export const Counter = ({
                            isShow,
                            currentId = uuid(),
                            handleRemoveCounter,
                        }) => {
    const [value, setValue] = useState(0);

    const handleIncrement = useCallback(() => {
        setValue((state) => state + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        if (value > 0) setValue((state) => state - 1);
    }, [value]);

    const handleReset = useCallback(() => {
        setValue(0);
    }, []);
    return (
        <CounterView
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
            handleRemoveCounter={handleRemoveCounter}
            currentValue={value}
            currentID={currentId}
            isShow={isShow}
        />
    );
};
