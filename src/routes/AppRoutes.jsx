import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import ClickCounter01 from "../pages/practice/ClickCounter01";
import Stopwatch02 from "../pages/practice/Stopwatch02";
import TodoList03 from "../pages/practice/TodoList03";
import AccordionFAQ04 from "../pages/practice/AccordionFAQ04";
import TabsComponent05 from "../pages/practice/TabsComponent05";
import StarRating06 from "../pages/practice/StarRating06";
import PasswordStrengthCharCounter07 from "../pages/practice/PasswordStrengthCharCounter07";
import PaletteGenerator08 from "../pages/practice/PaletteGenerator08";
import WeatherApp09 from "../pages/practice/WeatherApp09";
import QuoteJokeGenerator10 from "../pages/practice/QuoteJokeGenerator10";
import DebouncedSearch11 from "../pages/practice/DebouncedSearch11";
import ModalToastSystem12 from "../pages/practice/ModalToastSystem12";
import DarkModeGlobal13 from "../pages/practice/DarkModeGlobal13";
import MultiStepFormWizard14 from "../pages/practice/MultiStepFormWizard14";
import QuizApp15 from "../pages/practice/QuizApp15";
import CustomHooksLibrary16 from "../pages/practice/CustomHooksLibrary16";
import ImageGallery17 from "../pages/practice/ImageGallery17";
import ShoppingCartMiniShop18 from "../pages/practice/ShoppingCartMiniShop18";
import MovieDatabaseTMDB19 from "../pages/practice/MovieDatabaseTMDB19";
import SurveyApplicationBuilder20 from "../pages/practice/SurveyApplicationBuilder20";
import KanbanBoard21 from "../pages/practice/KanbanBoard21";
import ExpenseTracker22 from "../pages/practice/ExpenseTracker22";
import MarkdownEditor23 from "../pages/practice/MarkdownEditor23";
import PerformanceLab24 from "../pages/practice/PerformanceLab24";
import PomodoroPRO25 from "../pages/practice/PomodoroPRO25";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/practice/click-counter" element={<ClickCounter01 />} />
        <Route path="/practice/stopwatch" element={<Stopwatch02 />} />
        <Route path="/practice/todo-list" element={<TodoList03 />} />
        <Route path="/practice/accordion-faq" element={<AccordionFAQ04 />} />
        <Route path="/practice/tabs-component" element={<TabsComponent05 />} />
        <Route path="/practice/star-rating" element={<StarRating06 />} />
        <Route
          path="/practice/password-strength-char-counter"
          element={<PasswordStrengthCharCounter07 />}
        />
        <Route
          path="/practice/palette-generator"
          element={<PaletteGenerator08 />}
        />
        <Route path="/practice/weather-app" element={<WeatherApp09 />} />
        <Route
          path="/practice/quote-joke-generator"
          element={<QuoteJokeGenerator10 />}
        />
        <Route
          path="/practice/debounced-search"
          element={<DebouncedSearch11 />}
        />
        <Route
          path="/practice/modal-toast-system"
          element={<ModalToastSystem12 />}
        />
        <Route
          path="/practice/dark-mode-global"
          element={<DarkModeGlobal13 />}
        />
        <Route
          path="/practice/multi-step-form-wizard"
          element={<MultiStepFormWizard14 />}
        />
        <Route path="/practice/quiz-app" element={<QuizApp15 />} />
        <Route
          path="/practice/custom-hooks-library"
          element={<CustomHooksLibrary16 />}
        />
        <Route path="/practice/image-gallery" element={<ImageGallery17 />} />
        <Route
          path="/practice/shopping-cart-mini-shop"
          element={<ShoppingCartMiniShop18 />}
        />
        <Route
          path="/practice/movie-database-tmdb"
          element={<MovieDatabaseTMDB19 />}
        />
        <Route
          path="/practice/survey-application-builder"
          element={<SurveyApplicationBuilder20 />}
        />
        <Route path="/practice/kanban-board" element={<KanbanBoard21 />} />
        <Route
          path="/practice/expense-tracker"
          element={<ExpenseTracker22 />}
        />
        <Route
          path="/practice/markdown-editor"
          element={<MarkdownEditor23 />}
        />
        <Route
          path="/practice/performance-lab"
          element={<PerformanceLab24 />}
        />
        <Route path="/practice/pomodoro-pro" element={<PomodoroPRO25 />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
