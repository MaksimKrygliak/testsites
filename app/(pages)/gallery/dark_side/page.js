import FotoGalery from "./components/FotoGalery.js";
import styles from "./dark_side.module.scss";

export default function Dark_side_Page() {
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
