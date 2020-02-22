import ajax from './ajax'

//获取主页面所有的信息
export const getIndexList = () => ajax ({
    url:'/indexList'
})

export const getCategoryList = () => ajax ({
    url:'/cateNavDatas'
})

export const getCateLists = () => ajax ({
    url:'/cateLists'
})