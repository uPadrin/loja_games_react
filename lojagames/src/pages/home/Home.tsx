import React from "react";

function Home() {
    return (
        <>
            <div id="container"
                className="
                bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900
                flex 
                justify-center
                ">
                <div id="subcontainer"
                    className="container grid grid-cols-2 text-white"
                >
                    <div id="texto"
                        className="flex flex-col gap-4 items-center justify-center py-4"
                    >
                        <h2 className="text-5xl font-bold">Seja Bem-vindo! 💜</h2>
                        <p className="text-xl">Confira nossos produtos abaixo 👇</p>
                    </div>

                    <div id="imagem" className="flex place-items-center justify-center">
                        <img className="w-2/4"
                            src="https://ik.imagekit.io/padrin/Online%20games%20addiction-amico.png?updatedAt=1706027593016"
                            alt="Imagem da Página Home"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;