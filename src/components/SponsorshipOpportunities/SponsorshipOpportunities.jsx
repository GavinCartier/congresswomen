import styles from './SponsorshipOpportunities.module.css'

import sponsorshipImage from '../../assets/sponsorshippage/sponsorshipopportunities.png'

const  SponsorshipOpportunities = ({
    header='Sponsorship Opportunities',
    text='Meet your business and diversity & inclusion goals through sponsorship opportunities and experiences, while building your talent pipeline.',
    button1='REQUEST CALL',
    button2='DOWNLOAD SPONSORSHIP BROCHURE'
}) => {
    return (
        <div className={styles.sponsorshipOpportunities}>
            <img src={sponsorshipImage} alt = "Sponsorship Opportunities" />
            <div className={styles.sponsorshipOpportunitiesOverlay}>
                <h1>{header}</h1>
                <p>
                    {text}
                </p>
                <div className={styles.sponsorshipOpportunitiesButtons}>
                    <button>
                        {button1}
                    </button>
                    <button>
                        {button2}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SponsorshipOpportunities