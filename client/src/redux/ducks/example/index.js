// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_CLOTHES = "example/GET_CLOTHES"

// 3. initial state
const clothesState = {
  clothingData: []
}

// 4. reducer
export default (state = clothesState, action) => {
  switch (action.type) {
    case GET_CLOTHES:
      return { ...state, clothingData: action.payload }
    default:
      return state
  }
}

// 5. action creators
function clothing() {
  return dispatch => {
    axios.get('/api').then(resp => {
      dispatch({
        type: GET_CLOTHES,
        payload: resp.data
      })
    })
  }
}

// function someAsyncAction() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch({
//         type: EXAMPLE_ACTION,
//         payload: 'hello async from timer!'
//       })
//     }, 3000)
//   }
// }

// function getExampleData() {
//   return dispatch => {
//     axios.get('/api').then(resp => {
//       dispatch({
//         type: EXAMPLE_ACTION,
//         payload: resp.data
//       })
//     })
//   }
// }

// function resetAction() {
//   return {
//     type: RESET_ACTION
//   }
// }

// 6. custom hook
export function useClothes() {
  const dispatch = useDispatch()
  const clothes = useSelector(appState => appState.clothesState.clothingData)

  const getClothing = () => dispatch(clothing())
  // const asyncaction = () => dispatch(someAsyncAction())
  // const reset = () => dispatch(resetAction())
  // const getExample = () => dispatch(getExampleData())

  useEffect(() => {
    console.log("mounting component")
  }, [])

  return { clothes, getClothing }
}
