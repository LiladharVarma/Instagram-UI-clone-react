import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./AuthPage/AuthPage";
import HomePage from "./HomePage/HomePage";
import PageLayout from "./Layout/PageLayout/PageLayout";
import SearchPage from "./SearchPage/SearchPage";
import ExplorePage from "./ExplorePage/ExplorePage";
import MessagePage from "./MessagePage/MessagePage";
// import CreatePageModal from "./CreatePage/CreatePageModal"
import CreatePage from "./CreatePage/CreatePage";
import ProfilePage from "./ProfilePage/ProfilePage";
import NotificationsPage from "./NotificationsPage/NotifiacationsPage";

function App() {
 
 const [clicked, setClicked] = useState(false);

 
 const getData = (state) => {
   setClicked(state);
 };


  return (
    <Routes>
      <Route path="/" element={<PageLayout getNavState={getData} />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="explore" element={<ExplorePage state={clicked} />} />
        <Route path="message" element={<MessagePage state = {clicked} />} />
        <Route path="create" element={<CreatePage state ={clicked} />} />
        <Route path="notification" element={<NotificationsPage />} />
        <Route path="/:userName" element={<ProfilePage />} /></Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
