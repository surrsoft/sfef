import CardsApi from "../CardsApi";
import c from "../consts";

export function cardRemove(thisRef, id) {
  console.log(`!!-!!-!! -> cardRemove() {200719190249}:${Date.now()}`); // del+
  console.log('!!-!!-!! id {200719190253}\n', id); // del+
  // ---
  return CardsApi.cardDelete(id)
    .then(r => {
      console.log('!!-!!-!! r {200714102341}\n', r); // del+
      if (!r.errorMessage) {
        thisRef.$toast.open({ ...c.other.toastOj, message: 'deleted' });
        // ---
        return true;
      } else {
        thisRef.$toast.open({ ...c.other.toastOj, message: r.errorMessage, type: 'error' });
        return false;
      }
    })
}

export function cardEditTo(thisRef, id) {
  console.log(`!!-!!-!! -> cardEditTo() {200719185907}:${Date.now()}`); // del+
  console.log('!!-!!-!! id {200719185912}\n', id); // del+
  thisRef.$router.push('/cardedit/' + id);
}
