import { Routes, Route } from 'react-router-dom';
import ResetPassword from './components/views/ResetPassword';
import Home from './components/views/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from './components/views/AdminPanel';
import Adimin_Panel_Box_Outline from './components/partials/Partials/Adimin_Panel_Box_Outline';
import Admin_Panel_question_Page from './components/partials/Partials/Admin_Panel_question_Page';
import Admin_Dash_Board_Numberical_Question from './components/partials/Partials/Admin_Dash_Board_Numberical_Question';
import Answer_Submit_Show_Admin_Panel from './components/partials/Partials/Answer_Submit_Show_Admin_Panel';
import Admin_Panel_All_Question_She from './components/partials/Partials/Admin_Panel_All_Question_She';
import Admin_Panel_Question_Page_Data_Create_Team from './components/partials/Partials/Admin_Panel_Question_Page_Data_Create_Team';
import Team_List_Total from './components/partials/Partials/Team_List_Total';
import Total_Participant from './components/partials/Partials/Total_Participant';
import Error from './Error';
import AdminLogin from './components/views/AdminLogin';
import AdminResetPassword from './components/views/AdminResetPassword';
import EventListPage from './components/views/EventListPage';
import ClubListPage from './components/views/ClubListPage';
import AdminPanelClubAdd from './components/partials/Partials/AdminPanelClubAdd';
import ContactsPage from './components/views/ContactsPage';
import ParticipantProfile from './components/partials/ParticipantProfile';
import TestPageHome from './components/views/TestPageHome';
import CodingEventTermsAndConditions from './components/views/CodingEventTermsAndConditions';
import CodingIde from './components/views/CodingIde';
import GalleryEvent from './components/views/GalleryEvent';
import ClubMembers from './components/views/ClubMembers';
import ContestList from './components/views/ContestList';
import AdminPanelContestAdd from './components/partials/Partials/AdminPanelContestAdd';
import AdminPanelEventAdd from './components/partials/Partials/AdminPanelEventAdd';
import CodingEventParticipantRegistration from './components/views/CodingEventParticipantRegistration';
import HackathonEventRegistration from './components/views/HackathonEventRegistration';
import LogoEventRegistration from './components/views/LogoEventRegistration';
import BgmiEventRegistration from './components/views/BgmiEventRegistration';
import QuizEventParticipantRegistration from './components/views/QuizEventParticipantRegistration';
import Adimin_Panel_Team_Register from './components/partials/Partials/Adimin_Panel_Team_Register';
import Clubfacke from './Clubfacke';
import Adimin_Panel_Hackathon_Team_Register from './components/partials/Partials/Adimin_Panel_Hackathon_Team_Register';
import Admin_Panel_CodingRegister_Data from './components/partials/Partials/Admin_Panel_CodingRegister_Data';
import Admin_Panel_QuizRegister_Data from './components/partials/Partials/Admin_Panel_QuizRegister_Data';
import QuizIde from './components/views/QuizIde';
import TestPageQuizHome from './components/views/TestPageQuizHome';
import QuizLogin from './components/views/QuizLogin';
import AdminPanelQuizParticipantUserIdCreate from './components/partials/Partials/AdminPanelQuizParticipantUserIdCreate';
import AdminPanelCodingParticipantUserIdCreate from './components/partials/Partials/AdminPanelCodingParticipantUserIdCreate';
import QuizEventTermsAndConditions from './components/views/QuizEventTermsAndConditions';
import CodingLogin from './components/views/CodingLogin';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coding/participant/login' element={<CodingLogin />} />
        <Route path='/quiz/participant/login' element={<QuizLogin />} />
        <Route path='/admin/dashboard/login' element={<AdminLogin />} />
        <Route path='/participant/password/forget/' element={<ResetPassword />} />
        <Route path='/admin/password/forget/' element={<AdminResetPassword />} />
        <Route path='/technical/events/coding/contest/' element={<TestPageHome />} />
        <Route path='/technical/events/coding/contest/terms/conditions' element={<CodingEventTermsAndConditions />} />
        <Route path='/technical/events/coding/contest/test/start-page' element={<CodingIde />} />
        <Route path='/technical/events/quiz/contest/' element={<TestPageQuizHome />} />
        <Route path='/technical/events/quiz/contest/terms/conditions' element={<QuizEventTermsAndConditions />} />
        <Route path='/technical/events/quiz/contest/test/start-page' element={<QuizIde />} />
        <Route path='/government-engineering-college-siwan/total/events/list' element={<EventListPage />} />
        <Route path='/government-engineering-college-siwan/total/clubs/list' element={<ClubListPage />} />
        <Route path='/government-engineering-college-siwan/contest/lists' element={<ContestList />} />
        <Route path='/government-engineering-college-siwan/technical-club/total/member/list' element={<ClubMembers />} />
        <Route path='/government-engineering-college-siwan/event/gallery/' element={<GalleryEvent />} />
        <Route path='/government-engineering-college-siwan/technical-club/contacts' element={<ContactsPage />} />
        <Route path='/government-engineering-college-siwan/events/team-list/2024-25' element={<EventListPage />} />
        <Route path='/coding/event/registration/form' element={<CodingEventParticipantRegistration />} />
        <Route path='/hackathon/event/registration/form' element={<HackathonEventRegistration />} />
        <Route path='/logo-design/event/registration/form' element={<LogoEventRegistration />} />
        <Route path='/bgmi/event/registration/form' element={<BgmiEventRegistration />} />
        <Route path='/quiz/event/registration/form' element={<QuizEventParticipantRegistration />} />
        <Route path='/read/details/club' element={<Clubfacke />} />

        <Route path='/admin/dashboard' element={<AdminPanel />} >
          <Route path='/admin/dashboard/' element={<Adimin_Panel_Box_Outline />} />
          <Route path='/admin/dashboard/api/team-register/contest/participant/list' element={<Adimin_Panel_Team_Register />} />
          <Route path='/admin/dashboard/api/hackathon/team-register/contest/participant/list' element={<Adimin_Panel_Hackathon_Team_Register />} />
          <Route path='/admin/dashboard/api/coding/contest/participant/list' element={<Admin_Panel_CodingRegister_Data />} />
          <Route path='/admin/dashboard/api/quiz/contest/participant/list' element={<Admin_Panel_QuizRegister_Data />} />
          <Route path='/admin/dashboard/add/quiz/user-id/' element={<AdminPanelQuizParticipantUserIdCreate />} />
          <Route path='/admin/dashboard/add/coding/user-id/' element={<AdminPanelCodingParticipantUserIdCreate />} />
          <Route path='/admin/dashboard/add/mcq-question' element={<Admin_Panel_question_Page />} />
          <Route path='/admin/dashboard/api/team-create/contest' element={<Admin_Panel_Question_Page_Data_Create_Team />} />
          <Route path='/admin/dashboard/api/total-member/contest/participant/list' element={<Total_Participant />} />
          <Route path='/admin/dashboard/api/team-list/contest' element={<Team_List_Total />} />
          <Route path='/admin/dashboard/add/numerical-question' element={<Admin_Dash_Board_Numberical_Question />} />
          <Route path='/admin/dashboard/api/answer/numerical-question/mcq-question' element={<Answer_Submit_Show_Admin_Panel />} />
          <Route path='/admin/dashboard/api/team-list/contest' element={<Admin_Panel_question_Page />} />
          <Route path='/admin/dashboard/api/all-student/contest/participant' element={<Admin_Panel_All_Question_She />} />
          <Route path='/admin/dashboard/api/all-question-list/contest/mcq-question/numerical-question' element={<Admin_Panel_All_Question_She />} />
          <Route path='/admin/dashboard/api/club/add/' element={<AdminPanelClubAdd />} />
          <Route path='/admin/dashboard/api/contest/add/' element={<AdminPanelContestAdd />} />
          <Route path='/admin/dashboard/api/event/add' element={<AdminPanelEventAdd />} />
        </Route>
        <Route path='/participant/dashboard/profile/' element={<ParticipantProfile />} ></Route>
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
