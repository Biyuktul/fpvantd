import '../styles/Report.css';
import { TfiAnnouncement } from 'react-icons/tfi';
import ReportRow from './ReportRow';
import { LoremIpsum } from 'react-lorem-ipsum';

function Report() {
    return (
        <div className="report-container">
            <div className='title-box'>
                <ReportRow font={30} color="red">
                    <h1>Latest Anouncement <TfiAnnouncement size={20} style={{ fill:'#DF2E38'}}/> </h1>
                    <p>View All</p>
                </ReportRow>
            </div>
            
            <ReportRow font={20}>
                <p className='the-report'>
                    <LoremIpsum 
                        p={1} 
                        avgSentencesPerParagraph={2} 
                        avgWordsPerSentence={1} />
                </p> 
                <p>12/23/34</p>
            </ReportRow>
            
            <ReportRow font={20}><p className='the-report'>
            <LoremIpsum 
                        p={1} 
                        avgSentencesPerParagraph={2} 
                        avgWordsPerSentence={1} />
            </p> <p>12/23/34</p></ReportRow>
            <ReportRow font={20}><p className='the-report'>
            <LoremIpsum 
                        p={1} 
                        avgSentencesPerParagraph={2} 
                        avgWordsPerSentence={1} />
            </p> <p>12/23/34</p></ReportRow>
            <ReportRow font={20}><p className='the-report'>
            <LoremIpsum 
                        p={1} 
                        avgSentencesPerParagraph={2} 
                        avgWordsPerSentence={1} />
            </p> <p>12/23/34</p></ReportRow>
            <ReportRow font={20}><p className='the-report'>
            <LoremIpsum 
                        p={1} 
                        avgSentencesPerParagraph={2} 
                        avgWordsPerSentence={1} />
            </p> <p>12/23/34</p></ReportRow>
        </div>
        
    );
}

export default Report;