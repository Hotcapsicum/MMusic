
// import axios from 'axios'
import request from '../../utils/request'

export default function getBanner () {
    return (dispatch) => request({url: 'cms_list_tag?nid=23831003&type=2006&pageNo=0&pageSize=10'}).then(resp => {
        dispatch({
            type: 'RECEIVE_HOME_BANNER',
            postInfo: resp,
        })
        return resp
    })
}
