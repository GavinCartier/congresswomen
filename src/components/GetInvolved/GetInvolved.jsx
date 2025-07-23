import styles from './GetInvolved.module.css'

function GetInvolved() {
    return (
        <div className={styles.getInvolved}>
            <h2>Get Involved</h2>
            <hr />
            <div className={styles.getInvolvedPanels}>
                <div className={styles.getInvolvedPanel}></div>
                <div className={styles.getInvolvedPanel}></div>
                <div className={styles.getInvolvedPanel}></div>
            </div>
        </div>
    )
}

export default GetInvolved