import { useCallback, useState } from "react";

export const useToggle = (initialState = false) => {
	const [toggle, setValue] = useState(initialState);
	const setToggle = useCallback(() => setValue((v) => !v), []);
	return { toggle, setToggle };
};
