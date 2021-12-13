import axios from 'axios'

export const getPlacesData = async() => {
    try {
        const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary', {
        params: {
          bl_latitude: '11.847676',
          bl_longitude: '108.473209',
          tr_longitude: '109.149359',
          tr_latitude: '12.838442',
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '3b4c2a6edfmshbf62cbc666ace44p111ab9jsn9fbce1aa42be'
        }
    })

    return data;
    } catch (error) {
        console.log(error)
    }
}