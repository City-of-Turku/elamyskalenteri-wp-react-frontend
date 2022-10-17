import topPicks from "./TopPicks/TopPicks";
import LocalPicks from "./LocalPicks/LocalPicks";
import Calendar from "./Calendar/Calendar";
import EventPick from "./EventPick/EventPick";

const LookUp = {
  "top_picks": topPicks,
  "event_pick": EventPick,
  "local_picks": LocalPicks,
  "calendar": Calendar
}

export default LookUp