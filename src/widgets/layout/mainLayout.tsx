import { Navbar } from "../ui/navbar";
import { Footer } from "../ui/footer";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
