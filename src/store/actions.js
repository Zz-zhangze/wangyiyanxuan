import {SAVE_INDEXLISTS , SAVE_CATEGORYLISTS ,SAVE_CATELISTS} from './mutations_types'
//引入发请求
import {getIndexList , getCategoryList,getCateLists} from '../api'

export default {
    async getIndexLists({commit}){
        let result = await getIndexList()
        commit(SAVE_INDEXLISTS,result)
    },
    async getCategoryList({commit}){
        let result = await getCategoryList()
        commit(SAVE_CATEGORYLISTS,result)
    },
    async getCateLists({commit}){
        let result = await getCateLists()
        commit(SAVE_CATELISTS,result)
    }
}