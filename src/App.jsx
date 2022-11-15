import './App.css'
import {useReducer} from "react";
import {Input, Select, Table} from "antd";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Currency',
        dataIndex: 'currency',
        key: 'currency',
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    }
];
const data = [
    {
        "id": 1,
        "userId": 1,
        "name": "Bianca Hicks",
        "currency": 4.64,
        "city": "Ancarano"
    },
    {
        "id": 2,
        "userId": 2,
        "name": "Cecilia Cooley",
        "currency": 10.00,
        "city": "Omaha"
    },
    {
        "id": 3,
        "userId": 3,
        "name": "Giacomo Pate",
        "currency": 85.72,
        "city": "Istanbul"
    },
    {
        "id": 4,
        "userId": 4,
        "name": "Beau Lester",
        "currency": 56.63,
        "city": "Timaru"
    },
    {
        "id": 5,
        "userId": 5,
        "name": "Mariko Macias",
        "currency": 76.66,
        "city": "Makurdi"
    },
    {
        "id": 6,
        "userId": 6,
        "name": "Felicia Britt",
        "currency": 96.59,
        "city": "Tengah"
    },
    {
        "id": 7,
        "userId": 7,
        "name": "Octavius Ortega",
        "currency": 27.63,
        "city": "Kimberley"
    },
    {
        "id": 8,
        "userId": 8,
        "name": "Keane Mitchell",
        "currency": 92.52,
        "city": "Swan Hill"
    },
    {
        "id": 9,
        "userId": 9,
        "name": "Hasad Shields",
        "currency": 81.64,
        "city": "Villamassargia"
    },
    {
        "id": 10,
        "userId": 1,
        "name": "Raya Sloan",
        "currency": 12.41,
        "city": "Archennes"
    },
    {
        "id": 11,
        "userId": 2,
        "name": "April Armstrong",
        "currency": 37.41,
        "city": "Łódź"
    },
    {
        "id": 12,
        "userId": 3,
        "name": "Gage Randolph",
        "currency": 48.72,
        "city": "Oryol"
    },
    {
        "id": 13,
        "userId": 4,
        "name": "Zelda Knowles",
        "currency": 94.80,
        "city": "Wals-Siezenheim"
    },
    {
        "id": 14,
        "userId": 5,
        "name": "Nissim Reyes",
        "currency": 7.40,
        "city": "Mora"
    },
    {
        "id": 15,
        "userId": 6,
        "name": "Cassandra Phillips",
        "currency": 56.47,
        "city": "Montigny-le-Tilleul"
    },
    {
        "id": 16,
        "userId": 7,
        "name": "Colin Castaneda",
        "currency": 29.21,
        "city": "Kristiansand"
    },
    {
        "id": 17,
        "userId": 8,
        "name": "Gillian Mcclain",
        "currency": 49.11,
        "city": "Joinville"
    },
    {
        "id": 18,
        "userId": 9,
        "name": "Mary Cameron",
        "currency": 85.54,
        "city": "Semarang"
    },
    {
        "id": 19,
        "userId": 10,
        "name": "Elliott Mcgee",
        "currency": 69.04,
        "city": "Marawi"
    },
    {
        "id": 20,
        "userId": 1,
        "name": "Rebecca Charles",
        "currency": 94.76,
        "city": "Dipolog"
    }
]
const initialState = {
    data: data,
    users: [
        {
            "value": 1,
            "label": "Bianca Hicks"
        },
        {
            "value": 2,
            "label": "Cecilia Cooley"
        },
        {
            "value": 3,
            "label": "Giacomo Pate"
        },
        {
            "value": 4,
            "label": "Beau Lester"
        },
        {
            "value": 5,
            "label": "Mariko Macias"
        },
        {
            "value": 6,
            "label": "Felicia Britt"
        },
        {
            "value": 7,
            "label": "Octavius Ortega"
        },
        {
            "value": 8,
            "label": "Keane Mitchell"
        },
        {
            "value": 9,
            "label": "Hasad Shields"
        },
        {
            "value": 10,
            "label": "Raya Sloan"
        }
    ],
    filteredData: data,
    filter: {}
};

function reducer(state, action) {
    switch (action.type) {
        case 'name':
            if (action.payload) {
                const filter = {
                    ...state.filter,
                    userId: action.payload
                }
                let filterForName = state.data.filter(item => item.userId == filter.userId)
                return {...state, filter, filteredData: filterForName}
            }
            return {...state, filteredData: data}
        case 'city':
            if (action.payload) {
                const filter = {
                    ...state.filter,
                    city: action.payload
                }
                let filterForCity = state.data.filter(item => item.city.toLowerCase().includes(action.payload.trim().toLowerCase()))
                return {...state, filter, filteredData: filterForCity}
            }
            return {...state, filteredData: data}
        case 'priceStart':
            if (action.payload) {
                const filter = {
                    ...state.filter,
                    currency: action.payload
                }
                let filterForMinPrice = state.data.filter(item => item.currency >= Number(action.payload))
                return {...state, filter, filteredData: filterForMinPrice}
            }
            return {...state, filteredData: data}
        case 'priceEnd':
            if (action.payload) {
                const filter = {
                    ...state.filter,
                    currency: action.payload
                }
                let filterForMaxPrice = state.data.filter(item => item.currency <= Number(action.payload))
                return {...state, filter, filteredData: filterForMaxPrice}
            }
            return {...state, filteredData: data}
        default:
            return state
    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChangeInput = (e, field) => {
        dispatch({type: field, payload: e.target.value})
    }

    const onChangeSelect = (value) => {
        dispatch({type: 'name', payload: value})
    }

    return (
        <div>
            <form>
                <Select
                    id="name"
                    allowClear={true}
                    placeholder="Adı daxil edin"
                    onChange={onChangeSelect}
                    options={state.users}
                />
                <Input onChange={(e) => onChangeInput(e, 'priceStart')} type='number' name='priceStart' id='priceStart'
                       placeholder="Minumum qiymət daxil edin"/>
                <Input onChange={(e) => onChangeInput(e, 'priceEnd')} type='number' name='priceEnd' id='priceEnd'
                       placeholder="Maksimum qiymət daxil edin"/>
                <Input onChange={(e) => onChangeInput(e, 'city')} type='text' name='city' id='city'
                       placeholder="Şəhəri daxil edin"/>
            </form>
            <Table rowKey='id' columns={columns} dataSource={state.filteredData} pagination={false}/>
        </div>
    )
}

export default App
