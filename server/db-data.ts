export const TOPPINGS: any = {
    1: {
        id: 1,
        name: 'anchovy'
    },
    2: {
        id: 2,
        name: 'bacon'
    },
    3: {
        id: 3,
        name: 'basil'
    },
    4: {
        id: 4,
        name: 'chili'
    },
    5: {
        id: 5,
        name: 'mozzarella'
    },
    6: {
        id: 6,
        name: 'mushroom'
    },
    7: {
        id: 7,
        name: 'olive'
    },
    8: {
        id: 8,
        name: 'onion'
    },
    9: {
        id: 9,
        name: 'pepper'
    },
    10: {
        id: 10,
        name: 'pepperoni'
    },
    11: {
        id: 11,
        name: 'sweetcorn'
    },
    12: {
        id: 12,
        name: 'tomato'
    }
};

export const PIZZAS: any = {
    1: {
        id: 1,
        name: 'Blazin\' Inferno',
        toppings: [
            {
                id: 10,
                name: 'pepperoni'
            },
            {
                id: 9,
                name: 'pepper'
            },
            {
                id: 3,
                name: 'basil'
            },
            {
                id: 4,
                name: 'chili'
            },
            {
                id: 7,
                name: 'olive'
            },
            {
                id: 2,
                name: 'bacon'
            }
        ]
    },
    2: {
        id: 2,
        name: 'Seaside Surfin\'',
        toppings: [
            {
                id: 6,
                name: 'mushroom'
            },
            {
                id: 7,
                name: 'olive'
            },
            {
                id: 2,
                name: 'bacon'
            },
            {
                id: 3,
                name: 'basil'
            },
            {
                id: 1,
                name: 'anchovy'
            },
            {
                id: 8,
                name: 'onion'
            },
            {
                id: 11,
                name: 'sweetcorn'
            },
            {
                id: 9,
                name: 'pepper'
            },
            {
                id: 5,
                name: 'mozzarella'
            }
        ]
    },
    3: {
        id: 3,
        name: 'Plain Ol\' Pepperoni',
        toppings: [
            {
                id: 10,
                name: 'pepperoni'
            }
        ]
    }
};
