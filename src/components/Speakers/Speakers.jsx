import styles from './Speakers.module.css'

const Speakers = ({ speakers = [] }) => {
    return (
        <div className={styles.speakers}>
            <h2>Speakers</h2>
            <div className={styles.speakerList}>
                {speakers.map(speaker => (
                    <div className={styles.speakerListItem} key={speaker.name}>
                        <div className={styles.speakerImage}>
                            <img src={speaker.image} alt={speaker.name} />
                            <div className={styles.overlay}>{speaker.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Speakers
