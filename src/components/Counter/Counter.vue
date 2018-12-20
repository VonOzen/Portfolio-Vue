<template>
  <div class="counter">
    <i :class="className"></i>
    <span>{{number}}</span>
  </div>
</template>

<script>
export default {
  props: ['icon', 'number'],
  data () {
    return {
      counter: 0
    }
  },
  computed: {
    className () {
      return 'fas fa-' + this.icon
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: hsl(30, 97%, 71%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px){
    height: 150px;
    width: 150px;
    margin: 1rem;
  }

  i {
    font-size: 8rem;
    color: hsl(246, 34%, 12%);
  }
}
</style>
