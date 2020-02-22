import {SAVE_INDEXLISTS ,SAVE_CATEGORYLISTS ,SAVE_CATELISTS} from './mutations_types'


export default {
    [SAVE_INDEXLISTS](state,data){
        state.IndexList = data
    },
    [SAVE_CATEGORYLISTS](state,data){
        state.CategoryLists = data
    },
    [SAVE_CATELISTS](state,data){
        state.CateLists = data
    }
}