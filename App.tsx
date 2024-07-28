import "./App.css";

interface NavBarItemProps {
  path: string;
  title: string;
}

function NavBarItem({ path, title }: NavBarItemProps) {
  return (
    <li>
      <a href={path}>{title}</a>
    </li>
  );
}

function App() {
  const navBarItems: NavBarItemProps[] = [
    {
      path: "/",
      title: "Showcase",
    },
    {
      path: "/",
      title: "Docs",
    },
    {
      path: "/",
      title: "Blog",
    },
    {
      path: "/",
      title: "Analytics",
    },
    {
      path: "/",
      title: "Template",
    },
    {
      path: "/",
      title: "Enterprise",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">AEON</a>
      </div>

      <ul className="navbar-links">
        {navBarItems.map((item) => (
          <NavBarItem path={item.path} title={item.title} />
        ))}
      </ul>

      <div className="navbar-search">
        <input type="text" placeholder="Search documentation..." />
      </div>
    </nav>
  );
}

export default App;
