import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  product: {
    type: Object, 
  },
  quantity: {
    type: Number,
    default: 1
  }
});

const cartSchema = new mongoose.Schema({
  productos: [cartItemSchema]
});

export default mongoose.model('Cart', cartSchema);

