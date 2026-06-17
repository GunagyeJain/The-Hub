import { Link } from "react-router";
import ThemeSwitcher from "./ThemeSwitcher";

const Container = ({ children }) => {
  return (
    <div class="flex h-screen items-center justify-center">
      <div class="container h-[90vh] w-[90vw] rounded-2xl border-border bg-surface text-text shadow-xl">
        <div class="py-3 text-center text-4xl font-[900]">{children}</div>
      </div>
      <div className="fixed top-4 left-4 fill-text">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </Link>
      </div>
      <div className="fixed bottom-2 left-2">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Container;
