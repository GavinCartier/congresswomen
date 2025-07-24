import styles from './SponsorshipOpportunities.module.css'

import sponsorshipImage from '../../assets/sponsorshippage/sponsorshipopportunities.png'

function SponsorshipOpportunities() {
    return (
        <div className={styles.sponsorshipOpportunities}>
            <img src={sponsorshipImage} alt = "Sponsorship Opportunities" />
            <div className={styles.sponsorshipOpportunitiesOverlay}>
                <h1>Sponsorship Opportunities</h1>
                <p>
                    Meet your business and diversity & inclusion goals through sponsorship opportunities and experiences, while building your talent pipeline.
                </p>
                <div className={styles.sponsorshipOpportunitiesButtons}>
                    <button>
                        REQUEST CALL
                    </button>
                    <button>
                        DOWNLOAD SPONSORSHIP BROCHURE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SponsorshipOpportunities