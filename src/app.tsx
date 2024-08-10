import { ArrowRight, X, ArrowUpRight } from "@phosphor-icons/react"
import { useState } from "react"


export function App() {


  const [isDialog, setIsDialog] = useState(false) 

      function loadDialog(){

        setIsDialog(true)
      }


      function closeDialog(){

        setIsDialog(false)

      }


return (

 <section className="flex flex-col gap-4 items-center justify-center">

      <h1 className="text-xl">Aprendendo a utiliza useState. Para abrir e fechar Dialog.</h1>

      <article className="bg-zinc-900 px-4 py-3 flex items-center shadow-shape rounded-xl gap-5">
        <h2>Clique no botão da direita para abrir o Dialog.</h2>
        <button onClick={loadDialog} className="px-4 py-2.5 bg-lime-400 rounded-md text-lime-950 font-medium flex gap-2.5 items-center ">Abrir
        <ArrowRight size={24} />
        </button>
      </article>


        {isDialog && (<section className="flex flex-col gap-5 bg-zinc-900 shadow-shape py-5 px-6 rounded-xl fixed ">
          <h1 className="text-xl font-semibold tracking-widest">Dialog</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Ullam nemo, quia cupiditate, atque eveniet. <br /> delectus cumque tempore accusamus earum odit eos at, <br /> magnam obcaecati ex?</p>
          <article className="flex w-full justify-between items-center">
                <p className="text-sm">Gostou? nos avalie em ***</p>
                <div className="flex items-center gap-2.5">

                <a href="https://github.com/Alvarenga7" className=" text-sm px-4 py-2.5 bg-lime-400 rounded-md text-lime-950 font-medium flex gap-2.5 items-center ">Avaliar
                <ArrowUpRight size={16} />
                </a>

                <button onClick={closeDialog} className=" text-sm px-4 py-2.5 bg-lime-400 rounded-md text-lime-950 font-medium flex gap-2.5 items-center ">Fechar
                <X size={16} />
                </button>
                </div>
          </article>
        </section>)}
 </section>
)


}