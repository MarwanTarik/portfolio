import { type ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "@/context/themeContext";
import { getThemeFromCookie } from "@/lib/themeManager";

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<"light" | "dark">(
		getThemeFromCookie() ?? "dark",
	);

	useEffect(() => {
		const prevTheme = theme === "light" ? "dark" : "light";
		document.documentElement.classList.remove(prevTheme);
		document.documentElement.classList.add(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
