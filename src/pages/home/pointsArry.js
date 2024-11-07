import bookmaker from '../../images/bookmaker.png';
import contries from '../../images/countries.png';
import fourhk from '../../images/400k.png';
import bestTerms from '../../images/bestTerms.png';
import stablePayOuts from '../../images/stablePayout.png';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

export const usePointsArray = () => {
    const { language } = useContext(AppContext);  
    const translations = require(`../../translations/${language.toLowerCase()}.json`);
    
    const pointsArray = [
        {
            title: translations.homepage.point1,
            image: bookmaker
        },
        {
            title: translations.homepage.point2,
            image: contries
        },
        {
            title: translations.homepage.point3,
            image: fourhk
        },
        {
            title: translations.homepage.point4,
            image: bestTerms
        },
        {
            title: translations.homepage.point5,
            image: stablePayOuts
        }
    ];
    
    return pointsArray;
};
