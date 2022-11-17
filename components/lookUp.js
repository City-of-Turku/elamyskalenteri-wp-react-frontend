import topPicks from "./TopPicks/TopPicks";
import LocalPicks from "./LocalPicks/LocalPicks";
import Calendar from "./Calendar/Calendar";
import EventPick from "./EventPick/EventPick";
import PageTitle from "./PageTitle/PageTitle";
import ContentPage from "./ContentPage/ContentPage";

const LookUp = {
  "top_picks": topPicks,
  "event_pick": EventPick,
  "local_picks": LocalPicks,
  "calendar": Calendar,
  "page_title": PageTitle,
  "content_page": ContentPage
}

export default LookUp