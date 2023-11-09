import request from '@/utils/request'
import type { ILoginInfo } from './types/common'

export const getLoginInfo = () => {
    return request<ILoginInfo>({
        url: '/admin/login/info',
        method: 'get'
    })
}