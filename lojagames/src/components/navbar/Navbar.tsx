import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import React from "react";


function NavBar() {

    const navigate = useNavigate();

    return (
        <>
            <div className='w-full bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white flex justify-center py-2 border-b-4 border-purple-800 border'>
                <div className="container flex justify-between text-lg">
                    <div className="flex flex-row gap-2 justify-center items-center ">
                        <Link to="/home" className='text-2xl font-bold '><img src="https://ik.imagekit.io/padrin/controller.png?updatedAt=1706034230453" alt=" " width={45} /> </Link>
                        <Link to="/home" className='text-2xl font-bold '><p className="font-bold text-3xl">Purple Games </p></Link>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <Link to="/categorias" className='font-semibold'>Categoria</Link>
                        <Link to="/cadastroCategoria" className='font-semibold'>Cadastrar categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar