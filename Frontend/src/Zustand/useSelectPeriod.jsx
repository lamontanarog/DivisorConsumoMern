// usePeriodoSeleccionado.js
import {create} from 'zustand';

const usePeriodoSeleccionado = create((set) => ({
  periodoSeleccionado: null,
  setPeriodoSeleccionado: (periodo) => set({ periodoSeleccionado: periodo }),
}));

export default usePeriodoSeleccionado;
