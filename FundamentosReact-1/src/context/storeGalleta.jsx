import { create } from "zustand";

const storeGalleta = create((set) => ({
    // Estado inicial (producto electrónico)
    detalle: {
        nombre: "iPhone 15",
        tipo: "Smartphone",
    },

    // Acción para actualizar el detalle del producto
    setDetalle: (newProducto) => set({ detalle: newProducto }),
}));

export default storeGalleta;