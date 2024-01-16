import React from 'react'
import MainHeader from '../partials/MainHeader'
import MainFooter from '../partials/MainFooter'
import codingContestLogo from '../images/conding.webp';
import bgmiContestLogo from '../images/WhatsApp Image 2024-01-14 at 01.03.20_002c41bf.jpg';
import logodesignContestLogo from '../images/Floral Atelier Logo Business design .png';
import quizContestLogo from '../images/Blue White Modern Quiz World Wide Web Instagram Post.png';
import hackathonContestLogo from '../images/dark blue geometric live game twitter post.png';
import BoxClubAll from '../partials/Partials/BoxClubAll';
import logodesignrulebook from '../images/LogoDesignRuleBook.pdf'
import codingrulebook from '../images/Coding_Competition_Rule _Book.pdf'
import bgmirulebook from '../images/bgmi_rule_book.pdf'
import quizrulebook from '../images/Technical_Quiz_Competition_Rule_Book.pdf'
import hackathonrulebook from '../images/Hackathon_Rules.pdf'

function EventListPage() {
    return (
        <>
            <MainHeader />
            <div className=' w-[100%] h-[100%] overflow-auto bg-[#0f1627]'>
                <div className='w-[100%] h-[auto] bg-[#14050507] p-[5px]'>
                    <div className='w-[100%]  h-[160px] mt-4 space-y-4 mb-8'>
                        <h1 className=' text-[35px]  text-center font-[600] text-[#ffffffe4] max-[1024px]:text-[30px] max-[800px]:text-[25px] max-[480px]:text-[15px]'>Check our <span className='text-[#fd0]'>Events</span></h1>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>

                            <p className=' text-[14px]  text-center font-[500] text-[#ffffffe0] max-[1024px]:w-[400px]  max-[1024px]:text-[12px] max-[800px]:w-[350px] max-[480px]:text-[10px] max-[480px]:w-[90%]' >All events are chargeable to cover the expenses and enhance the quality of the fest.</p>
                        </div>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>
                            <p className=' text-[14px]  text-center font-[500] w-[700px] max-[1024px]:text-[12px] max-[1024px]:w-[510px] max-[800px]:w-[400px]  text-[#ffffffe0] pl-[10px] max-[480px]:w-[100%] max-[480px]:text-[10px] pr-[10px]' >As a token of your victory, each winner will be presented with an exclusive and beautifully crafted certificate, recognizing your outstanding achievement. 🏆✨</p>
                        </div>
                    </div>
                    <div className=' w-[100%] h-[85%] flex justify-center items-center p-[30px]'>
                        <div className='w-[100%]  h-[auto] max-[1400px]:w-[1100px] max-[1200px]:w-[720px] max-[800px]:w-[350px] max-[480px]:w-[100%]'>
                            <BoxClubAll rulebookpdf={codingrulebook} image_Url={codingContestLogo} eventname="coding" description=" A coder closing their eyes and visualizing their coding goals" />
                            <BoxClubAll rulebookpdf={bgmirulebook} image_Url={bgmiContestLogo} eventname="bgmi" description="Survive. Conquer. Win. Join the Battle" />
                            <BoxClubAll rulebookpdf={logodesignrulebook} image_Url={logodesignContestLogo} eventname="logo-design" description="Rhyme Rendezvous: Paint Emotions with Words" />
                            <BoxClubAll rulebookpdf={quizrulebook} image_Url={quizContestLogo} eventname="quiz" description="Test your skills with our advanced software engineering quiz" />
                            <BoxClubAll rulebookpdf={hackathonrulebook} image_Url={hackathonContestLogo} eventname="hackathon" description="A hackathon is more than just coding; it's a breeding ground for creativity" />
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}

export default EventListPage
