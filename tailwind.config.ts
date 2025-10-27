import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: "class", // ✅ controlled manually (won’t override app styling)
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config
