import React from "react";

const FiltersPartners = () => {
 return (
    <>
         <div className="flex flex-row flex-wrap ">
            <div className="basis-2/3 my-4 justify-start align-text-bottom">
                <span className=" flex font-semibold ">Total de <span className="font-normal px-2"> 30 socios Unne</span></span>
            </div>
        </div>
        <div className="flex flex-row flex-wrap ">
            <div className="basis-1/3 my-7 justify-start ">
                <label></label>
                <input className="border rounded-xl border-2 w-[50%] p-2 outline-none focus:outline-none" type="text" name="search" id="search" placeholder="Buscar por.." />
            </div>
            <div className="basis-1/3 my-7">
                <label className="mr-2">Tipo de socio</label>
                <select className="border rounded-xl border-2 w-[50%] p-2 outline-none focus:outline-none" name="filterUsu" id="filterUsu">
                    <option value="1">Agente</option>
                    <option value="2">Ejecutivo</option>
                </select>
            </div>
            <div className="basis-1/3 my-7">
                <label className="mr-2 ">Cantidad de Publicaciones</label>
                <select className="border rounded-xl border-2 w-[50%] p-2 outline-none focus:outline-none" name="filterCant" id="filterCant" placeholder="Cantidad de propiedades">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>

    </>
 )
}

export default FiltersPartners;