import styles from './Speakers.module.css'

const Speakers = ({
    speakers=[]
}) => {
        
    return (
        <div className={styles.speakers}>
            <h2>Speakers</h2>
            <hr />
            <div className={styles.speakerList}>
                {speakers.map(speaker => {
                    return <div className={styles.speakerListItem} key={speaker.name}>
                        <div className={styles.speakerImage}><img src={speaker.image}/></div>
                        
                        <div style={{textAlign: 'center'}}>{speaker.name}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Speakers