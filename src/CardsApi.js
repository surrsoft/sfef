import consts from './consts';
import path from 'path';

function Resp(data = null, errorMessage = null, resultCode = 0) {
  this.data = data;
  this.errorMessage = errorMessage;
  this.resultCode = resultCode;
}

function wrap(promise, errInfo) {
  return promise
    .then(response => {
      console.log('!!-!!-!! response {200713190420}\n', response); // del+
      if (response.ok) {
        // --- total count
        const totalCount = response.headers.get('X-Total-Count');
        console.log('!!-!!-!! totalCount {200714191535}\n', totalCount); // del+
        // ---
        return Promise.all([true, response.json(), response.statusText, totalCount])
      } else {
        return Promise.all([false, response.text(), response.statusText, 0])
      }
    })
    .then(rt => {
      console.log('!!-!!-!! rt {200713191421}\n', rt); // del+
      // --- success
      if (rt[0]) {
        return new Resp(rt[1], null, rt[3])
      }
      // --- not success
      let nb = rt[1] === '{}' ? null : rt[1];
      nb = nb || rt[2];
      if (nb && errInfo) {
        nb = nb + '; ' + errInfo;
      }
      return new Resp(null, nb);
    })
    .catch(err => {
      console.log('!!-!!-!! err {200713222546}\n', err); // del+
      return new Resp(null, err.toString())
    })
}

export default {
  // return Promise with JSON cards
  cardsAllGet() {
    return fetch(consts.api.cardsUrl)
      .then(r => {
        return r.json()
      })
  },

  cardsDiapGet(page, perPage) {
    console.log(`!!-!!-!! -> 010 cardsDiapGet() {200714211354}:${Date.now()}`); // del+
    console.log('!!-!!-!! 020 page {200714211405}\n', page); // del+
    console.log('!!-!!-!! 030 perPage {200714211412}\n', perPage); // del+
    // ---
    const url = `${consts.api.cardsUrl}?_page=${page}&_limit=${perPage}`;
    console.log('!!-!!-!! url {200714211909}\n', url); // del+
    return wrap(fetch(url));
  },

  // create new card
  cardCreate(card) {
    const r = fetch(consts.api.cardsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    })
    return wrap(r);
  },

  // return promise
  cardDelete(id) {
    const url = consts.api.cardsUrl + '/' + id;
    console.log('!!-!!-!! url {200714101027}\n', url); // del+
    const r = fetch(url, {
      method: 'DELETE'
    })
    return wrap(r, `id [${id}]`);
  }
}
