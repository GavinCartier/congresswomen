import styles from './InfoPanel.module.css'
import { useState, useRef } from 'react'

import infoPanelImage from '../../assets/sponsorshippage/infopanel.jpg'

// 
const content = [
    {
        title: "Exclusive Business Lounge",
        text: "Enjoy a curated environment designed to foster meaningful networking, collaboration, and innovation. From intimate networking sessions to personalized meetings with key stakeholders, the Business Lounge offers a unique opportunity to engage with like-minded professionals and forge strategic partnerships."
    },
    {
        title: "Speaking Opportunities",
        text: "If you’re driven to help shape a future where technology empowers creative individuals to build a brighter tomorrow, we want to hear from you. The deadline to apply for the 2025 Call for Speakers has now passed. Stay tuned for the VDS 2026 edition."
    },
    {
        title: "Sponsorship Opportunities",
        text: "Sponsoring VDS means increasing your visibility and network, making solid connections and growing your business by meeting new partners, clients and hundreds of potential prospects. Discover the sponsorship opportunities for corporates and get ready for VDS2025!"
    },
    {
        title: "The Challenge",
        text: "Become one of the challengers in The Challenge! The competition organised within the framework of VDS promotes an innovative culture within the university environment by enabling participants to develop their skills through 12-hour hackathon challenges."
    }
]

function InfoPanel() {
    const [openPanel, setOpenPanel] = useState(-1)

    const toggleOpenPanel = (index) => {
        if (openPanel === index) {
            setOpenPanel(-1)
        } else {
            setOpenPanel(index)
        }
    }

    return (
        <div className={styles.infoPanelContainer}>
            <div className={styles.infoPanel}>
            <div className={styles.infoPanelLeft}>
                <img src={infoPanelImage} />
                <h2>VDS for Corporates</h2>
                <p>We are architects of a tech-powered future, forging a global hub where innovation thrives through collaboration.</p>
            </div>
            <div className={styles.infoPanelContent}>
                {content.map((section, index) => (
                    <InfoItem section={section} isOpen={openPanel === index} onToggle={() => toggleOpenPanel(index)} key={index}/>
                ))}
            </div>
        </div>
        
            
        </div>
    )
}

const InfoItem = ({
    section,
    isOpen,
    onToggle
}) => {
    const contentRef = useRef(null)

    return (
        <div>
            <button
                onClick={onToggle}
            >
                <span>{section.title}</span>
                <span
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                        ▶
                </span>
            </button>
            <div 
                    ref={contentRef}
                    className={styles.infoPanelCollapsedContent}
                    style={{
                        maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                        overflow: 'hidden',
                    }}
                    >
                        <div className={styles.infoPanelCollapsedText}>{section.text}</div>
                </div>
        </div>
    )
}


export default InfoPanel