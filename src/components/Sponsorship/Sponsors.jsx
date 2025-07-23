import styles from './Sponsors.module.css'

/* 
A display previous sponsors, given a list of sponsor images.
*/

const Sponsors = ({
    sponsors // List of images of the sponsors
}) => {
    return (
        <div className={styles.sponsors}>
            <h2>Sponsors</h2>
            <hr />
            <div className={styles.sponsorList}>
                {sponsors.map(sponsor => {
                    return <div className={styles.sponsorImage} key={sponsor.name}>
                        <img src={sponsor.logo}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Sponsors