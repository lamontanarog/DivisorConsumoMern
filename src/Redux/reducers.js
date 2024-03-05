const initialState = {
    costoPorKwh: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CALCULAR_COSTO_POR_KWH': {
            const { consumoPeriodo, costoFactura } = action.payload;
            const nuevoCostoPorKwh = costoFactura / consumoPeriodo;

            return {
                ...state,
                costoPorKwh: nuevoCostoPorKwh
            };
        }
        default:
            return state;
    }
}

export default rootReducer;

// const counterReducer = (state,action) =>  {
    
//     const {type} = action
//     if (type === '@counter/incremented') {
//         return state + 1
//     }

//     state 
// }
// const actionIncremented = {
//     type: '@counter/incremented'
// }

// counterReducer(0, actionIncremented)