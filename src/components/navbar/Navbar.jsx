import styles from "./navbar.module.css";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
