import React from 'react'
import { ButtonIcon, SpinnerMini } from '../../ui'
import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import { useLogout } from './useLogout'

function Logout() {
    const { logout, isLoading } = useLogout();
    return (
        <ButtonIcon disabled={isLoading} onClick={logout}>
            {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
        </ButtonIcon>
    )
}

export default Logout