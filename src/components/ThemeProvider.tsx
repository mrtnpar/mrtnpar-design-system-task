import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { Platform } from "react-native";
import {
	type ActualTheme,
	darkTheme,
	lightTheme,
	type Theme,
	type ThemeMode,
} from "../tokens/themes";

interface ThemeProviderState {
	mode: ThemeMode;
	setTheme: (mode: ThemeMode) => void;
}

interface ThemeValue {
	theme: Theme;
	mode: ThemeMode;
	setTheme: (mode: ThemeMode) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | null>(null);
const ThemeContext = createContext<ThemeValue | null>(null);

interface ThemeProviderProps {
	children: ReactNode;
	initialTheme?: ThemeMode;
}

export function ThemeProvider({
	children,
	initialTheme = "system",
}: ThemeProviderProps) {
	const [mode, setMode] = useState<ThemeMode>(initialTheme);
	const [systemPreference, setSystemPreference] =
		useState<ActualTheme>("light");

	useEffect(() => {
		if (Platform.OS === "web") {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const updateSystemPreference = (
				e: MediaQueryListEvent | MediaQueryList,
			) => {
				setSystemPreference(e.matches ? "dark" : "light");
			};

			updateSystemPreference(mediaQuery);

			mediaQuery.addEventListener("change", updateSystemPreference);

			return () => {
				mediaQuery.removeEventListener("change", updateSystemPreference);
			};
		}
	}, []);

	const resolvedTheme: ActualTheme = useMemo(() => {
		if (mode === "system") {
			return systemPreference;
		}
		return mode;
	}, [mode, systemPreference]);

	const theme: Theme = useMemo(() => {
		return resolvedTheme === "dark" ? darkTheme : lightTheme;
	}, [resolvedTheme]);

	const setTheme = useCallback((newMode: ThemeMode) => {
		setMode(newMode);
	}, []);

	const providerValue = useMemo(
		() => ({
			mode,
			setTheme,
		}),
		[mode, setTheme],
	);

	const themeValue = useMemo(
		() => ({
			theme,
			mode,
			setTheme,
		}),
		[theme, mode, setTheme],
	);

	return (
		<ThemeProviderContext.Provider value={providerValue}>
			<ThemeContext.Provider value={themeValue}>
				{children}
			</ThemeContext.Provider>
		</ThemeProviderContext.Provider>
	);
}

export function useTheme() {
	const themeContext = useContext(ThemeContext);

	if (!themeContext) {
		if (process.env.NODE_ENV === "development") {
			console.warn("useTheme: No ThemeProvider found. Using light theme.");
		}
		return {
			theme: lightTheme,
			mode: "light" as ThemeMode,
			setTheme: () => {},
		};
	}

	return themeContext;
}
