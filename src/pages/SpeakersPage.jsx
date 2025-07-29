import Speakers from "../components/Speakers/Speakers.jsx"

function SpeakersPage({
    speakers
}) {
    return (
        <div>
            <Speakers speakers={speakers}/>
            
        </div>
    );
}

export default SpeakersPage;

