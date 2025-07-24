import SponsorshipOpportunities from "../components/SponsorshipOpportunities/SponsorshipOpportunities";
import MeetYourGoals from "../components/MeetYourGoals/MeetYourGoals";
import GetInvolved from "../components/GetInvolved/GetInvolved";
import Sponsors from "../components/Sponsorship/Sponsors";

function SponsorshipPage({
    sponsors
}) {
    return (
        <div>
            <SponsorshipOpportunities />
            <MeetYourGoals />
            <GetInvolved />
            <Sponsors sponsors={sponsors}/>
        </div>
    )
}

export default SponsorshipPage