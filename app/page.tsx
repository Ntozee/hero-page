import styles from "./page.module.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "900"],
});

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={poppins.className}>
        <Navbar />
        <Hero />
      </main>
    </div>
  );
}
