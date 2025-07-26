function AwardsPage({
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

export default AwardsPage