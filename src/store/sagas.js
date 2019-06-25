import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initList } from './actionCreators'
import axios from 'axios'

function* getInitList() {
    try {
        const res = yield axios.get('https://www.fastmock.site/mock/06c9d41c50b3aca91d14f8297dab6173/Test/test')
        const action = initList(res.data.data)
        yield put(action)
    } catch (e) {
        console.log('获取失败')
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;