import create from "zustand";

const useCartStore = create((set, get) => ({
  // Item is an object with id, name, price, quantity, image
  cart: [],
  cartIsOpen: false,

  // Add item to cart (id, name, price, quantity, image) or increase quantity if item already exists
  addToCart: (item, quantity) => {
    const cart = get().cart;
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      set((state) => ({
        cart: [...state.cart, { ...item, quantity: quantity }],
      }));
    } else {
      set((state) => ({
        cart: [
          ...state.cart.slice(0, itemIndex),
          {
            ...state.cart[itemIndex],
            quantity: state.cart[itemIndex].quantity + quantity,
          },
          ...state.cart.slice(itemIndex + 1),
        ],
      }));
    }
  },

  getCartIsOpen: () => get().cartIsOpen,

  closeCart: () => set({ cartIsOpen: false }),

  removeItem: (id) => {
    const cart = get().cart;
    const newCart = cart.filter((item) => item.id !== id);
    set({ cart: newCart });
  },

  getTotalItems: () => {
    const cart = get().cart;
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  addQuantity: (id, amount) => {
    const cart = get().cart;
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + amount };
      }
      return item;
    });
    set({ cart: newCart });
  },

  removeFromCart: (item) =>
    set((state) => ({ cart: state.cart.filter((i) => i.id !== item.id) })),
  isItemInCart: (id) => get().cart.some((item) => item.id === id),
  clearCart: () => set(() => ({ cart: [] })),
  toggleCart: () => set((state) => ({ cartIsOpen: !state.cartIsOpen })),
  openCart: () => set(() => ({ cartIsOpen: true })),
}));

export default useCartStore;
