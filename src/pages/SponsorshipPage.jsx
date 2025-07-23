import SponsorshipOpportunities from "../components/SponsorshipOpportunities/SponsorshipOpportunities";
import MeetYourGoals from "../components/MeetYourGoals/MeetYourGoals";
import Sponsors from "../components/Sponsorship/Sponsors";

function SponsorshipPage({
    sponsors
}) {
    return (
        <div>
            <SponsorshipOpportunities />
            <MeetYourGoals />
            <Sponsors sponsors={sponsors}/>
        </div>
    )
}

export default SponsorshipPage