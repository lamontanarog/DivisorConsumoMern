import {create} from 'zustand'

const useCalcularStore = create((set) => ({

    costoKwh: 0,
    costoMensual: 0,
    costoxKwh: 0,
    
    setCostoKwh : (costo) => set({costoKwh:costo}),
    setCostoMensual : (costo) => set({costoMensual:costo}),

    calcularCostoxKwh: () => {
        const {costoMensual, costoKwh} = useCalcularStore.getState();
        const costoxKwh = costoMensual / costoKwh;
        set({ costoxKwh : costoxKwh});
    },
    }));

    export default useCalcularStore;