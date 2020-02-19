import {SAVE_INDEXLISTS} from './mutations_types'
//引入发请求
import {getIndexList} from '../api'

export default {
    async getIndexLists({commit}){
        let result = await getIndexList()
        commit(SAVE_INDEXLISTS,result)
    }
}