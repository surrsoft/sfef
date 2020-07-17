<template>
    <div>
        <h2>Cards ({{pagTotalCount}})</h2>
        <div>
            <button v-on:click="cardAddHandle">New card</button>
        </div>
        <div v-if="loading" class="loading">Загрузка ...</div>
        <div v-if="error" class="errorMsg">{{error}}</div>
        <CardList
                v-if="cards"
                v-bind:pCards="cards"
                v-bind:pPagPageElemsCount="pagPageElemsCount"
                v-bind:pPagPageCurr="pagPageCurr"
                v-bind:pPagTotalCount="pagTotalCount"
                v-on:card-remove="cardRemoveHandle"
                v-on:pag-page-change="pagPageChangeHandle"
        />
    </div>
</template>

<script>
  import CardList from '../components/CardList'
  import CardsApi from '../CardsApi'
  import c from '../consts';

  export default {
    name: 'App',
    data() {
      return {
        loading: false,
        error: null,
        cards: null,
        // cards on page
        pagPageElemsCount: c.other.cardsOnPage,
        pagPageCurr: 1,
        pagTotalCount: 0
      }
    },
    watch: {
      // при изменениях маршрута запрашиваем данные снова
      $route: 'onStart'
    },
    created() {
      this.onStart();
    },
    beforeCreate() {
      console.log(`!!-!!-!! @route -> beforeCreate() {200717152325}:${Date.now()}`); // del+
    },
    mounted() {
      console.log(`!!-!!-!! @route -> mounted() {200717151857}:${Date.now()}`); // del+
    },
    beforeMount() {
      console.log(`!!-!!-!! @route -> beforeMount() {200717152325}:${Date.now()}`); // del+
    },
    updated() {
      console.log(`!!-!!-!! @route -> updated() {200717151902}:${Date.now()}`); // del+
    },
    beforeUpdate() {
      console.log(`!!-!!-!! @route -> beforeUpdate() {200717152325}:${Date.now()}`); // del+
    },
    destroyed() {
      console.log(`!!-!!-!! @route -> destroyed() {200717151905}:${Date.now()}`); // del+
    },
    beforeDestroy() {
      console.log(`!!-!!-!! @route -> beforeDestroy() {200717152325}:${Date.now()}`); // del+
    },
    beforeRouteEnter(to, from, next) {
      // вызывается до подтверждения пути, соответствующего этому компоненту.
      // НЕ ИМЕЕТ доступа к контексту экземпляра компонента `this`,
      // так как к моменту вызова экземпляр ещё не создан!
      console.log(`!!-!!-!! @route -> beforeRouteEnter() {200717150809}:${Date.now()}`); // del+
      next();
    },
    beforeRouteUpdate(to, from, next) {
      // вызывается когда маршрут, что рендерит этот компонент изменился,
      // но этот компонент будет повторно использован в новом маршруте.
      // Например, для маршрута с динамическими параметрами `/foo/:id`, когда мы
      // перемещаемся между `/foo/1` и `/foo/2`, экземпляр того же компонента `Foo`
      // будет использован повторно, и этот хук будет вызван когда это случится.
      // Также имеется доступ в `this` к экземпляру компонента.
      console.log(`!!-!!-!! @route -> beforeRouteUpdate() {200717150814}:${Date.now()}`); // del+
      next();
    },
    beforeRouteLeave(to, from, next) {
      // вызывается перед переходом от пути, соответствующего текущему компоненту;
      // имеет доступ к контексту экземпляра компонента `this`.
      console.log(`!!-!!-!! @route -> beforeRouteLeave() {200717150825}:${Date.now()}`); // del+
      next();
    },
    methods: {
      onStart(){
        console.log(`!!-!!-!! -> onStart() {200717172531}:${Date.now()}`); // del+
        this.cards = this.cardsGet();
      },
      cardsGet() {
        this.cards = null
        this.error = null
        this.loading = true
        this.pagPageCurr = this.$route.params.pageNum || 1;
        console.log('!!-!!-!! this.pagPageCurr {200717144759}\n', this.pagPageCurr); // del+
        // ---
        CardsApi.cardsDiapGet(this.pagPageCurr, this.pagPageElemsCount)
          .then(r => {
            console.log('!!-!!-!! r {200714190030}\n', r); // del+
            this.loading = false
            if (!r.errorMessage) {
              this.cards = r.data;
              this.pagTotalCount = r.resultCode;
            } else {
              this.$toast.open({ ...c.other.toastOj, message: r.errorMessage, type: 'error' });
            }
          })
      },
      cardAddHandle() {
        console.log('add clicked')
        this.$router.push('/cardadd')
      },
      cardRemoveHandle(id) {
        console.log('!!-!!-!! id {200714101858}\n', id); // del+
        CardsApi.cardDelete(id)
          .then(r => {
            console.log('!!-!!-!! r {200714102341}\n', r); // del+
            if (!r.errorMessage) {
              this.$toast.open({ ...c.other.toastOj, message: 'deleted' });
              // ---
              this.cardsGet();
            } else {
              this.$toast.open({ ...c.other.toastOj, message: r.errorMessage, type: 'error' });
            }
          })
      },
      pagPageChangeHandle(pageNum) {
        console.log(`!!-!!-!! -> pagPageChangeHandle() {200714211058}:${Date.now()}`); // del+
        console.log('!!-!!-!! pageNum {200714211107}\n', pageNum); // del+
        // this.pagPageCurr = pageNum;
        // this.cardsGet();
        this.$router.push('/cards/' + pageNum)
      }
    },
    components: {
      CardList
    },

  }
</script>
