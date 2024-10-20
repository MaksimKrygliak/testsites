import FotoGalery from "./components/FotoGalery.js";
import styles from "./portraits.module.scss";

export default function Portraits_Page() {
  // const fetchData = async () => {
  //    const response = await fetch("http://localhost:5000/client/reviews");
  //    const data = await response.json()
  //    return data
  // }
  // console.log(fetchData());
  return (
    <>
      <section className={styles.section_fotoGalary}>
        <FotoGalery />
      </section>
    </>
  );
}
