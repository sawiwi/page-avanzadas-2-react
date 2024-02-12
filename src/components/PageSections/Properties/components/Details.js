import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  parseToCLPCurrency,
  clpToUf,
  ufToClp,
  parseToDecimal,
} from '../../../../utils';
import ExchangeRateServices from '../../../../services/ExchangeRateServices';
import { iconsList } from '../../../Icons';

const Details = ({ property }) => {
  const [ufCurrentValue, setUfCurrentValue] = useState(0);
  const { company, id,  price, title} = property;
  const { RiPencilRulerLine, FaBed, FaBath } = iconsList;

  const getExchangeRateUF = async () => {
    try {
      const response = await ExchangeRateServices.getExchangeRateUF();
      const ufValue = response?.UFs[0]?.Valor;
      const ufValueAsNumber = parseFloat(ufValue.replace(',', '.'));
      setUfCurrentValue(ufValueAsNumber);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getExchangeRateUF();
  }, [ufCurrentValue]);

  return (
    <div className="grid grid-cols-1 xl:flex xl:justify-between p-4 xl:p-2">
      <div>
        <h2 className="text-secondary-800 mt-2 text-lg xl:text-xl text-balance xl:mr-20">
            {title ?? 'Propiedad sin titulo registrado'}
          </h2>
          <p className="text-sm text-secondary my-2">
          Publicado por:{' '}
          <span className="text-secondary-700">
            {company ?? 'Empresa no registrada'}
          </span>
        </p>
        <p className="text-sm text-secondary my-2">
          Código de propiedad:{' '}
          <span className="text-secondary-700">
            {id ?? 'Propiedad no registrada'}
          </span>
        </p>
      </div>
        <div className="text-sm xl:text-lg text-secondary my-3">
        <p className="text-secondary xl:text-sm">Desde</p>
        {property?.currency?.name === 'UF' &&
          property?.currency?.isoCode === 'UF' && (
            <>
              <h4 className="text-xl xl:text-2xl text-secondary font-semibold">
                UF {parseToDecimal(property?.price)}
              </h4>
              <p>
                CLP:{' '}
                {parseToCLPCurrency(ufToClp(property?.price, ufCurrentValue))}
              </p>
            </>
          )}

        {property?.currency?.name === 'Peso Chileno' &&
          property?.currency?.isoCode === 'CLP' && (
            <>
              <h4 className="text-xl xl:text-2xl text-secondary-800 font-semibold">
                UF {clpToUf(property?.price, ufCurrentValue)}
              </h4>
              <p>
                CLP:{''} {parseToCLPCurrency(property?.price || 0)}
              </p>
            </>
          )}
      </div>

    </div>
  );
};

export default Details;
