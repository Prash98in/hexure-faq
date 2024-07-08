const tilesClass = 'py-2 shadow-lg shadow-black-900/40'

const AboutPage = () => {
    return (
        <>
            <h1 className='mb-4 text-2xl md:text-3xl text-coolGray-900 font-bold text-left'>How to use</h1>
            <div className={tilesClass}>
                <p className="font-semibold font-heading mb-1">Welcome to Foresight FAQs application</p>
                <br/>
                <p>This portal allows you to seamlessly search over 100s of Articles related to the technologies and advancements done in Foresight over the period. </p>
                <br/>
                <p>If you are looking to implement an Integration piece and looking for information to start with, this portal might be helpful for you. </p>
                <br/>
                <p>See below for the pages/components where you can navigate: </p>
                <br/>
                <p>1. <strong>Login</strong>: You need to first login to get into the portal. </p>
                <p>2. <strong>About us</strong>: Contains information about Hexure and Foresight. </p>
                <p>3. <strong>Article List</strong>: This is. the FAQ library. Clicking on it navigates to the GRID containing all available FAQs. </p>
                <p> It opens Article page when either of the available articles are clicked from the list. </p>
                <p>4. <strong>Save Articles</strong>: A new article can be saved from this page. </p>
                <br/>
                <p className="font-semibold font-heading mb-1">Following fields need to be entered: </p>
                <ol>
                    <li>
                        <strong>Article Name</strong>
                    </li>
                    <li>
                        <strong>Description </strong>
                    </li>
                    <li>
                        <strong>Article Content </strong>
                    </li>
                    <li>
                        <strong>Add Tags</strong>: TAGS can be added containing specific keywords to make search easier. </li>
                    <li>
                        <strong>Article URL</strong>: A direct link of any SharePoint/cloud link can be pasted to it and can easily be accessed from Articles page. </li>
                    <li>
                        <strong>Top Navigation</strong>: Top navigation has following components: </li>
                    <li>
                        <strong>Global Search</strong>: Articles can be seached globally and it can be accessed from any other page. </li>
                    <li className="ql-indent-1">
                        <strong>Logout</strong>: User can logout themselves.</li>
                    <li className="ql-indent-1"><strong>User info:</strong> Displays logged in user name.</li>
                </ol>
            </div>
    </>
    );

};

export default AboutPage;