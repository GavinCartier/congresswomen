import styles from './MeetYourGoals.module.css'

import meetYourGoalsImage from '../../assets/sponsorshippage/meetyourgoals.png'

// Section for displaying the "Meet your goals" part of the website
// Contains text section on left with image on right
function MeetYourGoals() {
    return (
        <div className={styles.meetYourGoals}>
            <div className={styles.meetYourGoalsText}>
                <h2>Meet Your Recruitment & Business Goals</h2>
                <hr />
                <p>
                    European Women in Technology is the perfect place for you to get your organisation seen and heard by over 4,000 tech pioneers and industry titans.
                </p>
                <p>
                    Whether you want to position your senior leaders as thought-leaders, tap into an unparalleled pool of talent, or create partnerships with industry influencers, this is the perfect platform to do it.
                </p>
            </div>
            <div className={styles.meetYourGoalsImage}>
                <img src={meetYourGoalsImage}/>
            </div>
            
        </div>
    )
}

export default MeetYourGoals