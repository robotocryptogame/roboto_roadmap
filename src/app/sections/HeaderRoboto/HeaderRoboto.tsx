import styles from "./HeaderRobot.module.scss";

const HeaderRoboto = () => {
  return (
    <section className={styles.ContainerHeader}>
      <h2 className={styles.LogoRoboto}>Roboto</h2>
      <nav className={styles.ItemNav}>
        <span>Home</span>
        <span>Roadmap</span>
      </nav>
      <h1 className={styles.TitleBigger}>ROADMAP</h1>
    </section>
  );
};

export default HeaderRoboto;
