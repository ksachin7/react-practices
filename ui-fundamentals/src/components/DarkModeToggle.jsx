import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'
import { useDarkMode } from '../context/DarkModeContext'
import ButtonIcon from './ButtonIcon';

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    // console.log(isDarkMode)
    return (
        <ButtonIcon onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon color='grey' />}
        </ButtonIcon>
    )
}

export default DarkModeToggle;