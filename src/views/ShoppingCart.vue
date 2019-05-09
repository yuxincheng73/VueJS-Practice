<template>
  <div class="shoppingCart">
    <h1>Shopping Cart</h1>
    <div class="product">
      <table class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in cartList" v-bind:key="i">
            <td>{{item.product}}</td>
            <td>${{item.cost}}</td>
            <td><input type="number" v-model="item.quantity" v-on:keyup="calculateSubtotal(i)"></td>
            <td><button v-on:click="deleteItem(i)">Delete</button></td>
            <td>${{item.subtotal}}</td>
          </tr>
          <tr>
            <td><input type="text" v-model="newItem.product"></td>
            <td><input type="number" v-model="newItem.cost"></td>
            <td><input type="number" v-model="newItem.quantity"></td>
            <td><b-button :variant="'primary'" v-on:click="addItem">Create</b-button></td>
            <td><strong>Total Price: ${{ grandTotal }}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'shoppingCart',
  data: function data() {
    return {
      cartList: [
        {
          product: 'fish', cost: 20, quantity: 5, subtotal: 100,
        },
        {
          product: 'beef', cost: 20, quantity: 5, subtotal: 100,
        },
        {
          product: 'apple', cost: 20, quantity: 5, subtotal: 100,
        },
        {
          product: 'orange', cost: 20, quantity: 5, subtotal: 100,
        },
      ],
      newItem: {
        product: '',
        cost: null,
        quantity: null,
      },
      newItemTemplate: {
        product: '',
        cost: null,
        quantity: null,
        subtotal: 0,
      },
      grandTotal: 400,
    };
  },
  methods: {
    calculateGrandTotal: function calculateGrandTotal() {
      this.grandTotal = this.cartList.reduce((accumulator, value) => accumulator + value.subtotal, 0);
    },
    calculateSubtotal: function calculateSubtotal(index) {
      const item = this.cartList[index];
      item.subtotal = item.cost * item.quantity;
      this.calculateGrandTotal();
    },
    deleteItem: function deleteItem(index) {
      this.cartList.splice(index, 1);
      this.calculateGrandTotal();
    },
    addItem: function addItem() {
      this.cartList.push({
        product: this.newItem.product,
        cost: this.newItem.cost,
        quantity: this.newItem.quantity,
        subtotal: this.newItem.cost * this.newItem.quantity,
      });
      this.newItem = Object.assign({}, this.newItemTemplate);
      this.calculateGrandTotal();
    },
  },
};
</script>

<style scoped>
p {
  text-align: right;
  padding-right: 30px;
  font-weight: bold;
}

table {
  width: 80%;
}

h1 {
  text-align: left;
  padding-left: 30px;
}
</style>
