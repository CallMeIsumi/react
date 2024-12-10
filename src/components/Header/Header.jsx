import Link from "../../utilities/Link/Link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-4 shadow-xl ">
      <h1 className="text-xl font-semibold ">Title</h1>
      <nav className="flex gap-2 *:text-xs *:font-semibold">
        <Link text={"Home"} Class={"hover:text-gray-500"} />
        <Link text={"About"} Class={"hover:text-gray-500"} />
        <Link text={"Contact"} Class={"hover:text-gray-500"} />
        <Link text={"Products"} Class={"hover:text-gray-500"} />
      </nav>
    </header>
  );
};

export default Header;
