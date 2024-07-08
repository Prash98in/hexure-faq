import TypingEffect from "../components/TypingEffect";
const AboutPage = ({isOpen}) => {
    return (
        <>
            <h1 className='mb-4 text-2xl md:text-3xl font-bold '>About Hexure</h1>
            <blockquote className="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-10 mx-4 md:mx-10 max-w-md font-normal">
                We believe in a future where the industry enables consumers to buy wealth management and insurance products quickly, digitally and at their fingertips.
                <br/><br/>We deliver innovative solutions that power superior digital sales connectivity, processes and experiences. Our innovation comes from observing consumer and industry trends, listening to our clients&apos; needs and forward thinking.
                <br/><br/>Our solutions enable digital workflows that empower our clients to deliver customer-centric sales experiences, accelerate speed to market, improve in-good-order sales, and meet regulatory requirements. 
            </blockquote>

            <div className= {isOpen ? 
            "fixed bottom-0 left-72 right-0 h-10 bg-gray-800 text-white flex items-center justify-center" :
            "fixed bottom-0 left-20 right-0 h-10 bg-gray-800 text-white flex items-center justify-center" }>
                    <div ><TypingEffect></TypingEffect></div>
            </div>

            <div className="text-left ml-16 text-lg">Useful Links:</div>
            <div className="text-left px-16 ml-16 border-t-4 mt-2 grid grid-cols-4 gap-4">
                <a href="https://launcher.myapps.microsoft.com/api/signin/07be4a59-10f6-482e-8b16-4e564627577d?tenantId=95066d8f-8625-47d7-98db-f552be5aa263" target="_blank" rel="noopener noreferrer" className="styled-link">Culture Amp</a>
                <a href="https://insurancetech.sharepoint.com/sites/HexureHub" target="_blank" rel="noopener noreferrer" className="styled-link">Hexure Hub SharePoint</a>
                <a href="https://launcher.myapps.microsoft.com/api/signin/f078cc6f-c127-4def-b5b0-864c213e7c72?tenantId=95066d8f-8625-47d7-98db-f552be5aa263" target="_blank" rel="noopener noreferrer" className="styled-link">Hexure Discount Marketplace</a>
            </div>
            <div className="text-left px-16  ml-16 grid grid-cols-4 gap-4">
                <a href="https://launcher.myapps.microsoft.com/api/signin/806f428e-a0f4-4cdf-bffa-d4c634928952?tenantId=95066d8f-8625-47d7-98db-f552be5aa263" target="_blank" rel="noopener noreferrer" className="styled-link">Hexure Hive</a>
                <a href="https://launcher.myapps.microsoft.com/api/signin/a97a0f4c-6595-45b0-aad3-3d69aa1f992c?tenantId=95066d8f-8625-47d7-98db-f552be5aa263" target="_blank" rel="noopener noreferrer" className="styled-link">KnowBe4 Cyber Security Training</a>
                <a href="https://launcher.myapps.microsoft.com/api/signin/7f164eb2-ce00-46d6-ac18-949f95594489?tenantId=95066d8f-8625-47d7-98db-f552be5aa263" target="_blank" rel="noopener noreferrer" className="styled-link">LinkedIn Learning</a>
            </div>
            <div className="text-left  ml-16 px-16 grid grid-cols-4 gap-4">
                <a href="https://insurancetechnologies.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer" className="styled-link">Jira Helpdesk</a>
                <a href="https://launcher.myapps.microsoft.com/api/signin/d2663d61-5049-4995-b5d5-21b08b7fd02c?tenantId=95066d8f-8625-47d7-98db-f552be5aa263" target="_blank" rel="noopener noreferrer" className="styled-link">OpenAir</a>
            </div>
        </>
    );

};

export default AboutPage;