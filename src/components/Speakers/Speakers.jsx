import styles from './Speakers.module.css'

const Speakers = ({
    speakers=[] // Speakers should contain: Image, name, title, company for each speaker
}) => {
    return (
        <div className={styles.speakers}>
            <h2>Speakers</h2>
            <hr />
            <div className={styles.speakersList}>
                {speakers.map(speaker => {
                    return <div className={styles.speakerImage} key={speaker.name}>
                        <img src={speaker.image}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Speakers