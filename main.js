const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                data:'2006-9',
                price:85.00,
                count: 1
            },
            {
                id:2,
                name:'《编程艺术》',
                data:'2006-2',
                price:59.00,
                count: 1
            },
            {
                id:3,
                name:'《JAVA》',
                data:'2008-3',
                price:55.00,
                count: 1
            },
            {
                id:4,
                name:'《代码大全》',
                data:'2009-9',
                price:45.00,
                count: 1
            }
        ]
    },
    methods :{
        increment(index) {
            this.books[index].count++
     },
        decrement(index) {
            this.books[index].count--
     },
        removeHandle(index){
            this.books.splice(index,1)
        }
     },
    computed:{
      totalPrice(){
          let totalPrice=0
          for(let i=0;i<this.books.length;i++){
              totalPrice +=this.books[i].price * this.books[i].count
          }
          return totalPrice
      }
    },
    // 过滤器
    filters:{
        showPrice(price){
            return '￥'+ price.toFixed(2)
        },
    }

})