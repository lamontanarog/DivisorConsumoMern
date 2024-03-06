// export const actualizarCostoPorKwh = costoPorKwh => ({
//     type: 'ACTUALIZAR_COSTO_POR_KWH',
//     payload: costoPorKwh
// })


export const calcularCostoPorKwh = (consumoPeriodo, costoFactura) => ({
    type: 'CALCULAR_COSTO_POR_KWH',
    payload: {
        consumoPeriodo,
        costoFactura
    }
});