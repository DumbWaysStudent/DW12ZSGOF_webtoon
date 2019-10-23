import * as types from './../types'
import axios from 'axios'

export const handleGetWebtoons = () => ({
    type: types.GET_WEBTOONS,
    payload: axios.get('https://webtoon-api.herokuapp.com/api/v1/webtoons')
}
);

export const handleGetDetailWebtoon = () => ({
    type: types.GET_DETAIL_WEBTOON,
    payload: axios.get('https://webtoon-api.herokuapp.com/api/v1/webtoons')
}
);
