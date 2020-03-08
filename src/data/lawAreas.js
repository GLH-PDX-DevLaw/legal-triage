import dvImage from '../assets/dv.png';
import houseImage from '../assets/house.png';
import creditImage from '../assets/credit.png';
import discrImage from '../assets/equal.png';
import { dvQuestions } from '../utils/dvQuestions';

export const lawAreas = [
  {
    label: 'Domestic Violence',
    icon: dvImage,
    areaParam: 'dv',
    questions: dvQuestions
  },
  {
    label: 'Housing',
    icon: houseImage,
    areaParam: 'housing'
  },
  {
    label: 'Credit / Debt',
    icon: creditImage,
    areaParam: 'credit'
  },
  {
    label: 'Discrimination',
    icon: discrImage,
    areaParam: 'discr'
  }
];
