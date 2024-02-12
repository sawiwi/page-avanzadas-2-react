import FormWithUs from "../../../components/Form/FormWithUs";
import imgWithUs from '../../../assets/img/carousel/hero_bg_3.jpg'


const ViewPublicWithUs = ()=>{
    return(
        <div className="grid  grid-cols-1 xl:grid-cols-2 m-2 mt-14 3xl:mt-24">
            <div className="col-span-1">
                <div className="bg-opacity-30 h-[60vh] w-[21rem]  xl:h-[100%] xl:w-[100%] ">
                    <img src={imgWithUs} alt="" className="h-full w-full object-cover"/>
                </div>
                <div className="absolute left-2 3xl:left-[8px] top-0 inset-0 flex items-center justify-center xl:justify-start w-[335px] xl:w-[592px] 3xl:w-[720px] h-[22.5rem] xl:h-[100%] pl-3 hover:backdrop-blur-sm duration-150 bg-secondary-grey/10">
                    <div className="flex flex-col w-2/3 3xl:w-2/3  border-l-4 h-10 border-primary">
                        <h2 className=" text-2xl font-bold xl:text-3xl 3xl:text-4xl uppercase pb-2 mb-2 ml-2 text-primary drop-shadow-lg">
                            Publica con nosotros
                        </h2>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <FormWithUs />
            </div>
        </div>
    )
}

export default ViewPublicWithUs;