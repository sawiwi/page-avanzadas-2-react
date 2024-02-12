import imgBanking from '../../../assets/img/carousel/slide4.jpg'


const BankingAdvice = ()=>{
return(
    <div className="grid  grid-cols-1 xl:grid-cols-2 xl:m-2 mt-8">
        <div className="col-span-1">
            <div className="bg-secondary w-[22rem] xl:w-[595px] 3xl:w-[100%] xl:min-h-[100%] 3xl:min-h-[100%] xl:p-5 3xl:p-16">
                <p className="p-3 pt-4 pb-9 text-lg xl:mt-20 xl:text-md 3xl:text-lg font-normal text-start text-primary 3xl:mt-16 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis fugiat, tenetur eius rem, architecto esse perspiciatis aperiam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe numquam amet doloremque repellendus, culpa accusantium nobis ducimus ipsam impedit praesentium accusamus enim minus sequi pariatur in soluta nam, est ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis fugiat, tenetur eius rem, architecto esse perspiciatis aperiam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe numquam amet doloremque repellendus, culpa accusantium nobis ducimus ipsam impedit praesentium accusamus enim minus sequi pariatur in soluta nam, est ab.
                </p>
            </div>
        </div>
        <div className="col-span-1">
            <div className=' h-[22rem] xl:h-full w-[22rem] xl:w-full'>
                <img src={imgBanking} alt="" className="h-full w-full object-cover  "/>
                {/* <div className="absolute top-0 right-0 flex flex-col mr-2 border-r-4 h-10 border-primary hover:backdrop-blur-sm duration-150 bg-secondary-grey/30 px-10">
                    <h2 className=" text-2xl font-bold xl:text-3xl 3xl:text-4xl uppercase pb-2 mb-2 mr-2 text-primary drop-shadow-lg">
                        Asesoria Bancaria
                    </h2>
                </div> */}
            </div>
            <div className="3xl:right-0 flex items-center w-[360px] 3xl:w-[720px] pl-2 h-[21rem] xl:h-[17rem]">
                <div className="absolute top-[48%] xl:top-0 xl:right-0  3xl:top-0  flex flex-col mr-2  border-primary hover:backdrop-blur-sm duration-150 bg-secondary-grey/30 px-10 xl:w-[49.4%] xl:h-[100%]">
                    <h2 className=" text-2xl mt-32 font-bold xl:text-3xl 3xl:text-4xl uppercase pb-2 mb-2 mr-2 text-primary drop-shadow-lg">
                        Asesoria Bancaria
                    </h2>
                </div>
            </div>
        </div>
    </div>
)
}

export default BankingAdvice;