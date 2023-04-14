import polygon_despesaG_icon from '../assets/polygon_despesa_G.svg'
import polygon_despesaR_icon from '../assets/polygon_despesa_R.svg'

export function Dashboard() {
    return (
        <>
            <div className="flex justify-between py-4 border-b-2">
                <p className="font-quicksand font-bold pl-7 text-2xl">Dashboard</p>
                <div className="flex mr-7 items-center">
                <select className="border rounded font-nunito h-8 font-bold " name="" id="" >
                                <option className="text-purple-light text-xs" value="">Ultimos 30 dias</option>
                                <option value="">Fixa</option>
                                <option value="">Variável</option>
                                <option value="">Material</option>
                                <option value="">Outros</option>
                            </select>
                    {/* <p className='font-quicksand font-bold text-sm '>Ultimos 30 dias</p>
                    <img src={polygon_despesa_icon} className="pl-1"></img> */}
                </div>
            </div>

            <div className=' border-b-2 px-7 py-5'>
                <p className='font-quicksand font-semibold text-lg'>Vendas & Gastos</p>
                <div className=' pt-5 pb-9'>
                    <p className='font-quicksand text-lg font-normal'>Vendas</p>
                    <div className='flex items-center'>
                        <p className='font-bold text-3xl text-purple-medium'>R$ 5.765,60</p>
                        <div className='flex items-center bg-green-300 rounded-xl h-5 w-14 ml-3 justify-center'>
                            <img src={polygon_despesaG_icon} className=''></img>
                            <p className='font-bold text-xs text-green-800'>+5.2%</p>
                        </div>
                    </div>
                    <p className=' font-quicksand text-xs'>Comparado com o período anterior</p>
                </div>

                <div className=''>
                    <p className='font-quicksand text-lg font-normal'>Gastos</p>
                    <div className='flex items-center'>
                        <p className='font-bold text-3xl text-purple-medium'>R$2.218,25</p>
                        <div className='flex items-center bg-red-400 rounded-xl h-5 w-14 ml-3 justify-center'>
                            <img src={polygon_despesaR_icon} className=''></img>
                            <p className='font-bold text-xs text-red-900'>+5.2%</p>
                        </div>
                    </div>
                    <p className=' font-quicksand text-xs'>Comparado com o período anterior</p>
                </div>
            </div>
        </>
    )
}