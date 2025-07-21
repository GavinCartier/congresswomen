import styles from './PreviousSponsors.module.css'

/* 
A display previous sponsors, given a list of sponsor images.
*/

const PreviousSponsors = ({
    sponsors=[] // List of images of the sponsors
}) => {
    return (
        <div className={styles.previousSponsors}>
            <h2>Previous Sponsors</h2>
            <div className={styles.sponsorList}>
                {sponsors.map(sponsor => {
                    return <div className={styles.sponsorImage} key={sponsor}>
                        <img src={sponsor}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default PreviousSponsors