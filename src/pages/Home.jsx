import ThemeSwitcher from "../components/ThemeSwitcher";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-bg p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ProjectCard
          title="Click Counter"
          topics={["useState", "events"]}
          complete={false}
          to="/practice/click-counter"
        />
      </div>

      <div className="fixed bottom-4 left-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Home;
