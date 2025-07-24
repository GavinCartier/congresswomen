import styles from './GetInvolved.module.css'

import thoughtLeadership from '../../assets/sponsorshippage/getinvolved2.jpg'
import extensiveNetworking from '../../assets/sponsorshippage/getinvolved1.jpg'
import brandingAndMarketing from '../../assets/sponsorshippage/getinvolved3.jpg'

function GetInvolved() {
    return (
        <div className={styles.getInvolved}>
            <div>
                <h2>Get Involved</h2>
                <hr />
            </div>
            <div className={styles.getInvolvedPanels}>
                <div className={styles.getInvolvedPanel}>
                    <img src={thoughtLeadership} />
                    <h3>Thought Leadership</h3>
                    <p>
                        Position your brand alongside industry pioneers and changemakers by contributing to conversations that shape the future of women’s leadership and innovation.
                    </p>
                </div>
                <div className={styles.getInvolvedPanel}>
                    <img src={extensiveNetworking} />
                    <h3>Extensive Networking</h3>
                    <p>
                        Connect with a diverse community of influential professionals, decision-makers, and emerging leaders in an environment designed to spark meaningful relationships and collaborations.
                    </p>
                </div>
                <div className={styles.getInvolvedPanel}>
                    <img src={brandingAndMarketing} />
                    <h3>Branding & Marketing</h3>
                    <p>
                        Elevate your brand’s visibility through targeted exposure across event platforms, materials, and programming—reinforcing your commitment to empowering women.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetInvolved