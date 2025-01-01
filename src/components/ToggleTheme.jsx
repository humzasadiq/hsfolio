import { CgDarkMode } from "react-icons/cg";

function ToggleTheme({ switchTheme }) {
    return (
        <div className="block relative">
            <div className="hs-tooltip [--placement:bottom] inline-block">
                <button onClick={switchTheme} className="hs-tooltip-toggle text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300" aria-label="Dark Mode Button">
                    <CgDarkMode />
                </button>
            </div>
        </div>
    );
}

export default ToggleTheme;