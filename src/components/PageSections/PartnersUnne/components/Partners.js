import React from "react";
import FiltersPartners from "./FiltersPartners"
import CardUsuario from "./CardUsuario";
import PaginationPartners from "./PaginationPartners";

const Partners = ({isGrid, setIsGrid}) => {
 return (
    <React.Fragment>
  
        <div className="flex relative flex-col w-[100%]">
            <div className="justify-center text-center py-10 font-bold text-5xl">
                <h1>Nuestros socios Unne</h1>
            </div>
            <div className="py-5">
                <FiltersPartners />
            </div>
            <div className="flex flex-wrap flex-row w-full justify-center py-5">
                <CardUsuario />
            </div>
                        {/* PROPERTIES PAGINATION */}
            <div className="flex justify-center py-9">
              <PaginationPartners
                // currentPage={page}
                // totalPages={totalPages}
                // onPageChange={handlePageChange}
              />
            </div>

        </div>
    </React.Fragment>
 )
}

export default Partners;