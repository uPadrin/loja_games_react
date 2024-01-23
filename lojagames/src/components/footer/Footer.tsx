import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {



    return (
        <>
            <div className="flex justify-center bg-gray-900 text-white bottom-0 static">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'> uPadrin | Copyright: </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/uPadrin/loja_games_react" target="_blank"><GithubLogo size={48} weight='bold' /></a>
                        <a href="https://www.linkedin.com/in/bryan-vieira/" target='_black'><LinkedinLogo size={48} weight='bold' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer