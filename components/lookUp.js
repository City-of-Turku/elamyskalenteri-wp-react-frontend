import topPicks from "./TopPicks/TopPicks";
import LocalPicks from "./LocalPicks/LocalPicks";
import Calendar from "./Calendar/Calendar";
import EventPick from "./EventPick/EventPick";
import PageTitle from "./PageTitle/PageTitle";

const LookUp = {
  "top_picks": topPicks,
  "event_pick": EventPick,
  "local_picks": LocalPicks,
  "calendar": Calendar,
  "page_title": PageTitle
}

export default LookUp