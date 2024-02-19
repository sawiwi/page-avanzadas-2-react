import FormWithUs from "../../../components/Form/FormWithUs";
import imgWithUs from '../../../assets/img/carousel/hero_bg_3.jpg'


const ViewPublicWithUs = ()=>{
    return(
        <div className="grid grid-cols-1  m-2 mt-12 3xl:mt-24" id="formPublicUs"> 
            <div className="col-span-1">
                        <div className="flex flex-col py-6 xl:py-8">
                            <h2 className="text-3xl font-bold xl:text-4xl  uppercase pb-2 mb-2 ml-2 text-secondary drop-shadow-lg">
                                Publica con nosotros
                            </h2>
                        </div>
                        <div className="flex justify-center my-2 xl:mt-14 xl:my-16">
                            <FormWithUs />
                        </div>
            </div>      
        </div>
      
    )
}

export default ViewPublicWithUs;