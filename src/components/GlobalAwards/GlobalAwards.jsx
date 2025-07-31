import styles from './GlobalAwards.module.css'

const GlobalAwards = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Nomination Form</h2>
      <p className={styles.description}>
      Welcome to the nominee form instructions. Please note that nominees will be chosen based on the quality and experience of their work, rather than the number of times they have been nominated. In case of multiple nominations, the first application will be considered.
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfUoGErrb0mzYkx2_MzEsxP7Vf0vKEIOzlpRYHZ6ovW1jChrQ/viewform?embedded=true"
        width="100%"
        height="1727"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{ border: "none" }}
        title="Global Awards 2025 Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GlobalAwards;
