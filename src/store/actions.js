import {SAVE_INDEXLISTS , SAVE_CATEGORYLISTS} from './mutations_types'
//引入发请求
import {getIndexList , getCategoryList} from '../api'

export default {
    async getIndexLists({commit}){
        let result = await getIndexList()
        commit(SAVE_INDEXLISTS,result)
    },
    async getCategoryList({commit}){
        let result = await getCategoryList()
        commit(SAVE_CATEGORYLISTS,result)
    }
}